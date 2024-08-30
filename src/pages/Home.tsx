import { Typography, Button } from "antd"
import { Link } from "react-router-dom"

const { Title, Text } = Typography

const Home = () => {
  return (
    <section className="flex flex-col gap-4 h-[88%] justify-center items-center">
      <header className="text-center">
        <Title level={2} style={{ fontSize: "3rem" }}>A melhor solução em auxiliar de <br /><span className="text-[#26a69a] uppercase">Cadastro</span> </Title>
        <Text className="text-gray-600">Faça o checklist de seu cadastro e geramos a mensagem automaticamente!</Text>
      </header>
      <Button color="primary">
        <Link to="ativos">
          Comece Agora
        </Link>
      </Button>
    </section>
  )
}

export default Home
