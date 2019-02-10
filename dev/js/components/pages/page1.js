import React from "react";
//import Article from "./Article";
import Todo from './todo';
import TodoStore from '../../stores/todoStore';
import TodoActions from '../../actions/todoAction';

export default class Todos extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: TodoStore.getAll()
        }
/*         this.state={
            todos: [
                { id: 123, text: 'Saikat', complete: true },
                { id: 456, text: 'Saha', complete: false }
            ]
        } */
    }

    componentWillMount(){
        TodoStore.on("change", ()=>{
            this.setState({
                todos: TodoStore.getAll()
            })
        })
    }

    createTodo(){
        
    }

    render(){
        const {todos} = this.state;
        const TodoComponents = todos.map((todo)=>{
            return <Todo key={todo.id} {...todo} />
        })
        return (
            <div>
                <button onClick={this.createTodo.bind(this)}>Create</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        )
    }
}

/* export default class Page1 extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div className="row">{Articles}</div>
      </div>
    );
  }
} */