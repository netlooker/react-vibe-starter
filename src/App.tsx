import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout, HomePage } from "./components/layout";
import { BikeList, BikeDetail } from "./components/bikes";
import { Checkout } from "./components/rental";
import { RentalProvider } from "./features/rental";

function App() {
  return (
    <Router>
      <RentalProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bikes" element={<BikeList />} />
            <Route path="/bikes/:id" element={<BikeDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<div className="container mx-auto px-4 py-12 text-center">Page not found</div>} />
          </Routes>
        </Layout>
      </RentalProvider>
    </Router>
  );
}

export default App;
