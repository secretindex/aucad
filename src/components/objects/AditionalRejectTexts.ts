interface AditionalText {
  name: string
  text: string
}

type AdTextArray = Array<AditionalText>

const AditionalTexts: AdTextArray = [
  {
    name: "Número do Suporte",
    text: "Número do suporte: +55 (96) 3082-1277\nHorários: 08:00 às 17:00, segunda a sexta",
  },
]

export default AditionalTexts
