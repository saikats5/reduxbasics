import React from 'react';
import Header from './header';
import Footer from './footer';

class App extends React.Component{
    constructor(){
        super();
        //this.name = "Saikat";
        this.state = {
            name: "Saikat",
            title: "Saha"
        }
    }
    changeTitleApp(title){
        this.setState({title: title});
    }

    render(){
        //this.state === null;
        let list = [<Header />, <Header />];
        return (
            <div>
                <Header name={this.state.name} title={this.state.title} changeTitle={this.changeTitleApp.bind(this)}/>
                <Footer />
{/*                 {list}
                {this.state.name}
                Testing */}
            </div>
        )
    }
}

export default App;