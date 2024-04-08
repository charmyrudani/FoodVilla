import Header from "./components/Header"
import RestaurantContainer from "./components/RestaurantContainer"
import RestaurantMenu from "./components/RestaurantMenu";
import About from './components/About';
import Contact from'./components/Contactus';
import Error404 from'./components/Error404';
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<RestaurantContainer/>} />
        <Route path='/restaurants/:resid' element={<RestaurantMenu/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
