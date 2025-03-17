class Api {
    constructor(baseUrl, options){
        this.baseUrl = baseUrl;
        this.options = options;
    }

// Criar usuario com campos estabelecidos
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

//atualiza usuário com base em Id gerado pelo banco de dados
updateUser(id, data) {
    return fetch(`${this.baseUrl}/users/${id}`, {
        method: 'PUT',
        ...this.options,
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            isStudent: data.isStudent,
            isAdmin: data.isAdmin,
            isCLevel: data.isCLevel,
        })
    });
}

//Deletar usuario com base em Id gerado pelo banco de dados
deleteUser (id) {
    return fetch(`${this.baseUrl}/users/${id}`, {
        method: 'DELETE',
        ...this.options
    })  
}

}

const api = new Api(`https://apitest`, {
    headers: {
        "Content-Type": "application/json",
    }
})

export default api;

