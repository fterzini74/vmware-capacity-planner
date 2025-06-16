import * as XLSX from 'xlsx';

export default function FileUploadHandler({ onDataReady }) {
  const handleFile = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames.find((n) => n === 'vInfo');
    const worksheet = workbook.Sheets[sheetName];

    if (!worksheet) {
      alert("❌ Sheet 'vInfo' non trovato");
      return;
    }

    const json = XLSX.utils.sheet_to_json(worksheet);
    onDataReady(json);
  };

  return (
    <div className="p-4 border rounded bg-gray-100">
      <p className="mb-2">📤 Carica il file RVTools (.xlsx)</p>
      <input type="file" accept=".xlsx" onChange={handleFile} />
    </div>
  );
}
