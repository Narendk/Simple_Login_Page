import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Success from "./pages/Success"
 
function App() {
  

  return (
    <BrowserRouter  basename="/Simple_Login_Page">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
