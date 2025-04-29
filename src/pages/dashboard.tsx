import DynamicForm from '../components/formBuilder/formBuilder';
// import InvoiceTable from '../components/invoiceTable'
function Dashboard() {
  
   return (
      <div> 
         <p className="my-20">Dashboard Page- private</p>
       
         <div>
       {/* <InvoiceTable />  */}
    <DynamicForm   />
       
    </div>

      </div>
   )
}

export default Dashboard
