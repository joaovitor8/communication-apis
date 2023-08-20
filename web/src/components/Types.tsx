export interface RandomUserApi {
  name: string
  email: string
  username: string
  age: number
  picture: string
}

export interface DataUser {
  name: {
    first: string
    last: string
  }
  email: string
  login: {
    username: string
  }
  dob: {
    age: number
  }
  picture: {
    large: string
  }
}

export interface Pesquisar {
  pesquisar: (valor: string) => void
}

export interface UsersDB {
  _id: number
  nome: string
  email: string
  tel: number
  cpf: number
  end: string
}

export interface MostrarEsconder {
  MostrarEsconder: () => void
}