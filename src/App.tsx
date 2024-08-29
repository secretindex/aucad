import MenuAnt from "./components/Menu"
import About from "./pages/About"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TextFieldContextProvider from "./contexts/TextfieldContext"
import ComponentThree from "./components/ActiveRegister"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import PensionerRegister from "./components/PensionerRegister"
import { PensionerContextProvider } from "./contexts/PensionerContext"

import "./App.css"
import TestPage from "./pages/TestPage"
import PasteTextContextProvider from "./contexts/PasteTextContext"

function App() {
  return (
    <main className="app min-h-5/6">
      <Router>
        <PensionerContextProvider>
          <SecondCheckboxContextProvider>
            <TextFieldContextProvider>
              <PasteTextContextProvider>
                <MenuAnt />
                <section className="h-full px-6">
                  <Routes>
                    <Route path="/" element={<ComponentThree />}></Route>
                    <Route
                      path="/pensionistas"
                      element={<PensionerRegister />}
                    ></Route>
                    <Route path="/teste" element={<TestPage />}></Route>
                    <Route path="/about" loader element={<About />}></Route>
                    <Route path="/about/help" element={<Help />}></Route>
                    <Route path="/about/contact" element={<Contact />}></Route>
                  </Routes>
                </section>

              </PasteTextContextProvider>
            </TextFieldContextProvider>
          </SecondCheckboxContextProvider>
        </PensionerContextProvider>
      </Router>
    </main>
  )
}

export default App
