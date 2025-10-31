import React from 'react';
import Header from './components/Header';
import ObjectsPage from './pages/ObjectsPage';
import SubjectsPage from './pages/SubjectsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <ObjectsPage />
      <SubjectsPage />
      <Footer />
    </div>
  );
}

export default App;
