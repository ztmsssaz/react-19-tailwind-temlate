import DataTable from 'react-data-table-component'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import Papa from 'papaparse'
//@ts-ignore
import { vazirFont } from '../../public/assets/fonts/Vazirmatn-Regular-normal' // فقط ایمپورت برای اجرا، نه default
import { useState } from 'react'

const MyTable = () => {
   // داده تستی
   const testData = [
      { id: 1, name: 'علی', email: 'ali@example.com' },
      { id: 2, name: 'زهرا', email: 'zahra@example.com' },
      { id: 3, name: 'حسن', email: 'hasan@example.com' },
   ]
   // ستون‌ها
   const columns: any = [
      {
         name: 'شناسه',
         selector: (row: { id: any }) => row.id,
         sortable: true,
      },
      {
         name: 'زهرا',
         selector: (row: { name: any }) => row.name,
         sortable: true,
      },
      {
         name: 'ایمیل',
         selector: (row: { email: any }) => row.email,
         sortable: true,
      },
   ]
   const [selectedData, setSelectedData] = useState<any[]>(testData)

   const exportCSV = () => {
      console.log(selectedData)
      const csv = Papa.unparse(selectedData.length ? selectedData : testData)
      const blob = new Blob(['\uFEFF' + csv], {
         type: 'text/csv;charset=utf-8;',
      }) // \uFEFF = BOM
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.setAttribute('download', 'table.csv')
      document.body.appendChild(link)
      link.click()
   }

   const exportPDF = () => {
      const doc = new jsPDF()

      // ثبت فونت
      doc.addFileToVFS('Vazir.ttf', vazirFont)
      doc.addFont('Vazir.ttf', 'Vazir', 'normal')

      // استفاده از فونت
      doc.setFont('Vazir')

      doc.setFontSize(14)
      const sourceData = selectedData.length > 0 ? selectedData : testData

      autoTable(doc, {
         head: [columns.map((col: { name: any }) => col.name)],
         body: sourceData.map((row) =>
            columns.map((col: any) => col.selector(row))
         ),
         headStyles: {
            font: 'Vazir',
            fontStyle: 'normal',
         },
         bodyStyles: {
            font: 'Vazir',
         },
         styles: {
            font: 'Vazir',
         },
         footStyles: {
            font: 'Vazir',
         },
      })
      doc.save('table.pdf')
   }

   return (
      <div style={{ padding: 20 }}>
         <h2>📋 جدول تستی</h2>
         <DataTable
            columns={columns}
            data={testData}
            selectableRows
            pagination
            highlightOnHover
            onSelectedRowsChange={(e) => setSelectedData(e.selectedRows)}
         />
         <div style={{ marginTop: 10 }}>
            <button onClick={exportCSV}>📤 خروجی CSV</button>
            <button onClick={exportPDF} style={{ marginRight: 10 }}>
               📄 خروجی PDF
            </button>
         </div>
      </div>
   )
}

export default MyTable
