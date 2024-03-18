import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header, Sider } from "./Components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/" element={<Sider />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default App;
