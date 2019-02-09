import React from 'react';
import Title from './title';

class Header extends React.Component{
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }
    render(){
        return (
            <div>
                <header >HEADER</header>
                <Title name={this.props.name} title={this.props.title} />
                <div><input onChange={this.handleChange.bind(this)} /></div>
            </div>
        )
    }
}

export default Header;