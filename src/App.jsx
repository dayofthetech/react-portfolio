/* The way to import css modules  */
import styles from "./App.module.css";
/* Installing react-router-dom
 npm install --save react-router-dom @tanstack/react-query axios*/
 import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
 import Layout from "./components/Layout";


/* And to apply the style is with
className but instead of a str, pass a var { }
in this example the .App is the actual class name that
needs to be defined in App.modules.css*/

function App(){
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
