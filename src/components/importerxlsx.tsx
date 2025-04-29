import { useState, ChangeEvent, FormEvent } from "react";
import * as XLSX from 'xlsx';

interface ExcelRow {
  [key: string]: string | number | boolean | null; 
}

function ExcelImport() {
  // onchange states
  const [excelFile, setExcelFile] = useState<ArrayBuffer | null>(null);
  const [typeError, setTypeError] = useState<string | null>(null);

  // submit state
  const [excelData, setExcelData] = useState<ExcelRow[] | null>(null);

  // onchange event
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ];
    let selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target?.result) {
            setExcelFile(e.target.result as ArrayBuffer);
          }
        };
      } else {
        setTypeError('Please select only excel file types');
        setExcelFile(null);
      }
    } else {
      console.log('Please select your file');
    }
  }

  // submit event
  const handleFileSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  }

  return (
    <div className="wrapper">
      <h3>Upload & View Excel Sheets</h3>

      {/* form */}
      <form className="form-group custom-form" onSubmit={handleFileSubmit}>
        <input type="file" className="form-control" required onChange={handleFile} />
        <button type="submit" className="btn btn-success btn-md">UPLOAD</button>
        {typeError && (
          <div className="alert alert-danger" role="alert">{typeError}</div>
        )}
      </form>

      {/* view data */}
      <div className="viewer">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No File is uploaded yet!</div>
        )}
      </div>
    </div>
  );
}

export default ExcelImport;
