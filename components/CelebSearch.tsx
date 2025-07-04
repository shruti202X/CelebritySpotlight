import { useState } from "react";
import { useRouter } from "next/router";

export default function CelebSearch() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [celebOptions, setCelebOptions] = useState([]);
  const [selectedCeleb, setSelectedCeleb] = useState("");

  const handleSearch = async () => {
    const response = await fetch("api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: searchInput,
      }),
    });

    const geminiOutput = await response.json();

    console.log("Gemini API Output: " + geminiOutput.text);

    const names = geminiOutput.text
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name !== "");

    setCelebOptions(names);
  };

  const handleSelect = async (e) => {
    const newCeleb = e.target.value;
    setSelectedCeleb(newCeleb);

    const response = await fetch("/api/gemini2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ celebName: newCeleb }),
    });
    const data = await response.json();

    console.log("Gemini2 API Output: " + data.text);

    const data_list = data.text.split(",").map((name) => name.trim());

    router.push({
      pathname: "/signup",
      query: {
        name: newCeleb,
        genre: data_list[0],
        country: data_list[1],
        socialmedia: data_list[2],
        followers: data_list[3],
        topwork: data_list[4],
        secondtopwork: data_list[5],
      },
    });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto" }}>
      <h2>Find your celebrity</h2>

      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Describe what you know about them"
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px",
          fontSize: "1rem",
        }}
      />

      <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
        Search
      </button>

      {celebOptions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <label htmlFor="celebDropdown">Is it someone among these:</label>
          <select
            id="celebDropdown"
            value={selectedCeleb}
            onChange={handleSelect}
            style={{ display: "block", marginTop: "10px", padding: "8px" }}
          >
            <option value="">-- Select --</option>
            {celebOptions.map((celeb, index) => (
              <option key={index} value={celeb}>
                {celeb}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedCeleb && (
        <p style={{ marginTop: "20px" }}>
          You selected: <strong>{selectedCeleb}</strong>
        </p>
      )}
    </div>
  );
}
