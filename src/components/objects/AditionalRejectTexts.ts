export interface AditionalText {
  name: string
  text: string
}

type AdTextList = Array<AditionalText>

const AditionalTexts: AdTextList = [
  {
    name: "Número do Suporte",
    text: "Número do suporte: +55 (96) 3082-1277\nHorários: 08:00 às 17:00, segunda a sexta;",
  },
  {
    name: "ID +10 anos",
    text: "Obs: Documento de identidade foi emitido em ANO, ultrapassando o limite de 10 anos desde a data de emissão;",
  },
  {
    name: "Dependente +21",
    text: "Obs: Para dependente filho(a) com mais de 21 anos, é necessário que se apresente laudo/atestado médico caso seja declarado inválido. Caso não, remover como dependente previdenciário;",
  },
  {
    name: "Comprovante sem data",
    text: "Obs: Comprovante enviado não possui data de emissão. Favor, enviar outro comprovante dentro do prazo acima;",
  },
  {
    name: "Declaração sem comprovante",
    text: "Obs: Envie qualquer conta que, mesmo que não esteja em seu nome, coincida com o endereço escrito na declaração de residência enviada;",
  },
  {
    name: "Comprovante desatualizado",
    text: "Obs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima;",
  },
  {
    name: "Dec. de Res. Não Oficial",
    text: "Obs: Aceitamos apenas a declaração oficial da Amprev. Favor, assine e anexe ao cadastro;",
  },
  {
    name: "CPF dependente",
    text: "Obs: Enviar qualquer documento contendo o número do CPF do dependente;",
  },
  {
    name: "Identidade incompleta",
    text: "Obs: Enviar identidade frente e verso;",
  },
  {
    name: "CNH Incompleta",
    text: "Obs: Enviar CNH completa (partes superior e inferior);",
  },
  {
    name: "Contracheque desatualizado",
    text: "Obs: Contracheque data do mês MES, favor, enviar um correspondente ao mês anterior à data da realização seu cadastro",
  },
  {
    name: "Identidade ilegível",
    text: "Obs: Documento de identidade enviado está ilegível. Favor, enviar outra foto em melhor qualidade;",
  },
]

export default AditionalTexts
