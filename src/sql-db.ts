// SQL

// table
type User = {
    id: number // Prime Key, auto increment. db task
    firstName: string
    lastName: string
    passportNumber: string
}

// table
type Wallet = {
    id: string // Prime key 🔑 uuid. app level
    title: string
    ownerId: number // foreign key 🔑
}

type Profile = {
    hobby: string
    education: string
    userId: number // foreign key 🔑
}