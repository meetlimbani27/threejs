import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
  return (
    <main className="app transition-all ease-in">
      <Customizer />
      <Home />
      <Canvas />
    </main>
  )
}

export default App
