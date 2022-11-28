import './App.css';
import Convert from './components/Convert/Convert';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import Topbar from './components/Topbar/Topbar';

function App() {

  return (
    <div>
      <Topbar />

      <Convert  />
      <List />
      {/* <Home /> */}

      <Footer />
    </div>
  );
}

export default App;
