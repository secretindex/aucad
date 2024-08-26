import MenuAnt from "./components/Menu"
import About from "./pages/About"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"
import { useEffect, useState } from "react"
import Loading from "./components/Loading"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"
import ComponentThree from "./components/ActiveRegister"
import Help from "./pages/Help"
import Contact from "./pages/Contact"
import PensionerRegister from "./components/PensionerRegister"
import { PensionerContextProvider } from "./contexts/PensionerContext"

import "./App.css"

function App() {
  // Remove later
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-5/6">
      <Router>
        <CheckboxContextProvider>
          <PensionerContextProvider>
            <SecondCheckboxContextProvider>
              <TextFieldContextProvider>
                <MenuAnt />
                <Loading isLoading={isLoading}>
                  <section className="h-full px-6">
                    <Routes>
                      <Route
                        path="/"
                        element={<ComponentThree setLoading={setIsLoading} />}
                      ></Route>
                      <Route
                        path="/pensionistas"
                        element={
                          <PensionerRegister setLoading={setIsLoading} />
                        }
                      ></Route>
                      <Route path="/about" loader element={<About />}></Route>
                      <Route path="/about/help" element={<Help />}></Route>
                      <Route
                        path="/about/contact"
                        element={<Contact />}
                      ></Route>
                    </Routes>
                  </section>
                </Loading>
              </TextFieldContextProvider>
            </SecondCheckboxContextProvider>
          </PensionerContextProvider>
        </CheckboxContextProvider>
      </Router>
    </main>
  )
}

export default App
