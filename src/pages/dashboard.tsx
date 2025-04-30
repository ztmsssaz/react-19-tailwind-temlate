// import DynamicForm from '../components/formBuilder/formBuilder'
// import MyDocument from '../components/invoiceTable'
// import React from 'react'
// import ReactDOM from 'react-dom'
import InvoicePDFDownload from '../components/invoiceTable'

function Dashboard() {
   return (
      <div>
         <p className="my-20">Dashboard Page- private</p>
         {/* <InvoicePDF /> */}
         <InvoicePDFDownload />
      </div>
   )
}

export default Dashboard
