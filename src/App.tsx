import "./App.css"
// import Home from "./pages/TextGen"
import MenuAnt from "./components/Menu"
import About from "./pages/About"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"
import { useEffect, useState } from "react"
import Loading from "./components/Loading"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"
import ComponentThree from "./components/ActiveRegister"
import TextGen from "./pages/TextGen"
import Help from "./pages/Help"
import Contact from "./pages/Contact"

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-5/6">
      <Router>
        <CheckboxContextProvider>
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
                    <Route path="/register" element={<TextGen />}></Route>
                    <Route path="/checkboxes" element={<TextGen />}></Route>
                    <Route
                      path="/pensionistas"
                      element={<h2>Work in progress...</h2>}
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/help" element={<Help />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                  </Routes>
                </section>
              </Loading>
            </TextFieldContextProvider>
          </SecondCheckboxContextProvider>
        </CheckboxContextProvider>
      </Router>
    </main>
  )
}

export default App
