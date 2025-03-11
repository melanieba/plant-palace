import { BrowserRouter, Routes, Route } from 'react-router-dom'; // will need link later
import ListingPage from "./pages/ListingPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/plants/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  