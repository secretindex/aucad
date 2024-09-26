import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./output.css"

import { PensionerContextProvider } from "./contexts/PensionerContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"
import { InactivesContextProvider } from "./contexts/InactivesContext"
import PasteTextContextProvider from "./contexts/PasteTextContext"
import { ActivesContextProvider } from "./contexts/SecondCheckboxContext"

import { ConfigProvider } from "antd"
import RegisterCounterContextProvider from "./contexts/RegisterCountContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RegisterCounterContextProvider>
      <PensionerContextProvider>
        <InactivesContextProvider>
          <TextFieldContextProvider>
            <PasteTextContextProvider>
              <ActivesContextProvider>
                <ConfigProvider
                  componentSize="large"
                  theme={{
                    token: {
                      colorPrimary: "#26a69a",
                      fontFamily: "Rubik",
                    },
                  }}
                >
                  <App />
                </ConfigProvider>
              </ActivesContextProvider>
            </PasteTextContextProvider>
          </TextFieldContextProvider>
        </InactivesContextProvider>
      </PensionerContextProvider>
    </RegisterCounterContextProvider>
  </React.StrictMode>
)
