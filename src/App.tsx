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
import { InactivesContextProvider } from "./contexts/InactivesContext"

import "./App.css"
import PasteTextContextProvider from "./contexts/PasteTextContext"
import InactiveRegister from "./components/InactiveRegister"

function App() {
  return (
    <main className="app min-h-5/6">
      <Router>
        <InactivesContextProvider>
          <PensionerContextProvider>
            <SecondCheckboxContextProvider>
              <TextFieldContextProvider>
                <PasteTextContextProvider>
                  <MenuAnt />
                  <section className="h-full px-6">
                    <Routes>
                      <Route path="/" element={<ComponentThree />}></Route>
                      <Route
                        path="/inativos"
                        element={<InactiveRegister />}
                      ></Route>
                      <Route
                        path="/pensionistas"
                        element={<PensionerRegister />}
                      ></Route>
                      <Route path="/about" loader element={<About />}></Route>
                      <Route path="/about/help" element={<Help />}></Route>
                      <Route
                        path="/about/contact"
                        element={<Contact />}
                      ></Route>
                    </Routes>
                  </section>
                </PasteTextContextProvider>
              </TextFieldContextProvider>
            </SecondCheckboxContextProvider>
          </PensionerContextProvider>
        </InactivesContextProvider>
      </Router>
    </main>
  )
}

export default App
