import { BaseSyntheticEvent, useContext } from "react"

import { Typography, FloatButton, Layout } from "antd"
import CheckboxLabelsAnt from "../components/Checkboxes"
import { TextFieldContext } from "../contexts/TextfieldContext"
import { ReloadOutlined } from "@ant-design/icons"

import { Input } from "antd"
import { RequiredDocs } from "../utils/docsInterface"
import { CheckboxContext } from "../contexts/CheckboxContext"

const { TextArea } = Input
const { Content } = Layout

function TextGen() {
  const textField = useContext(TextFieldContext)
  const docs = useContext(CheckboxContext)
  const text = textField!.text

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
    textField?.setText(e.target.value)
  }

  const restartAction = () => {
    textField?.setText("")
    docs?.setDocs((prev: RequiredDocs) => {
      for (let i in prev) {
        prev[i as keyof RequiredDocs] = false
      }

      return prev
    })
  }

  return (
    <section className="app-container w-full">
      <div className="checkbox-container">
        <CheckboxLabelsAnt docs={docs!.docs} setDocs={docs!.setDocs} />
      </div>
      <Content
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          justifyContent: "center",
          padding: "0 2rem",
        }}
      >
        <Typography.Title level={3} style={{ fontSize: "1.2rem", margin: "0" }}>
          Result
        </Typography.Title>
        <TextArea
          aria-multiline
          value={text.trim()}
          onChange={handleTextFieldChange}
          style={{ height: "500px", resize: "none" }}
        />
      </Content>
        <FloatButton
          icon={<ReloadOutlined />}
          style={{ border: "1px solid #adadad" }}
          onClick={() => restartAction()}
        />
    </section>
  )
}

export default TextGen
