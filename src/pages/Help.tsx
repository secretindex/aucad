import { Typography, Layout, List } from "antd"
const { Content } = Layout
const { Text, Title } = Typography

const Help = () => {
  return (
    <>
      <Content className="p-4">
        <Title level={1} style={{ fontSize: "1.8rem" }}>
          Aucad - Auxiliar de Cadastro
        </Title>
        <Text>
          Aplicativo feito para verificar o cadastro com base no que{" "}
          <strong>falta</strong>, gerando uma mensagem automática de recusa.
        </Text>
        <Title level={2} style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
          Como utilizar
        </Title>
        <Text>
          A interface principal é a primeira que aparece. A cada cadastro novo
          que você for validar, certifique-se que tenha resetado a página
          apertando no botão do canto inferior direito.
        </Text>
        <br />
        <Text>
          <i>Não é necessário que se aperte no botão se for a primeira vez.</i>
        </Text>
        <br />
        <br />
        <Text>
          A segunda página do aplicativo é a versão mais primitiva, onde você
          seleciona as caixinhas e ele automaticamente irá gerar um texto de
          recusa com base nas caixinhas que você marcou.
        </Text>
        <br />
        <Text>
          Cada caixinha foi pensada para gerar <b>apenas uma</b> pequena
          mensagem cada, que é junta com as partes superiores e inferiores da
          mensagem.
        </Text>
        <br />
        <br />
        <Text>A mensagem é editável.</Text>
        <Title level={3} style={{ fontSize: "1.3rem", margin: "1rem 0" }}>
          Dicas
        </Title>
        <List size="small">
          <List.Item>
            - Não precisa selecionar "não" em todo documento que estiver
            faltando. Ele será requerido por padrão caso esteja vazio;
          </List.Item>
          <List.Item>
            - Alguns textos são modelos, como por exemplo, o texto para pedir o
            documento de identidade de algum dependente. Certifique-se de que
            você digitou o nome da pessoa no lugar do texto em maiúsculo.
          </List.Item>
          <List.Item>
            - Se você mudar de aba no aplicativo, as caixinhas selecionadas (da
            página principal) serão resetadas.
          </List.Item>
          <List.Item>
            - O botão de reset da página principal recarrega o aplicativo.
          </List.Item>
        </List>
      </Content>
    </>
  )
}

export default Help
