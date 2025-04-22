const db = new Map();

class Task {
    constructor({text,isResovle = false}){
        this.text = text,
        this.isResolve = isResovle,
        this.createdAt = new Date(),
        this.id = db.size + 1
    }

    addTask() {
        db.set(this.id,this)
    }

    static findOne(taskId) {
        return db.get(taskId)
    }

    static findAll() {
        return [...db.values()]
    }

    static deleteTask(taskId) {
        return db.delete(taskId)
    }

    updateTask(updatedFields) {
        db.set(this.id,{...this,...updatedFields});
        return db.get(this.id)
    }
}

module.exports = Task