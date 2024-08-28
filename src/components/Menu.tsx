import { Layout, Menu, Typography, Image } from "antd"
import {
  HomeOutlined,
  QuestionCircleOutlined,
  ProfileOutlined,
  FireOutlined,
} from "@ant-design/icons"
import { Link } from "react-router-dom"
import AucadLogo from "../assets/aucad horizontal.svg"

const { Header } = Layout
const { Item } = Menu
const { Title } = Typography

export default function MenuAnt() {
  return (
    <Layout>
      <Header className="p-0 m-0 h-full">
        <Menu
          mode="horizontal"
          selectedKeys={[]}
          className="flex items-center justify-between px-2 m-0"
          style={{
            lineHeight: "3rem",
          }}
        >
          <Title style={{ margin: 0 }} className="flex items-center" level={1}>
            <Image
              src={AucadLogo}
              preview={false}
              alt="Aucad Logo"
              width={"100px"}
            ></Image>
          </Title>
          <Menu
            mode="horizontal"
            selectedKeys={[]}
            className="w-5/6 border-0 flex justify-center"
          >
            <Item key="1" icon={<HomeOutlined />}>
              <Link to="/" className="text-inherit">
                Home
              </Link>
            </Item>
            <Item key="2" icon={<ProfileOutlined />}>
              <Link to="/pensionistas" className="text-inherit">
                Pensionistas
              </Link>
            </Item>
            <Item key="3" icon={<FireOutlined />}>
              <Link to="/teste" className="text-inherit">
                Teste
              </Link>
            </Item>
          </Menu>
          <Item
            key="4"
            className="no-underline"
            icon={<QuestionCircleOutlined />}
          >
            <Link to="/about" className="text-inherit">
              Sobre
            </Link>
          </Item>
        </Menu>
      </Header>
    </Layout>
  )
}
