import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WorkWithUs from './WorkWithUs';
import ContactUs from './ContactUs';
import CareerApplication from './CareerApplication';
import CertificationPathway from './CertificationPathway';
import SasFramework from './SasFramework';
import AboutUs from './AboutUs';
import DocumentCenter from './DocumentCenter';
import InstitutionalFooter from './InstitutionalFooter';
import ResearchNetwork from './ResearchNetwork';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#fffbf7]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<InstitutionalFooter />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/career-application" element={<CareerApplication />} />
            <Route path="/certification-pathway" element={<CertificationPathway />} />
            <Route path="/sas-framework" element={<SasFramework />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/document-center" element={<DocumentCenter />} />
            <Route path="/research-network" element={<ResearchNetwork />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
