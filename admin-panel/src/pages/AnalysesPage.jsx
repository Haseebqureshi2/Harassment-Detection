import useAnalyses from "../hooks/useAnalyses";
import { exportToCSV } from "../utils/exportCSV";
import {
    Search,
    Download,
    AlertTriangle,
    ShieldAlert,
    ShieldCheck,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AnalysesPage() {
    const { data, pagination, loading, query, setQuery } = useAnalyses();

    const handleSearch = (e) => {
        setQuery({ ...query, search: e.target.value, page: 1 });
    };

    const getSeverityBadge = (severity) => {
        const styles = {
            low: "bg-emerald-50 text-emerald-600",
            medium: "bg-amber-50 text-amber-600",
            high: "bg-red-50 text-red-600",
        };
        return `px-3 py-1 rounded-full text-xs font-semibold ${styles[severity]}`;
    };

    const getRiskBadge = (risk) => {
        if (risk >= 9) return "bg-red-50 text-red-600";
        if (risk >= 6) return "bg-amber-50 text-amber-600";
        return "bg-emerald-50 text-emerald-600";
    };

    if (loading) return <div className="p-8">Loading analyses...</div>;

    return (
        <div className="space-y-6 ml-3 mr-3 mb-3">

            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-3 text-gray-400 " />
                    <input
                        type="text"
                        placeholder="Search session id..."
                        value={query.search}
                        onChange={handleSearch}
                        className="pl-10 pr-4 py-2 w-72 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(63,177,181)]"
                    />
                </div>

                <button
                    onClick={() => exportToCSV(data)}
                    className="flex items-center gap-2 bg-[rgb(63,177,181)] text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition"
                >
                    <Download size={18} />
                    Download CSV
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-3">

                <div className="overflow-x-auto">
                    <table className="w-full text-sm min-w-225 border-separate border-spacing-y-2">

                        <thead className="bg-gray-50 text-gray-500">
                            <tr>
                                <th className="p-4 text-left">Session ID</th>
                                <th className="p-4 text-left">Context</th>
                                <th className="p-4 text-center">Risk Score</th>
                                <th className="p-4 text-center">Severity</th>
                                <th className="p-4 text-center">Language</th>
                                <th className="p-4 text-center">Duration</th>
                                <th className="p-4 text-center">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item) => (
                                <tr
                                    key={item._id}
                                    className="bg-white shadow-sm hover:shadow-md transition rounded-xl"
                                >

                                    <td className="p-4 font-medium text-gray-700 rounded-l-xl">
                                        {item.session_id}
                                    </td>

                                    <td className="p-4">{item.context}</td>

                                    {/* RISK */}
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRiskBadge(item.risk_score)}`}>
                                            {item.risk_score}
                                        </span>
                                    </td>

                                    {/* SEVERITY */}
                                    <td className="p-4 text-center">
                                        <span className={getSeverityBadge(item.max_severity)}>
                                            {item.max_severity}
                                        </span>
                                    </td>

                                    <td className="p-4 text-center uppercase">
                                        {item.language}
                                    </td>

                                    <td className="p-4 text-center">
                                        {item.audio_duration_seconds}s
                                    </td>

                                    <td className="p-4 text-center text-gray-500 rounded-r-xl">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {pagination && (
                <div className="bg-white rounded-2xl shadow-md px-6 py-4 flex items-center justify-between">

                    {/* LEFT INFO */}
                    <div className="text-sm text-gray-500">
                        Showing page{" "}
                        <span className="font-semibold text-gray-700">
                            {pagination.page}
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold text-gray-700">
                            {pagination.pages}
                        </span>{" "}
                        • {pagination.total} total results
                    </div>

                    {/* PAGE CONTROLS */}
                    <div className="flex items-center gap-2">

                        {/* PREV */}
                        <button
                            disabled={pagination.page === 1}
                            onClick={() => setQuery({ ...query, page: query.page - 1 })}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-white text-gray-700
             border border-gray-200
             shadow-sm
             hover:border-[rgb(63,177,181)] 
             hover:text-[rgb(63,177,181)]
             hover:shadow-md
             active:scale-95
             transition-all duration-200
             focus:outline-none focus:ring-2 focus:ring-[rgb(63,177,181)]/40
             disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={18} />
                            Prev
                        </button>

                        {/* PAGE NUMBER PILLS */}
                        <div className="flex gap-1 mx-2">
                            {[...Array(pagination.pages)].slice(0, 5).map((_, i) => {
                                const pageNum = i + 1;
                                const active = pageNum === pagination.page;

                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => setQuery({ ...query, page: pageNum })}
                                        className={`w-9 h-9 rounded-lg text-sm font-semibold transition
                ${active
                                                ? "bg-[rgb(63,177,181)] text-white shadow"
                                                : "bg-gray-50 hover:bg-gray-100 text-gray-600"
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        {/* NEXT */}
                        <button
                            disabled={pagination.page === pagination.pages}
                            onClick={() => setQuery({ ...query, page: query.page + 1 })}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl 
             bg-white text-gray-700
             border border-gray-200
             shadow-sm
             hover:border-[rgb(63,177,181)] 
             hover:text-[rgb(63,177,181)]
             hover:shadow-md
             active:scale-95
             transition-all duration-200
             focus:outline-none focus:ring-2 focus:ring-[rgb(63,177,181)]/40
             disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Next
                            <ChevronRight size={18} />
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
}