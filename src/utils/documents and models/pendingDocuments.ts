export type InvalidDocuments = {
  "cr/60": string
  "cr/n": string
  "cr/dsc": string
  "dr/n": string
  "id/n": string
  "cns/n": string
  "estc/nd": string
  "cerc/n": string
  "cav/n": string
  "un/n": string
  "inv/nc": string
  "dsvu/n": string
  "deco/n": string
  "tgc/n": string
  "dp/21": string
  "dep/id/n": string
  "dep/id/10": string
  "cnd/n": string
  "pinv/sl": string
  "pinv/cld": string
  "res/n": string
}

const invalidStandard: InvalidDocuments = {
  "cr/60": `Comprovante de residência emitido a partir de julho deste ano;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante dentro do prazo acima`,
  "cr/n":
    "Comprovante de Residência atualizado (emitido a partir de julho/2025) ou declaração conforme modelo que será disponibilizado no local do recadastramento",
  "cr/dsc":
    "Comprovante de residência emitido nos últimos 60 dias;\nObs: Envie qualquer conta que, mesmo que não esteja em seu nome, coincida com o endereço escrito na declaração de residência enviada",
  "dr/n": `Declaração de Residência (Anexo II no link abaixo)\nObs: Comprovante enviado está em nome de terceiros. Favor, assinar e enviar a declaração acima`,
  "id/n":
    "Documento de Identidade com número do CPF (RG ou CNH ou Conselho de Classe)",
  "cns/n": "Certidão de Nascimento",
  "estc/nd": `Certidão de acordo com o estado civil:
Casada, Divorciada ou Viúva - Certidão de Casamento (com averbação nos dois últimos casos);
União Estável - Declaração de União Estável ou Declaração de Convivência Marital (com firma reconhecida em cartório);
Solteira - Certidão de nascimento`,
  "cerc/n": "Certidão de Casamento",
  "inv/nc": "Enviar qualquer documento que comprove invalidez do dependente DEP",
  "cav/n": "Certidão de casamento averbada",
  "un/n": "Declaração de União Estável/Convivência Marital com firma reconhecida em cartório",
  "dsvu/n": "Declaração de união estável + Certidão de Casamento averbada",
  "deco/n": "Enviar declaração de dependência econômica (Anexo V no link abaixo) do dependente DEP",
  "tgc/n": "Enviar termo de guarda do dependente DEP",
  "pinv/cld": "Aposentadoria por Invalidez - enviar laudo médico atualizado (emitido a partir de julho/2025)",
  "pinv/sl": "Aposentado por Invalidez, enviar laudo médico atualizado (emitido a partir de julho/2025), o qual será retido no momento do censo",
  "dp/21":
    "Em caso de dependente filho(a) com mais de 18 anos, é necessário que se envie laudo/atestado médico caso declarado inválido. Caso não, remover como dependente previdenciário",
  "dep/id/n": "Enviar documento de identificação dos dependentes DEPS",
  "dep/id/10":
    "Documento de identidade do dependente DEP foi emitido em ANO, ultrapassando o limite de 10 anos desde a data de emissão.\nCaso não haja nenhum outro documento de identidade para substituir (CNH, Conselho de Classe ou Passaporte), por favor, entre em contato com nossa central de suporte informando seu caso",
  "cnd/n": "Enviar certidão de nascimento do dependente DEP",
  "res/n": "Apresentar o Certificado de Alistamento Militar ou Reservista, para servidores do sexo masculino, com idade entre 18 e 45 anos"
}

export type InactiveStandard = {
  pis: string
  posse: string
  escolaridade: string
}

export type ActivesStandardType = {
  cpf: string
  pis: string
  posse: string
  cnis: string
  tituloEleitor: string
  escolaridade: string
  reservista: string
  uniao: string
}

const activesStandard: ActivesStandardType = {
  cpf: "Apresentar qualquer documento contendo número do CPF",
  pis: "PIS/PASEP ou NIT em qualquer documento que contenha a informação",
  tituloEleitor: "Apresentar título de eleitor",
  cnis: "CNIS de período anterior a seu ingresso no município, caso pretenda solicitar averbação desse tempo para concessão de benefício no AraçoiabaPrev",
  posse: "Enviar documento de Portaria de Posse",
  reservista: "Apresentar o Certificado de Alistamento Militar ou Reservista, para servidores do sexo masculino, com idade entre 18 e 45 anos",
  escolaridade: "Enviar documento que comprove escolaridade declarada",
  uniao:
    "Certidão de União Estável",
}

export { invalidStandard, activesStandard }
