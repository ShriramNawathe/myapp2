// import logo from './logo.svg';
import './App.css';
// importing the about.js and contact.js function from screens 
import About from "./screens/about.js";
import Contact from './screens/contact.js';

// function App() {
//   // return (
//   //   <h1>Hello World</h1>
//   // );

//   //import function from screens about.js and contact.js  
//   // return <About />;
//   // return <Contact />;

//  
// }

 // passing both screens
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

//1
//Basic React App structure-Done Removerd unnecessary code and added boilerplate code to know we are using react and passing function from screens to app.js
//screens and components created

// 2 go about.js in screens folder

//3
//return <About />
// imported About from screens so it can visibale in browser

//4 basically this happend
// screens folder created and about.js file created and inported in app.js

//5 screens/contact.js created and ipmorting in app.js

//6 contact and about js  fils added in app.js returning using div and calling both functions <About /> and <Contact /> passed as components