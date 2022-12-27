import React from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

const Dashboard = () => {
    const doc = new jsPDF();
    /* const doc = new jsPDF();
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        let imgWidth = 208;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      }) */
    const downloadPDF = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                let imgWidth = 208;
                let imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save("download.pdf");
            })
    }
    return (
        <div >
            <table id="divToPrint" style={{ display: 'flex', justifyContent: 'center' }}>
                <tbody style={{ border: '1px solid black' }}>
                    <tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                </tbody>
            </table>
            <button type="" onClick={() => downloadPDF()}>Download</button>
        </div>
    );
};

export default Dashboard;