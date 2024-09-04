import React from 'react'
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from 'html2canvas';

export default function Genratepdf() {


    const generatePDF = async () => {
        const input = document.getElementById("divToPrint");
      
        const canvas = await html2canvas(input, { scrollY: -window.scrollY });
      
        const imgData = canvas.toDataURL("image/png");
      
        const pdf = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: "a4",
        });
      
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("myPDF.pdf");
      };
  return (
    <div>
      <button className="btn btn-lg rounded-0 btn-warning shadow " onClick={generatePDF}>Download Ticket</button>
    </div>
  )
}
