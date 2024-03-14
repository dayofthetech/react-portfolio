/* The way to import css modules  */
import About from "./About/About";
import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

/* And to apply the style is with
className but instead of a str, pass a var { }
in this example the .App is the actual class name that
needs to be defined in App.modules.css*/
function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Experience/>
    <Projects />
    <Contact />
  </div>
}

export default App
