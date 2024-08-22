import { Form, Input, Layout, Typography, Button } from "antd"

const { Content, Header } = Layout
const { Title, Paragraph } = Typography

const Contact = () => {
  return (
    <Content className="flex flex-col items-center">
      <Form className="w-2/6 mt-8">
        <Header
          className="bg-transparent"
          style={{ margin: "0", padding: "0" }}
        >
          <Title
            level={2}
            style={{
              fontSize: "1.3rem",
              margin: "0",
              padding: "0",
              textAlign: "center",
            }}
          >
            Contato
          </Title>
          <Paragraph
            className="text-gray-500"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            Pagina ainda não funciona
          </Paragraph>
        </Header>
        <Form.Item>
          <label htmlFor="" className=" text-gray-500">
            E-mail
          </label>
          <Input placeholder="seu e-mail"></Input>
        </Form.Item>
        <Form.Item>
          <label htmlFor="" className=" text-gray-500">
            Mensagem
          </label>
          <Input.TextArea
            style={{ resize: "none", height: "200px" }}
          ></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button type="primary" block>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Content>
  )
}

export default Contact
