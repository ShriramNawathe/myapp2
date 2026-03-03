
import './App.css';
import About from "./screens/about.js";
import Contact from './screens/contact.js';

function App() {
  return(
    <div>
      {/* passing components from screens to app.js */}
      <About />
      <Contact />
    </div>
  );
}

export default App;

