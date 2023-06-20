import { useState } from "react";
import "./App.css";
import Child from "./components/child";

function App() {
  const [valueInput, setInput] = useState("");
  const inputan = (e) => {
    setInput(e.target.value);
  };
  const [valHasilInput, setHasilInput] = useState([]);
  const hasilInput = () => {
    const gabunganValue = [...valHasilInput, valueInput];
    setHasilInput(gabunganValue);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <input value={valueInput} onChange={inputan} placeholder="Ketik bebas" />{" "}
      <br />
      <button onClick={hasilInput}>Simpan</button>
      <Child valueDariParent={valHasilInput} setDariParent={setHasilInput} />
    </div>
  );
}

export default App;
