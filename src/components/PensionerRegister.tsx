import { OptionInt } from "./SubComponents/NestedSelect"
import { ReloadOutlined } from "@ant-design/icons"
import { TextFieldContext } from "../contexts/TextfieldContext"

import DocumentOptions from "./SubComponents/DocumentOptions"

import React, { useContext, useEffect, useState } from "react"
import { FloatButton, Typography, Row, Col, Space, Layout } from "antd"
import TextModal from "./TextModal"
import { PensionerDocs } from "../utils/docsInterface"

import pensionerObj from "./objects/PensionerObj"
import {
  PensionerContext,
  pensionerContextDocs,
} from "../contexts/PensionerContext"
// import { useNavigate } from "react-router-dom"

const { Content } = Layout

type OptList = Array<string | OptionInt | undefined>

export interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: OptList
}

const PensionerRegister: React.FC = () => {
  const docs = useContext(PensionerContext)
  const textField = useContext(TextFieldContext)
  const [optionsWidth, setOptionsWidth] = useState<boolean>(false)


  const [, setRefresh] = useState<number>(0)

  const handleReset = () => {
    setRefresh((prev) => prev + 1)
  }

  // const navigate = useNavigate()

  const statusReset = () => {
    textField?.setText("")

    docs?.setDocs(() => {
      return pensionerContextDocs
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

    handleReset()
  }

  return (
    <Content className="flex flex-col gap-2 p-10 justify-center items-center max-h-full">
      <Row className="p-2 h-60 justify-center">
        <Col span={optionsWidth ? 30 : 18}>
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
              <TextModal category="pensioner" />
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
