import { Button, List } from "antd"

const AditionalRejectText: React.FC = () => {
  // Create an object and use map to render a button for each button

  return (
    <div className="dropdown">
      <header>
        <h4 className="text-center font-bold">Textos adicionais</h4>
      </header>
      <List size="small" className="w-full">
        <List.Item>
          <Button className="w-full">Número do Suporte</Button>
        </List.Item>
        <List.Item>
          <Button className="w-full">Identidade + 10</Button>
        </List.Item>
        <List.Item>
          <Button className="w-full">Identidade incompleta</Button>
        </List.Item>
      </List>
    </div>
  )
}

export default AditionalRejectText
