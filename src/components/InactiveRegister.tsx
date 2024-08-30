import { OptionInt } from "./SubComponents/NestedSelect"
import { ReloadOutlined } from "@ant-design/icons"
import { TextFieldContext } from "../contexts/TextfieldContext"

import DocumentOptions from "./SubComponents/DocumentOptions"

import React, { useContext, useEffect, useState } from "react"
import { FloatButton, Typography, Row, Col, Space, Layout } from "antd"
import TextModal from "./TextModal"

import { InactivesContext, inactivesDefault } from "../contexts/InactivesContext"

import inactiveDocuments from "./objects/InactiveObj"
import { InactivesInt } from "../utils/docsInterface"
import { useNavigate } from "react-router-dom"

const { Content } = Layout

type OptList = Array<string | OptionInt | undefined>

export interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: OptList
}

const InactiveRegister: React.FC = () => {
  const docs = useContext(InactivesContext)
  const textField = useContext(TextFieldContext)
  const [optionsWidth, setOptionsWidth] = useState<boolean>(false)

  const navigate = useNavigate()

  const statusReset = () => {
    textField?.setText("")

    docs?.setDocs(() => {
      return inactivesDefault
    })
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setOptionsWidth(true)
      } else {
        setOptionsWidth(false)
      }
    })
    return () => {
      statusReset()
    }
  }, [])

  const restartAction = () => {
    statusReset()

    navigate(0)
  }

  return (
    <Content className="flex flex-col gap-2 p-10 justify-center items-center max-h-full">
      <Row className="p-2 h-60 justify-center">
        <Col span={optionsWidth ? 30 : 18}>
          <Space direction="vertical" size="middle" className="flex w-full">
            <Content className="w-full flex justify-center">
              <Typography.Title className="title-bg" level={4}>
                INATIVOS
              </Typography.Title>
            </Content>
            <Row gutter={[16, 8]}>
              {Object.keys(inactiveDocuments).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  name={inactiveDocuments[doc as keyof InactivesInt].name}
                  keyName={doc}
                  category="inactive"
                  optionList={
                    inactiveDocuments[doc as keyof InactivesInt].optionList
                  }
                />
              ))}
            </Row>
            <Content className="w-full flex justify-center">
              <TextModal category="inactive" />
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

export default InactiveRegister
