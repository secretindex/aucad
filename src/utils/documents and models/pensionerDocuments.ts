export type InvalidPensioner = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "id/10": string
  "pis/18/n": string
  "dips/n": string
  "id/n": string
  "cerc/n": string
  "cav/n": string
  "un/n": string
  "titel/n": string
  "dsvu/n": string
  "idsf/n": string
}

const invalidPensioner: InvalidPensioner = {
  "cr/60": `Comprovante de residência emitido a partir de julho deste ano;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima`,
  "cr/n":
    "Comprovante de Residência atualizado (emitido a partir de julho/2025) ou declaração conforme modelo que será disponibilizado no local do recadastramento",
  "cr/dsc":
    "Comprovante de residência emitido nos últimos 60 dias;\nObs: Envie qualquer conta que, mesmo que não esteja em seu nome, coincida com o endereço escrito na declaração de residência enviada",
  "dr/n": `Declaração de Residência (Anexo II no link abaixo)\nObs: Comprovante enviado está em nome de terceiros. Favor, assinar e enviar a declaração acima`,
  "id/10": `Documento de identidade;\nObs: Documento de identidade enviado foi emitido em ANO, ultrapassando o limite de 10 anos desde a data de emissão. Caso não haja outro documento para substituir (CNH, Conselho de Classe ou Passaporte), entre em contato com nosso suporte informando seu caso`,
  "pis/18/n": "Enviar comprovante de cadastro no PIS/PASEP ou NIT",
  "dips/n": "Enviar declaração de Inacumulabilidade de Pensão (Anexo VIII no link abaixo)",
  "idsf/n": "Documento de Identidade e CPF do ex-servidor (a) falecido(a)",
  "id/n": "Documento de Identidade contendo número do CPF (RG ou CNH ou Conselho de Classe)",
  "cerc/n": "Certidão de Casamento",
  "titel/n": "Título de eleitor, para os maiores de 18 anos",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de união estável + Certidão de Nascimento",
  "dsvu/n": "Declaração de união estável + Certidão de Casamento averbada",
}

export type PensionerCheck = {
  posseExServidor: boolean
  certObito: boolean
  portariaConcessao: boolean
}

export type StandardPensioner = {
  posseExServidor: string
  certObito: string
  portariaConcessao: string
}

const standardPensioner: StandardPensioner = {
  posseExServidor: "Portaria de posse do ex-servidor (a) falecido(a)",
  certObito: "Certidão de Óbito do ex-servidor(a) falecido(a)",
  portariaConcessao: "Portaria de concessão de benefício de pensão",
}

export { invalidPensioner, standardPensioner }
