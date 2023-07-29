import Catagories from "./components/Catagories/Catagories";
import Delivery from "./components/Delivery/Delivery";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Meal from "./components/Meal/Meal";
import NewLetters from "./components/NewLetters/NewLetters";
import TopNav from "./components/TopNav/TopNav";
import TopPicks from './components/TopPicks/TopPicks';

function App() {
  return (
    
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Catagories/>
      <NewLetters/>
      <Footer/>
    </div>
  );
}

export default App;
