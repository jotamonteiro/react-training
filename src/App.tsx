import "./App.css";
import SimpleCounter from "./components/simple-counter/SimpleCounter";

function App() {
  return (
    <>
      <div id="conteiner">
        <h1>Primeiros Passos</h1>
        <div id="conteiner-counter">
          <SimpleCounter title="Contador" />
          <SimpleCounter title="Contador Com Step 3" step={3} />
          <SimpleCounter title="Contador Com Step 10" step={10} />
        </div>
      </div>
    </>
  );
}

export default App;
