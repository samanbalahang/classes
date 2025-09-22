// mapUserManagement.js
class UserManager {
    constructor() {
        this.users = new Map();
    }

    addUser(id, userData) {
        this.users.set(id, { ...userData, createdAt: new Date() });
    }

    getUser(id) {
        return this.users.get(id);
    }

    updateUser(id, updates) {
        if (this.users.has(id)) {
            const user = this.users.get(id);
            this.users.set(id, { ...user, ...updates });
        }
    }

    deleteUser(id) {
        this.users.delete(id);
    }

    getAllUsers() {
        return Array.from(this.users.entries());
    }
}

// استفاده
const manager = new UserManager();
manager.addUser(1, { name: 'Alice', email: 'alice@example.com' });
manager.addUser(2, { name: 'Bob', email: 'bob@example.com' });

console.log(manager.getUser(1));
