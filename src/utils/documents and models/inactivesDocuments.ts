export type InactiveStandard = {
  pis: string
  tituloEleitor: string
  escolaridade: string
  posse: string
  portariaConcessao: string
}

const inactivesStandard: InactiveStandard = {
  pis: "PIS/PASEP ou NIT",
  tituloEleitor: "Título de Eleitor",
  posse: "Portaria de Posse do cargo efetivo",
  escolaridade: "Documento que comprove escolaridade declarada",
  portariaConcessao: "Portaria de Concessão do Benefício",
}

export { inactivesStandard }
