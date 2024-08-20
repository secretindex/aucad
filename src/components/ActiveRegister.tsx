import activesDocument from "./objects/ActivesObj"
import {
  documentsContext,
  SecondCheckboxContext,
} from "../contexts/SecondCheckboxContext"
import { OptionInt } from "./SubComponents/NestedSelect"
import { ReloadOutlined } from "@ant-design/icons"
import { FloatButton } from "antd"
import { TextFieldContext } from "../contexts/TextfieldContext"

type OptList = Array<string | OptionInt | undefined>

interface DocumentosOptionsProps {
  name: string
  required?: boolean
  present?: boolean
  option?: any
  keyName: string
  optionList?: OptList
}

import { useState, useContext, FC } from "react"
import { Typography, Select, Form, Row, Col, Space, Layout } from "antd"
import NestedSelect from "./SubComponents/NestedSelect"
import TextModal from "./TextModal"

const { Option } = Select
const { Content } = Layout

interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: OptList
}

// interface SelectComponentProps {
//   optionList: OptList | undefined
// }

const SelectComponent: FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  const globalDocs = useContext(SecondCheckboxContext)
  const [field, setField] = useState<string>("")

  const handleChange = (value: string) => {
    setField(value)

    console.log(optionList ? optionList : "marmota")

    // console.log(field + " " + value)

    globalDocs?.setDocs({
      ...globalDocs.docs,
      [keyName]: value == "sim" ? true : false,
    })
  }

  // Default
  if (!optionList) {
    return (
      <Select value={field} onChange={handleChange}>
        <Option key="sim" value="sim">
          Sim
        </Option>
        <Option key="nao" value="nao">
          Não
        </Option>
      </Select>
    )
  }

  if (optionList.every((e) => typeof e !== "object")) {
    console.log(optionList)
    return (
      <Select value={field} onChange={handleChange}>
        {optionList.map((opt) => (
          <Option key={opt as string} value={opt}>
            {opt as string}
          </Option>
        ))}
      </Select>
    )
  } else if (optionList.every((e) => typeof e === "object")) {
    return (
      <NestedSelect
        optionList={optionList}
        keyName={keyName}
        globalDocs={globalDocs}
      />
    )
  }
}

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  return (
    <Col span={8}>
      <Form.Item className=" w-full m-0">
        <label className=" text-gray-500">{name}</label>
        <SelectComponent
          optionList={optionList}
          name={name}
          keyName={keyName}
        />
      </Form.Item>
    </Col>
  )
}

const ComponentThree = () => {
  const docs = useContext(SecondCheckboxContext)
  const textField = useContext(TextFieldContext)
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("-")
  }

  const restartAction = () => {
    textField?.setText("")

    docs?.setDocs((prev) => {
      return documentsContext
    })

    window.location.reload()
  }

  return (
    <div className="flex flex-col gap-2 p-10 justify-center items-center max-h-full">
      <Row className="p-2 h-60 justify-center">
        <Col span={18}>
          <Space direction="vertical" size="middle" className="flex w-full">
            <Content className="w-full flex justify-center">
              <Typography.Title className="title-bg" level={4}>
                CADASTRO
              </Typography.Title>
            </Content>
            <Row gutter={[16, 8]}>
              {Object.keys(activesDocument).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  name={activesDocument[doc].name}
                  keyName={doc}
                  optionList={activesDocument[doc].optionList}
                />
              ))}
            </Row>
            <Content className="w-full flex justify-center">
              <TextModal />
            </Content>
            {/* <Button type="primary" block onClick={handleClick}>
              Verify
            </Button> */}
          </Space>
        </Col>
      </Row>
      <FloatButton
        icon={<ReloadOutlined />}
        style={{ border: "1px solid #adadad" }}
        onClick={() => restartAction()}
      />
    </div>
  )
}

export default ComponentThree
