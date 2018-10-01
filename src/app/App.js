import React, {Component} from "react";

import RGrid from "./components/RGrid";

export default class App extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {

        return (
            <div> 
                <RGrid/>
            </div>
        )
    }
} 