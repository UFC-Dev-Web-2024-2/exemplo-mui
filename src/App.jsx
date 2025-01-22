import { useState } from "react";
import Button from "@mui/material/Button";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span style={{fontSize: "20px", fontWeight: "bold", marginBottom: "30px"}}>Contando: {count} </span>
      <Button variant="contained" onClick={() => setCount((prev) => prev + 1)}>
        Incrementar
      </Button>
    </main>
  );
};

export default App;
