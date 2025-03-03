
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/Dashbord';
import './assets/styles/main.scss';
import { ResultsPage } from './pages/Results';
import { FinalizePage } from './pages/Finalize';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route element={<Layout />}>
          <Route path="/results/:id" element={<ResultsPage />} />
          <Route path="/finalize/:id" element={<FinalizePage />} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </Router>
  )
}

export default App
