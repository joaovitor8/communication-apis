export interface RandomUserApi {
  name: string
  email: string
  username: string
  age: number
  picture: string
}

export interface Pesquisar {
  filtrarUsers: (valor: string) => void
}

export interface UsersDB {
  _id: number
  nome: string
  email: string
  tel: number
  cpf: number
  end: string
}
