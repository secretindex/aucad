import {
  useContext,
  useEffect,
  useState,
  useRef,
  BaseSyntheticEvent,
  MouseEventHandler,
} from "react"
import { Button, Modal, message, Input } from "antd"
import { TextFieldContext } from "../contexts/TextfieldContext"
import { CopyOutlined } from "@ant-design/icons"
import EndText from "../utils/endTextGen"
import { SecondCheckboxContext } from "../contexts/SecondCheckboxContext"
import { PensionerContext } from "../contexts/PensionerContext"
import { Category } from "./ActiveRegister"

import AditionalRejectText from "./SubComponents/AditionalRejectText"

import { TextAreaRef } from "antd/es/input/TextArea"
import { MouseCoords } from "../pages/TestPage"

const { TextArea } = Input

interface TextModalProps {
  category: Category
}

const TextModal: React.FC<TextModalProps> = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const textField = useContext(TextFieldContext)
  const globalDocs = useContext(SecondCheckboxContext)
  const textRef = useRef<TextAreaRef | null>(null)
  const penDocs = useContext(PensionerContext)

  const [showReject, setShowReject] = useState<boolean>()
  const [mouseCoords, setMouseCoords] = useState<MouseCoords>({ x: 0, y: 0 })

  const handleContextMenu: MouseEventHandler<HTMLTextAreaElement> = (
    e: React.MouseEvent
  ) => {
    e.preventDefault()

    const rect = textRef.current?.resizableTextArea!.textArea.getBoundingClientRect()

    setMouseCoords({
      x: e.clientX - rect!.left + 20,
      y: e.clientY - rect!.top + 60,
    })

    setShowReject(true)
  }

  const handleClick = () => {
    setShowReject(false)
  }


  const text = textField!.text

  const [_messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  const generateText = () => {
    if (category === "active") {
      const finalText = new EndText(globalDocs!.docs)
      const rejectText = finalText.returnActivesRejectText()

      textField?.setText(rejectText.trim())
    }
    if (category === "pensioner") {
      const pensionerText = new EndText(penDocs!.docs)
      const penRejectText = pensionerText.returnPensionerText()

      textField?.setText(penRejectText.trim())
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
      <Modal
        title="Mensagem de Recusa"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
        className="relative"
      >
        <div className="relative">
          <TextArea
            aria-multiline
            spellCheck="false"
            onContextMenu={handleContextMenu}
            onClick={handleClick}
            value={text}
            ref={textRef}
            onChange={handleTextFieldChange}
            style={{ height: "400px", resize: "none" }}
          ></TextArea>
        </div>
        {showReject ? <AditionalRejectText mouseCoords={mouseCoords} /> : <></>}
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
