import "./App.css";
import { IMG } from "./components/img/img";

const imageFiles = Array.from({ length: 26 }, (_, index) => index + 1).map(
  (index) => `${index}`
);

// Función para obtener la ruta de cada imagen
function getImagePath(fileName: string) {
  return `./assets/${fileName}.png`;
}

function App() {
  return (
    <>
      <h1>WAIFUS!!!</h1>
      <div className="container">
        {imageFiles.map((fileName, index) => (
          <IMG key={index} src={getImagePath(fileName)} />
        ))}
      </div>
    </>
  );
}

export default App;
