import { DocumentosOptionsProps } from "../ActiveRegister"
import { Col, Form } from "antd"
import SelectComponent from "./SelectComponent"

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
  category
}) => {
  return (
    <Col span={8}>
      <Form.Item className=" w-full m-0">
        <label className=" text-gray-500">{name}</label>
        <SelectComponent
          optionList={optionList}
          category={category}
          name={name}
          keyName={keyName}
        />
      </Form.Item>
    </Col>
  )
}

export default DocumentOptions
