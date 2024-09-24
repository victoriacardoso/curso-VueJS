const tasksList = {
    data() {
        return {
            tasks: [],
            newTask: {
                done: false
            },
        }
    },
    methods: {
        addTask: function () {
            if (this.newTask.description) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    done: false
                };
                localStorage.setItem("tarefas", JSON.stringify(this.tasks));
            }
            else {
                alert("Tarefa é obrigatório.")
            }
        },
        storeTasks() {
            localStorage.setItem("tarefas", JSON.stringify(this.tasks));
        }
    },
    created() {
        this.tasks = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tasks;
    },
}

Vue.createApp(tasksList).mount("#app");

