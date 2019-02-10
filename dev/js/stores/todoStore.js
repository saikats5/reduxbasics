import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor(){
        super()
        this.todos = [
            { id: 123, text: 'Saikat', complete: true },
            { id: 456, text: 'Saha Test', complete: false }
        ]
    }

    getAll(){
        return this.todos;
    }

    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        })
        this.emit("change");
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;