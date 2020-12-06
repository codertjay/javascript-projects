import React, {Component} from "react";


class Navbar extends Component{
    state = {}
    render(){
        return(<div>
            <nav className="nav nav-pills flex-column flex-sm-row">
                <a className="flex-sm-fill text-sm-center nav-link " href="#!">Active</a>
                <a className="flex-sm-fill text-sm-center nav-link" href="#!">Link</a>
                <a className="flex-sm-fill text-sm-center nav-link" href="#!">Link</a>
            </nav>
        </div>)
    }
}


export default Navbar