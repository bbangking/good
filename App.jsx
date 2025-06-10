import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function App() {
  const [list, setList] = useState([]);

  const handleAdd = () => {
    const name = prompt('이름을 입력하세요:');
    if (name) {
      const time = new Date().toLocaleString();
      setList(prev => [...prev, { name, time }]);
    }
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(list);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "명단");
    XLSX.writeFile(workbook, "evangelism_list.xlsx");
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>전도 명단</h1>
      <button onClick={handleAdd}>명단 추가</button>
      <button onClick={handleExport} style={{ marginLeft: 10 }}>엑셀로 저장</button>
      <ul>
        {list.map((entry, index) => (
          <li key={index}>{entry.name} - {entry.time}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
