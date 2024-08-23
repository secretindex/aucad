import { OptionInt } from "./SubComponents/NestedSelect"
import { ReloadOutlined } from "@ant-design/icons"
import { TextFieldContext } from "../contexts/TextfieldContext"

import DocumentOptions from "./SubComponents/DocumentOptions"

import React, { useContext, useEffect, Dispatch, SetStateAction } from "react"
import { FloatButton, Typography, Row, Col, Space, Layout } from "antd"
import TextModal from "./TextModal"
import { PensionerDocs } from "../utils/docsInterface"
// import activesDocument from "./objects/ActivesObj"
import pensionerObj from "./objects/PensionerObj"
import { PensionerContext, pensionerContextDocs } from "../contexts/PensionerContext"

const { Content } = Layout

type OptList = Array<string | OptionInt | undefined>


export interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: OptList
}

interface PensionerProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

const PensionerRegister: React.FC<PensionerProps> = ({ setLoading }) => {
  const docs = useContext(PensionerContext)
  const textField = useContext(TextFieldContext)

  useEffect(() => {
    return () => {
      setLoading(false)
    }
  })

  const restartAction = () => {
    textField?.setText("")

    docs?.setDocs(() => {
      return pensionerContextDocs
    })

    window.location.reload()
  }

  return (
    <Content className="flex flex-col gap-2 p-10 justify-center items-center max-h-full">
      <Row className="p-2 h-60 justify-center">
        <Col span={18}>
          <Space direction="vertical" size="middle" className="flex w-full">
            <Content className="w-full flex justify-center">
              <Typography.Title className="title-bg" level={4}>
                PENSIONISTAS
              </Typography.Title>
            </Content>
            <Row gutter={[16, 8]}>
              {Object.keys(pensionerObj).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  name={pensionerObj[doc as keyof PensionerDocs].name}
                  keyName={doc}
                  category="pensioner"
                  optionList={
                    pensionerObj[doc as keyof PensionerDocs].optionList
                  }
                />
              ))}
            </Row>
            <Content className="w-full flex justify-center">
              <TextModal category="pensioner"/>
            </Content>
          </Space>
        </Col>
      </Row>
      <FloatButton
        icon={<ReloadOutlined />}
        style={{ border: "1px solid #adadad" }}
        onClick={() => restartAction()}
      />
    </Content>
  )
}

export default PensionerRegister
