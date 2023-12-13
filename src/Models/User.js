class User {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

class UserManager {
    constructor() {
        this.users = [];
    }

    isUnique(user) {
        return !this.users.some(u => u.nome === user.nome || u.email === user.email);
    }

    addUser(user) {
        if (this.isUnique(user)) {
            this.users.push(user);
            return true;
        } else {
            return false;
        }
    }
}