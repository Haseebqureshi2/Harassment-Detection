// utils/exportCSV.js
export const exportToCSV = (data) => {
  if (!data || data.length === 0) return;

  const headers = Object.keys(data[0]);

  const rows = data.map(obj =>
    headers.map(h => `"${obj[h] ?? ""}"`).join(",")
  );

  const csvContent = [headers.join(","), ...rows].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "analyses.csv";
  a.click();
};