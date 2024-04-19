import camaa from "./assets/camaa.png"

function App() {
  const contenido="Hola soy Gael y esta es mi camara";
  const imagen=()=>{

  }
  return (
    <>
      <div className="caja"></div>
      {contenido}
      <img src={camaa} alt=""/>
    </>
  );
}

export default App;
