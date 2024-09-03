import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./output.css"

import { PensionerContextProvider } from "./contexts/PensionerContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"
import { InactivesContextProvider } from "./contexts/InactivesContext"
import PasteTextContextProvider from "./contexts/PasteTextContext"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"

import { ConfigProvider } from "antd"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PensionerContextProvider>
      <InactivesContextProvider>
        <TextFieldContextProvider>
          <PasteTextContextProvider>
            <SecondCheckboxContextProvider>

              <ConfigProvider componentSize="large" theme={{
                token: {
                  colorPrimary: "#26a69a",
                  fontFamily: "Rubik",
                }
              }}>
                <App />
              </ConfigProvider>
            </SecondCheckboxContextProvider>
          </PasteTextContextProvider>
        </TextFieldContextProvider>
      </InactivesContextProvider>
    </PensionerContextProvider>
  </React.StrictMode>
)
