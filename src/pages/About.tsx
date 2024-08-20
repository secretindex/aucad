import { Typography, Layout, Popover, List } from "antd"
import GitHubIcon from "@mui/icons-material/GitHub"

const { Content } = Layout
const { Text, Title, Link } = Typography

const popContent = (
  <div>
    <Text>Escute e/ou baixe de graça 🎶</Text>
  </div>
)

const About = () => {
  return (
    <section className="py-5 flex flex-col">
      <Title level={2} style={{ fontSize: "1.5rem", margin: "0" }}>
        Made by
        <Popover placement="right" content={popContent} title="👈 Minhas músicas">
          <Link href="https://ckaeiront.bandcamp.com" target="_blank" style={{ fontSize: "inherit", color: "inherit" }}> Caio Programas</Link>
        </Popover>
      </Title>
      <Content className="my-3">
        <Text>
          Feel free to download and modify the code.
        </Text>
        <Title level={3} style={{ fontWeight: "bold", fontSize: "0.9rem",  margin: "0.5rem 0 0 0" }}>
          Programas/Tecnologias utilizadas
        </Title>
        <List size="small">
          <List.Item>
            Logo: Inkscape
          </List.Item>
          <List.Item>
            UI: Ant Design
          </List.Item>
          <List.Item>
            Framework: Nenhum
          </List.Item>
          <List.Item>
            Library: React
          </List.Item>
        </List>
      </Content>
      <Content className="w-fit">
        <Link
          href="https://github.com/secretindex/Python-Scripts"
          target="_blank"
          className="flex flex-row justify-start items-center gap-2"
          style={{ width: "fit-content" }}
        >
          <GitHubIcon className=" text-slate-950" />
          <Text>Official Repository</Text>
        </Link>
      </Content>
    </section>
  )
}

export default About
