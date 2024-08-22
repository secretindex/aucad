import activesDocument from "./objects/ActivesObj"
import {
  documentsContext,
  SecondCheckboxContext,
} from "../contexts/SecondCheckboxContext"
import { OptionInt } from "./SubComponents/NestedSelect"
import { ReloadOutlined } from "@ant-design/icons"
import { TextFieldContext } from "../contexts/TextfieldContext"

import DocumentOptions from "./SubComponents/DocumentOptions"

import React, { useContext, useEffect, Dispatch, SetStateAction } from "react"
import { FloatButton, Typography, Row, Col, Space, Layout } from "antd"
import TextModal from "./TextModal"
import { ComplexDocs } from "../utils/docsInterface"

const { Content } = Layout

type OptList = Array<string | OptionInt | undefined>

export interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: OptList
}

interface ComponentThreeProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

const ComponentThree: React.FC<ComponentThreeProps> = ({ setLoading }) => {
  const docs = useContext(SecondCheckboxContext)
  const textField = useContext(TextFieldContext)

  useEffect(() => {
    return () => {
      textField?.setText("")
      setLoading(false)
    }
  })

  const restartAction = () => {
    textField?.setText("")

    docs?.setDocs(() => {
      return documentsContext
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
                CADASTRO
              </Typography.Title>
            </Content>
            <Row gutter={[16, 8]}>
              {Object.keys(activesDocument).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  name={activesDocument[doc as keyof ComplexDocs].name}
                  keyName={doc}
                  optionList={
                    activesDocument[doc as keyof ComplexDocs].optionList
                  }
                />
              ))}
            </Row>
            <Content className="w-full flex justify-center">
              <TextModal />
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

export default ComponentThree
