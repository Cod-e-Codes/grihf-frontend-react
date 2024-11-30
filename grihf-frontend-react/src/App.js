// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';

// Import the pages/components you want to route to (example: LandingPage, AboutPage, etc.)
import LandingPage from './Components/Landing_Page/LandingPage';

// Function component for the main App
function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component, which will be rendered on every page */}
        <Navbar />

        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Define individual Route components for different pages */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
