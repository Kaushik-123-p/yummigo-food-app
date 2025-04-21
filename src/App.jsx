import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Success from "./pages/Success"
import Error from "./pages/Error"
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes"


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<ProtectedRoutes element={<Success />} />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
