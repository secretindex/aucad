import { useContext, useState, BaseSyntheticEvent } from "react"
import { Button, Modal, message } from "antd"
import { Input } from "antd"
import { TextFieldContext } from "../contexts/TextfieldContext"
import { CopyOutlined } from "@ant-design/icons"
import EndText from "../utils/endTextGen"
import { SecondCheckboxContext } from "../contexts/SecondCheckboxContext"

const { TextArea } = Input

const TextModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const textField = useContext(TextFieldContext)
  const globalDocs = useContext(SecondCheckboxContext)
  const text = textField!.text

  const [_messageApi, contextHolder] = message.useMessage()

  const generateText = () => {
    const finalText = new EndText(globalDocs!.docs)
    const rejectText = finalText.returnFinalText()

    textField?.setText(rejectText)
  }

  const showModal = () => {
    setIsModalOpen(true)
    generateText()
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
    textField?.setText(e.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      // info()
      message.success('Text copied to clipboard!');
    }).catch(() => {
      message.error('Failed to copy text.');
    });
  };

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
        <TextArea
          aria-multiline
          value={text.trim()}
          onChange={handleTextFieldChange}
          style={{ height: "400px", resize: "none" }}
        >

        </TextArea>
        <Button
          icon={<CopyOutlined />}
          onClick={handleCopy}
          className="absolute p-2 right-8 bottom-10"
        ></Button>
      </Modal>
    </>
  )
}

export default TextModal
