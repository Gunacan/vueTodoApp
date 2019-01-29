const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello world!',
        newTodo: '',
        toDos: []
    },
    methods: {
        addTodo() {
            this.toDos.push({
                title: this.newTodo,
                done: false
            })
            this.newTodo= ''
        },
        removeTodo(toDo) {
            const todoIndex = this.toDos.indexOf(toDo)
            this.toDos.splice(todoIndex, 1)
        },
        allDone() {
            this.toDos.forEach(toDo => {
                toDo.done = true
            })
        },
        uncheckAll() {
            this.toDos.forEach(toDo => {
                toDo.done = false
            })
        }
    }
}) 