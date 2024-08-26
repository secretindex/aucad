import { useContext, useState, BaseSyntheticEvent } from "react"
import { Button, Modal, message, Input } from "antd"
import { TextFieldContext } from "../contexts/TextfieldContext"
import { CopyOutlined } from "@ant-design/icons"
import EndText from "../utils/endTextGen"
import { SecondCheckboxContext } from "../contexts/SecondCheckboxContext"
import { PensionerContext } from "../contexts/PensionerContext"
import { Category } from "./ActiveRegister"
import AditionalRejectText from "./SubComponents/AditionalRejectText"

const { TextArea } = Input

interface TextModalProps {
  category: Category
}

const TextModal: React.FC<TextModalProps> = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const textField = useContext(TextFieldContext)
  const globalDocs = useContext(SecondCheckboxContext)
  const penDocs = useContext(PensionerContext)
  const text = textField!.text
  // const textAreaRef = useRef<TextAreaRef | null>(null)

  const [_messageApi, contextHolder] = message.useMessage()

  const generateText = () => {
    if (category === "active") {
      const finalText = new EndText(globalDocs!.docs)
      const rejectText = finalText.returnActivesRejectText()

      textField?.setText(rejectText)
    }
    if (category === "pensioner") {
      const pensionerText = new EndText(penDocs!.docs)
      const penRejectText = pensionerText.returnPensionerText()

      textField?.setText(penRejectText)
    }
  }

  const showModal = () => {
    setIsModalOpen(true)
    generateText()
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    // const textArea = textAreaRef.current!.resizableTextArea!.textArea
    // const textRect = textArea.getBoundingClientRect()

    // console.log(textRect)

    textField?.setText(e.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        message.success("Text copied to clipboard!")
      })
      .catch(() => {
        message.error("Failed to copy text.")
      })
  }

  return (
    <>
      {contextHolder}
      <Button type="primary" className="w-2/6" onClick={showModal}>
        Analisar
      </Button>
      <AditionalRejectText></AditionalRejectText>
      <Modal
        title="Mensagem de Recusa"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
        className="relative"
      >
        <TextArea
          aria-multiline
          value={text}
          onChange={handleTextFieldChange}
          style={{ height: "400px", resize: "none" }}
        ></TextArea>
        <Button
          icon={<CopyOutlined />}
          onClick={handleCopy}
          className="absolute p-2 right-9 bottom-11"
        ></Button>
      </Modal>
    </>
  )
}

export default TextModal
