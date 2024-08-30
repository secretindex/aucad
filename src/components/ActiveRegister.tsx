import activesDocument from "./objects/ActivesObj"
import {
  documentsContext,
  SecondCheckboxContext,
} from "../contexts/SecondCheckboxContext"
import { OptionInt } from "./SubComponents/NestedSelect"
import { ReloadOutlined } from "@ant-design/icons"
import { TextFieldContext } from "../contexts/TextfieldContext"

import DocumentOptions from "./SubComponents/DocumentOptions"

import React, { useContext, useEffect, useState } from "react"
import { FloatButton, Typography, Row, Col, Space, Layout } from "antd"
import TextModal from "./TextModal"
import { ComplexDocs } from "../utils/docsInterface"
import { useNavigate } from "react-router-dom"

const { Content } = Layout

type OptList = Array<string | OptionInt | undefined>
export type Category = "active" | "inactive" | "pensioner"

export interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: OptList
  category: Category
}

const ComponentThree: React.FC = () => {
  const docs = useContext(SecondCheckboxContext)
  const textField = useContext(TextFieldContext)
  const [optionsWidth, setOptionsWidth] = useState<boolean>(false)

  const navigate = useNavigate()

  const statusReset = () => {
    textField?.setText("")

    docs?.setDocs(() => {
      return documentsContext
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
                ATIVOS
              </Typography.Title>
            </Content>
            <Row gutter={[16, 8]}>
              {Object.keys(activesDocument).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  category="active"
                  name={activesDocument[doc as keyof ComplexDocs].name}
                  keyName={doc}
                  optionList={
                    activesDocument[doc as keyof ComplexDocs].optionList
                  }
                />
              ))}
            </Row>
            <Content className="w-full flex justify-center">
              <TextModal category="active" />
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
