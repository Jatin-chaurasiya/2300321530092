import Button from "@mui/material/Button";
import { Log } from "../../logging_middleware/logger";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Log(
      "frontend",
      "info",
      "component",
      "application started"
    );
  }, []);
    return <h1>Notification App Frontend</h1>;
}

export default App;