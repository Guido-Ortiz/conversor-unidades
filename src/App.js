import { useState } from 'react';
import './App.css';
import Convert from './components/Convert/Convert';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import Topbar from './components/Topbar/Topbar';

function App() {
  // const [favorites, setFavorites] = useState([{
  //   number: 0,
  //   units: 0,
  //   result: 0
  // }])
  // console.log(favorites)

  return (
    <div>
      <Topbar />

      <Convert  />
      <List />

      <Footer />
    </div>
  );
}

export default App;
