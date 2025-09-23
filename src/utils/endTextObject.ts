// Type for valid and types for missing docs
type IDValid = "id/v"
type IDInvalid = "id/10" | "id/n"

// Residence
type ResidenceValid = "cr/v" | "dr/s"
type ResidenceInvalid = "cr/60" | "dr/n" | "cr/n"

// Civil State
type CivilStatusInvalid = "cns/n" | "cerc/n" | "cav/n" | "un/n" | "dsvu/n"
type CivilStatusValid = "cns/s" | "cerc/s" | "cav/s" | "un/s" | "dsvu/s" | "cns/nr"

// invalidez
type InvalidezStatus = "pinv/n" | "pinv/s" | "pinv/cl" | "pinv/cla" | "pinv/cld"

// Dependent
type DependentTypeInvalid = "deco/n" | "dp/n" | "tgc/n" | "dp/21" | "dep/id/n" | "dep/id/10" | "cnd/n"
type DependentTypeValid = "deco/s" | "dp/s" | "tgc/s" | "cnd/s" | "dep/n"

type PisPensionerInvalid = "pis/18/n"
type PisPensionerValid = "pis/18/s" | "pis/nr"

type TitleInvalid = "titel/n" | "titel/m"

type ReservistaValid = "res/s" | "res/n" | "res/nr"

interface ActivesDocuments {
  foto: boolean
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  pis: boolean
  cnis: boolean
  posse: boolean
  tituloEleitor: boolean
  reservista: ReservistaValid
  comprovanteEstado: boolean
  depId: DependentTypeInvalid | DependentTypeValid
}

export interface InactivesDocuments {
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  invalidez: InvalidezStatus
  pis: boolean
  posse: boolean
  tituloEleitor: boolean
  portariaConcessao: boolean
  depId: DependentTypeInvalid | DependentTypeValid
}

export interface PensionerDocuments {
  posseExServidor: boolean
  certObito: boolean
  tituloEleitor: TitleInvalid
  id: IDInvalid | IDValid
  idExServidor: "idsf/n" | "idsf/s"
  portariaConcessao: boolean
  residencia: ResidenceInvalid | ResidenceValid
  pis: PisPensionerInvalid | PisPensionerValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
}

export default ActivesDocuments
