export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
}

export interface SignUpUser {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface SignInUser {
    email: string
    password: string
}