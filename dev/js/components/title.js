import React from 'react';

export default class Title extends React.Component{
    render(){
        return (
            <div>
                <div>{this.props.name} {this.props.title}</div>
            </div>
        )
    }
}