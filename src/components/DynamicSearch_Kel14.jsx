import React, { useState, useEffect } from "react";
import "./DynamicSearch_Kel14.css";

const DynamicSearch_Kel14 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data] = useState(["Arya", "Donny", "Lintang", "Aggy"]);
  const [noMatch, setNoMatch] = useState(false);

  // Fungsi untuk menghandle perubahan input pencarian
  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.includes(searchTerm)
    );

    setSearchResults(filteredResults);

    // Cek apakah ada hasil pencarian
    setNoMatch(filteredResults.length === 0);
  }, [searchTerm, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Cari Anggota..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <div className="avatar">{result.charAt(0)}</div>
            {result}
          </li>
        ))}
        {noMatch && <li className="no-match">Tidak ada anggota yang cocok</li>}
      </ul>
    </div>
  );
};

export default DynamicSearch_Kel14;
