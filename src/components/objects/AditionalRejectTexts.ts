interface AditionalText {
  name: string
  text: string
}

type AdTextArray = Array<AditionalText>

const AditionalTexts: AdTextArray = [
  {
    name: "Número do Suporte",
    text: "Número do suporte: +55 (96) 3082-1277\nHorários: 08:00 às 17:00, segunda a sexta;",
  },
  {
    name: "ID Dependente +10 anos",
    text: "Obs: Documento de identidade foi emitido em ANO, ultrapassando o limite de 10 anos desde a data de emissão;"
  },
  {
    name: "Dependente +21",
    text: "Obs: Para dependente filho(a) com mais de 21 anos, é necessário que se apresente laudo/atestado médico caso seja declarado inválido. Caso não, remover como dependente previdenciário;"
  },
  {
    name: "Identidade incompleta",
    text: "Obs: Enviar identidade frente e verso;"
  },
  {
    name: "CNH Incompleta",
    text: "Obs: Enviar CNH completa (partes superior e inferior);"
  },
  {
    name: "Comprovante sem data",
    text: "Obs: Comprovante enviado não apresenta data de emissão. Favor, enviar comprovante com data e que esteja dentro do prazo acima;"
  },
  {
    name: "Identidade ilegível",
    text: "Obs: Documento de indentidade enviado está ilegível. Favor, enviar outra foto em melhor qualidade;"
  }
]

export default AditionalTexts
