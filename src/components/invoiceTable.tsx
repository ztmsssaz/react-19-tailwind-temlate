import   { useRef } from "react";
import { jsPDF } from "jspdf";

const InvoiceTable = () => {
  const tableRef = useRef(null);



  const generatePDF = async () => {
    var doc = new jsPDF({ putOnlyUsedFonts: true})
    const generateData = function(amount:number) {
      var result = [];
      var data:any = {
        coin: "100",
        game_group: `${doc.text("سلام",10,10)}`,
        game_name: "XPTO2",
        game_version: "25",
        machine: "20485861",
        vlt: "0"
      };
      for (var i = 0; i < amount; i += 1) {
        console.log(doc.text("سلام",10,10))
        data.id = (i + 1).toString();
        result.push(Object.assign({}, data));j
      }
      return result;
    };
  
    function createHeaders(keys:any) {
      var result = [];
      for (var i = 0; i < keys.length; i += 1) {
        result.push({
          id: keys[i],
          name: keys[i],
          prompt: keys[i],
          width: 65,
          align: "center",
          padding: 0
        });
      }
      return result;
    }
    const fontBinary = await fetch('/assets/fonts/Vazirmatn-Regular.ttf').then(res => res.arrayBuffer());
    doc.addFileToVFS("Vazirmatn-Regular.ttf", btoa(String.fromCharCode(...new Uint8Array(fontBinary))));
    doc.addFont("Vazirmatn-Regular.ttf", "Vazirmatn", "normal");
    doc.setFont("Vazirmatn", "normal");
   

    const headers:any = createHeaders([
      "id",
      "coin",
      "game_group",
      "game_name",
      "game_version",
      "machine",
      "vlt"
    ]);
     doc.table(1, 1, generateData(100), headers, { autoSize: true });  
      doc.save('a4.pdf')
  };
 
  return (
    <div>
      <button onClick={generatePDF}>دانلود PDF</button>

      {/* جدول فاکتور */}
      <table
  ref={tableRef}
  className="min-w-full divide-y divide-gray-700 bg-gray-900 rounded shadow-lg overflow-hidden"
>
  <thead className="bg-gray-800">
    <tr className="text-center">
      <th className="px-5 py-10 text-center text-xs font-medium uppercase tracking-wider text-gray-300">
        ID
      </th>
      <th className="px-5 py-10 text-center text-xs font-medium uppercase tracking-wider text-gray-300">
       Product Name
      </th>
      <th className="px-5 py-10 text-center text-xs font-medium uppercase tracking-wider text-gray-300">
        Price
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-700">
    <tr className="hover:bg-gray-800">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">1</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
        محصول 1
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
        100,000 تومان
      </td>
    </tr>
    <tr className="hover:bg-gray-800">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">2</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
        محصول 2
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
        200,000 تومان
      </td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default InvoiceTable;
