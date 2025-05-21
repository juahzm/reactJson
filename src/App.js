import './styles/tailwind.css';
import Button from './components/Button';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Packages from './components/Packages';
import AddPackage from './components/AddPackage';
import EditPackage from './components/EditPackage';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';


function App() {



  async function getDestinations() {
    const destinationsfromserver = await fetch("http://localhost:5001/destinations");
    const data = await destinationsfromserver.json();
    setDestinations(data);// le modificateur

  }


  useEffect(() => {
    getDestinations();

  }, []);



  async function fetchDestinations(url) {
    const Objres = await fetch(url);
    const data2 = await Objres.json();
    return data2;

  }
  const [destinations, setDestinations] = useState([
  ]);



  async function deletePackage(id) {
    const Objres2 = await fetch(`http://localhost:5001/destinations/${id}`, {
      method: 'DELETE',
    });

    const data3 = await Objres2.json();
    setDestinations(destinations.filter((destination) => destination.id !== id));

    return data3;

  }


  async function editPackag(id, updateData) {
    const Objres3 = await fetch(`http://localhost:5001/destinations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateData)
    });

    const updatedPackage = await Objres3.json();


    setDestinations((destinations) =>
      destinations.map((packag) => (packag.id === id ? updatedPackage : packag))
    );

    alert("Package updated!");
  };



  async function addPackage(destination) {
    const resp = await fetch('http://localhost:5001/destinations', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(destination)
    })


    const newPackage = await resp.json();
    setDestinations([...destinations, newPackage]);

    alert("Package was added to the list!");
  }

  const [showaddPackage, setshowaddPackage] = useState(false);

  return (

    <BrowserRouter>

      <div className="min-h-screen">
        <div className="container mx-auto p-8 border-2 rounded mt-20 mb-20 rounded-lg max-w-scren-md">

          <Nav />
          <Header toogleForm={() => setshowaddPackage(!showaddPackage)} showAdd={showaddPackage} />
          {showaddPackage && < AddPackage onAdd={addPackage} />}

          <Routes>

            <Route path='/packages' element={<Packages destinations={destinations} onDelete={deletePackage} />} />
            <Route path='/edit/:id' element={<EditPackage destinations={destinations} onEdit={editPackag} />} />
            <Route path='/about' element={<About setshowaddPackage={setshowaddPackage} />} />
            <Route path='/home' element={<Home setshowaddPackage={setshowaddPackage} />} />


          </Routes>





          <Footer />
        </div>
      </div>

    </BrowserRouter>
  )

}

export default App;
