import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auctioneer from "./pages/Auctioneer";
import Bidder from "./pages/Bidder";
import ActionerPage from "./pages/ActionerPage";
import Main from "./pages/Main";
import AppContext from "./context/AppContext";
import BidsDetails from "./pages/BidsDetails";
import BidderPage from "./pages/BidderPage";
import './App.css';

function App() {
  return (
    <AppContext>

      <BrowserRouter >
        <Routes>
          <Route >
            <Route index element={<Auctioneer/>} />
            <Route path="auctioneer" element={<Auctioneer />} />
            <Route path="bidder" element={<Bidder />} />
            <Route path="actionerPage" element={<ActionerPage />} />
            
            <Route path="bidsDetails" element={<BidsDetails />} />
            
            <Route path="bidderPage" element={<BidderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
