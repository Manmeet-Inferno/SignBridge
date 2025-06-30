import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import SubjectPage from './pages/SubjectPage';
import TranslatePage from './pages/TranslatePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/translate/:noteId" element={<TranslatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 