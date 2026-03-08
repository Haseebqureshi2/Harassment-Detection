import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadPdf = async (elementId, fileName = "analysis-report") => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error("Element not found:", elementId);
    return;
  }

  try {
    // 🔥 Expand all accordions before capture
    const collapsibles = element.querySelectorAll("[data-pdf-force-open]");
    collapsibles.forEach((el) => {
      el.setAttribute("data-open", "true");
    });

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      ignoreElements: (el) =>
        el.classList?.contains("no-pdf"), // optional exclusion
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${fileName || "analysis-report"}.pdf`);
  } catch (err) {
    console.error("PDF generation failed:", err);
  }
};