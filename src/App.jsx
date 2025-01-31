import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
