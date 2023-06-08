// MONGODB //  denormalization когда мы дублируем данные

// collection
type User = {
    id: number //auto increment. db task
    firstName: string
    lastName: string
    passportNumber: string
    profile: {
        hobby: string
        education: string
    } // 1..1 Один к одному
    sharedWalletsIds: { title, id, currency }[] // *..* это когда нам кто-то расшарил доступ к своему кошельку
}

// collection
type WalletMongo = {
    id: string // Prime key 🔑 uuid. app level
    title: string
    currency: 'USD' | 'BTC' | 'RUB'
    ownerId: number
    sharedWithUsersId: number[] //*..*
    sharedWithUsers: { fullName, userId }[] //*..*
}