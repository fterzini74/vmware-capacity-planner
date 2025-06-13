import React, { useState } from 'react';
import FileUploadHandler from '../components/FileUploadHandler';
import { exportPivotToExcel } from '../utils/exportPivot';

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-primary">📊 VMware Capacity Planner</h1>
      <FileUploadHandler onDataReady={setData} />
      {data && (
        <div className="mt-6">
          <button
            onClick={() => exportPivotToExcel(data)}
            className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-secondary"
          >
            📤 Esporta in Excel
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
