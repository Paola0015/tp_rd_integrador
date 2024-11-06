import PDFDocument from "pdfkit";
import fs from "fs";

export const generatePDF = () => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const path = "./informes/informe.pdf";

    doc.pipe(fs.createWriteStream(path));
    doc.fontSize(25).text("Informe de Reclamo", 100, 100);
    doc.text("Este es un informe de prueba...");
    doc.end();

    doc.on("finish", () => {
      resolve(path);
    });

    doc.on("error", (error) => {
      reject(error);
    });
  });
};
