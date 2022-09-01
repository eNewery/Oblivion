
import './App.css';
import ItemListContainer from './assets/ItemListContainer';
import NavBar from './assets/NavBar';

function App() {

  const items = ["Pronto productos disponibles aquí"]

  return (
    <div>
<NavBar/>
<ItemListContainer productos={items}/>
    </div>
  );
}

export default App;
