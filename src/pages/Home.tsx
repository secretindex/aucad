import { Typography, Button } from "antd"
import { useNavigate } from "react-router-dom"

const { Title, Text } = Typography

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate("/ativos")
  }

  return (
    <section
      style={{
        height: "100%",
      }}
      className={`flex flex-col gap-4 justify-center items-center`}
    >
      <header className="text-center">
        <Title level={2} style={{ fontSize: "3rem" }}>
          A melhor solução em auxiliar de <br />
          <div className="cadastro-home">
            Cadastro
          </div>{" "}
        </Title>
        <Text className="text-gray-600">
          Faça o checklist de seu cadastro e geramos a mensagem automaticamente!
        </Text>
      </header>
      <Button onClick={handleNavigate} color="primary">
        Comece Agora
      </Button>
    </section>
  )
}

export default Home
