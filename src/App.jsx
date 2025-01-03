import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Page404 } from './pages/Page404'
import { GlobalStyles } from "./GlobalStyles"
import { Detalhes } from "./pages/Detalhes"

function App() {
   return (
    <>
      <BrowserRouter>
      <GlobalStyles/>
        <Routes>
          <Route path="detalhes/:id" element={<Detalhes/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<Page404/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
