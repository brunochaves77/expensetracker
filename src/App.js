import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-expense" element={<AddExpense />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
