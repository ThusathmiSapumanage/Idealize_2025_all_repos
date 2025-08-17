import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DonorLogin from './pages/DonorLogin';
import NGOLogin from './pages/NGOLogin';
import Registration from './pages/Registration';
import DonorDashboard from './pages/DonorDashboard';
import HospitalPage from './pages/HospitalPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NGORegistration from './pages/NGORegistration';
import NGODashboard from './pages/NGODashboard';
import Campaigns from './pages/Campaigns';
import UrgentNeeds from './pages/UrgentNeeds';
import Hospitals from './pages/Hospitals';

function AppContent() {
  const navigate = useNavigate();
  const [selectedHospital, setSelectedHospital] = useState(null);

  const donationTypes = [
    { id: 1, name: "Blood Donation", info: "Whole blood donation. Takes about 45 minutes." },
    { id: 2, name: "Plasma Donation", info: "Plasma collection through plasmapheresis. Takes 1-2 hours." },
    { id: 3, name: "Platelet Donation", info: "Platelet collection via apheresis. Takes about 2 hours." },
    { id: 4, name: "Organ Donation", info: "Register as an organ donor to save lives." },
    { id: 5, name: "Medical Equipment", info: "Donate gently used medical equipment." },
    { id: 6, name: "Financial Support", info: "Monetary donations for hospital services." }
  ];

  const donations = [
    { id: 1, donorName: "John Smith", amount: 5000, date: "2023-06-15", status: "completed" },
    { id: 2, donorName: "Sarah Johnson", amount: 10000, date: "2023-06-18", status: "completed" },
    { id: 3, donorName: "Michael Brown", amount: 7500, date: "2023-06-20", status: "pending" },
  ];

  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      image: "https://pia.gov.ph/wp-content/uploads/2024/08/Laoag-City-General-Hospital-to-get-improved-facilities-services.jpg",
      address: "123 Medical Drive, Healthcare City",
      contact: "(555) 123-4567",
      email: "contact@citygeneral.org",
      hours: "24/7 Emergency Services\nOutpatient: Mon-Fri 8am-6pm",
      description: "City General Hospital is a leading healthcare provider with state-of-the-art facilities and a team of dedicated medical professionals committed to delivering exceptional patient care."
    },
    {
      id: 2,
      name: "Metropolitan Medical Center",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      address: "456 Wellness Avenue, Downtown",
      contact: "(555) 987-6543",
      email: "info@metromedical.org",
      hours: "Mon-Fri: 8am-8pm\nSat-Sun: 9am-5pm",
      description: "Metropolitan Medical Center provides patient-centered care with a focus on innovative treatments and compassionate service in a comfortable environment."
    },
    {
      id: 3,
      name: "Community Children's Hospital",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      address: "789 Care Boulevard, Family District",
      contact: "(555) 246-8101",
      email: "support@childrenshospital.org",
      hours: "24/7 Pediatric Emergency\nClinics: Mon-Sat 7am-7pm",
      description: "Specialized pediatric care facility offering comprehensive medical services for children from birth through adolescence with child-friendly environments."
    },
    {
      id: 4,
      name: "University Teaching Hospital",
      image: "https://miro.medium.com/v2/resize:fit:900/1*W3oVd6pVhnZWItqUCV7iNA.png",
      address: "101 College Road, University District",
      contact: "(555) 369-1214",
      email: "contact@universityhospital.edu",
      hours: "24/7 Services\nTeaching Clinics: Weekdays 9am-4pm",
      description: "Academic medical center combining cutting-edge research with clinical care, training the next generation of healthcare professionals while serving the community."
    },
    {
      id: 5,
      name: "Regional Trauma Center",
      image: "https://img.dpr.com/content/uploads/project-hero/aus-hca-rapides.jpg?auto=compress%2Cformat&fit=clip&q=80&w=2880&s=d2e20fb78739e0ba2c342b07a6eb3007",
      address: "202 Emergency Lane, Civic Center",
      contact: "(555) 789-0123",
      email: "trauma@regionalmedical.org",
      hours: "24/7 Trauma Services\nSpecialty Clinics by Appointment",
      description: "Level I trauma center providing comprehensive emergency care with specialized teams ready 24/7 to handle the most critical cases."
    },
    {
      id: 6,
      name: "Riverside Rehabilitation",
      image: "https://www.riversideonline.com/-/media/about/news-center/riverside-rehabilitation-hospital-front-entrance.jpg",
      address: "303 Recovery Road, Health Park",
      contact: "(555) 456-7890",
      email: "rehab@riverside.org",
      hours: "Mon-Fri: 7am-7pm\nSat: 8am-2pm",
      description: "Specialized rehabilitation facility offering physical, occupational, and speech therapy services with personalized treatment plans for optimal recovery."
    }
  ];

  const handleAddCampaign = () => {
    alert("New campaign creation would be implemented here");
  };

  // const handleAddUrgentNeed = () => {
  //   alert("New urgent need creation would be implemented here");
  // };

  const handleDonate = (donationTypeId) => {
    const donationType = donationTypes.find(t => t.id === donationTypeId);
    alert(`Donation initiated for ${donationType.name} at ${selectedHospital.name}`);
  };

  return (
    <div className="App">
      <Routes>
        {/* HomePage - Only Footer */}
        <Route path="/" element={
          <>
            <HomePage />
            <Footer />
          </>
        } />

        {/* Login/Registration Pages - No Header or Footer */}
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/ngo-login" element={<NGOLogin />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/ngo-register" element={<NGORegistration />} />

        {/* Donor Dashboard - Header and Footer */}
        <Route path="/donor-dashboard" element={
          <>
            <Header />
            <DonorDashboard
              hospitals={hospitals}
              onSelectHospital={(hospital) => {
                setSelectedHospital(hospital);
                navigate('/hospital');
              }}
            />
            <Footer />
          </>
        } />

        {/* Hospital Page - Header and Footer */}
        <Route path="/hospital" element={
          <>
            <Header />
            <HospitalPage
              donationTypes={donationTypes}
              onBack={() => navigate('/donor-dashboard')}
              onDonate={handleDonate}
            />
            <Footer />
          </>
        } />

        {/* NGO Dashboard - No Header or Footer */}
        <Route path="/ngo-dashboard" element={
          <NGODashboard
            donations={donations}
            hospitals={hospitals}
            onAddCampaign={handleAddCampaign}
          />
        } />

        {/* Campaigns Page - No Header or Footer */}
        <Route path="/campaigns" element={
          <Campaigns />
        } />

        {/* Urgent Needs Page - No Header or Footer */}
        <Route path="/urgent-needs" element={
          <UrgentNeeds />
        } />

        {/* Hospitals Page - No Header or Footer */}
        <Route path="/hospitals" element={
          <Hospitals />
        } />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;