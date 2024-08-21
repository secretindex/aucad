import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import { ConfigProvider } from "antd"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider componentSize="large" theme={{
      token: {
        colorPrimary: "#26a69a",
        fontFamily: "Inter",
      }
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
