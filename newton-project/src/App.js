import React from 'react'
import Main from './Main'
// import Header from './Header'\
import { Flights } from './component/flights/Flights'
import {Hotels} from './component/hotel/Hotels'
import Perfectland from './component/perfectland/Perfectland'
import Experiences from './component/experience/Experiences'
import BundlesSave from './component/bundelsave/BundlesSave'
// import JoinVIP from './component/sidepage/JoinVIP'
// import Help from './component/sidepage/Help'
// import { Findmytrip } from './component//sidepage/Findmytrip'
// import Onflight from './component/flights/Onflight'
// import Signin from './component/sidepage/Signin'



import {
  Route,
  Routes,
  Router
} from 'react-router-dom'
import Footar from './Footar'
import Home from './Home'
// import Header from './Header'

const App = () => {
  return (
    <>
      <Main />
      {/* <Header /> */}
      <Routes>
      <Route path='/'element={<Home/>} />
        <Route path='/flight'element={<Flights/>} />
        <Route path='/hotels' element={ <Hotels />} />
        <Route path='/perfectland' element={<Perfectland/>} />
        <Route path='/bundlesSave' element={<BundlesSave/>} />
        <Route path='/experiences' element={<Experiences/>} />
        {/* <Route path='/joinVIP' element={<JoinVIP/>} />
        <Route path='/help' element={<Help/>} />
        <Route path='/findmytrip' element={<Findmytrip/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/onflight' element={<Onflight/>} /> */}
      </Routes>
      {/* <Footar /> */}
    </>
  )
}

export default App
