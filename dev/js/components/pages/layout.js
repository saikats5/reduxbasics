import React from 'react';
import { Link } from 'react-router';
import Nav from './nav';

export default class Layout extends React.Component {
    navigate(){
        //this.props.history.pushState(null, "/");
        //this.props.history.replaceState(null, "/");
    }
    render(){
        const { location } = this.props;
        const containerStyle ={
            marginTop: "60px"
        }
        //console.log(history.isActive("Page2"));
        return (
            <div>
                <Nav location={location} />
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Header</h1>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
/*             <div>
                <div>Layout</div>
                <Link to="Page2" className="btn btn-success">Page2</Link>
                <Link to="Page3" className="btn btn-primary">Page3</Link>
                <button onClick={this.navigate.bind(this)}>Button</button>
            </div> */
        )
    }
}