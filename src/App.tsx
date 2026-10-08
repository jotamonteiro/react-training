import "./App.css";
import SimpleCounter from "./components/simple-counter/SimpleCounter";

function App() {
  return (
    <>
      <div className="first">
        <h1>Primeiros Passos</h1>
        <SimpleCounter title="Contador" />
      </div>
    </>
  );
}

export default App;
