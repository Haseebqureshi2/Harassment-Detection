import useFeedback from "../hooks/useFeedback";
import { exportToCSV } from "../utils/exportCSV";
import RatingStars from "../components/ui/RatingStars";
import {
  Search,
  Download,
  ChevronLeft,
  ChevronRight,
  MessageSquareHeart,
} from "lucide-react";

export default function FeedbackPage() {
  const { data, pagination, loading, query, setQuery } = useFeedback();

  const handleSearch = (e) => {
    setQuery({ ...query, search: e.target.value, page: 1 });
  };

  if (loading)
    return <div className="p-8">Loading feedback...</div>;

  return (
    <div className="space-y-6 ml-4 mr-3 mb-3">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by email..."
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

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-md p-3">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-y-2">

            <thead className="text-gray-500">
              <tr>
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-center">Accuracy</th>
                <th className="p-4 text-center">Usefulness</th>
                <th className="p-4 text-center">Recommend</th>
                <th className="p-4 text-center">Date</th>
              </tr>
            </thead>

            <tbody>
              {!data.length ? (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-400">
                    <MessageSquareHeart className="mx-auto mb-2" />
                    No feedback found
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item._id} className="bg-white shadow-sm hover:shadow-md transition">

                    <td className="p-4 rounded-l-xl">
                      <div className="font-semibold text-gray-700">
                        {item.firstName}
                      </div>
                      <div className="text-xs text-gray-400">
                        {item.email}
                      </div>
                    </td>

                    <td className="p-4 text-center">
                      <RatingStars value={item.ratings.accuracy} />
                    </td>

                    <td className="p-4 text-center">
                      <RatingStars value={item.ratings.usefulness} />
                    </td>

                    <td className="p-4 text-center">
                      <RatingStars value={item.ratings.recommend} />
                    </td>

                    <td className="p-4 text-center text-gray-500 rounded-r-xl">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                  </tr>
                ))
              )}
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