class Api {
    constructor(baseUrl, options){
        this.baseUrl = baseUrl;
        this.options = options;
    }

setNewUser (data) {
    return fetch(`${this.baseUrl}/users}`,{
        method: 'POST',
        ...this.options,
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            isStudent: data.isStudent,
            isAdmin: data.isAdmin,
            isCLevel: data.isCLevel,
        })
    })
}

}