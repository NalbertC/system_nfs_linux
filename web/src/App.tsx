import { FileContextProvider } from "./contexts/Files";
import { WebRoutes } from "./routes/WebRoutes";
import "./styles/tailwind.css";

function App() {
  return (
    <FileContextProvider>
      <WebRoutes />
    </FileContextProvider>
  );
}

export default App;
