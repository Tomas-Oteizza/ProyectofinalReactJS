import Navbar from "./components/navbar"
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <>
     <Navbar/>
     <ItemListContainer
      nombre = "Bienvenido"
     />
    </>
  );
}

export default App;
