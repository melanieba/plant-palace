import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // will need link later
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";

export function App() {
  console.log("✅ App component is rendering!");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/plants" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  