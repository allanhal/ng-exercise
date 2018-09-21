export interface User {
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  picture: {
    large: string
  },
  login: {
    uuid: string
  }
}
