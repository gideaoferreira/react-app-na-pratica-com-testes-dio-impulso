import { BrowserRouter } from "react-router-dom";
import Routes from "@/routes/index";
import { GlobalStyle } from "./design/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
