type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail ${user.email}. Your city is ${user.address.city}
    and your state is ${user.address.state}`;
}

showWelcomeMessage({
    name: 'fulano',
    email: 'fulano@fulano',
    address: {
        city: 'salvador',
        state: 'BA'
    }

})