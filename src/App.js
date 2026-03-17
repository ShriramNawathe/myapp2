
import './App.css';
import About from "./screens/about.js";
import Contact from './screens/contact.js';

function App() {
  return(
    <div>
      {/* about getting function from components Title.js and Unorderedlist.js */}
      <About />
      {/* screens contact.js */}
      <Contact />
    </div>
  );
}

export default App;

