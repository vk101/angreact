import React, {Component} from "react";
import PropTypes from "prop-types";

export default class RGrid extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() { }
    
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th><th>Entity</th><th>Type</th><th>Manager</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td><td>GFHPO</td><td>G</td><td>M1</td>
                        </tr>
                        <tr>
                            <td>2</td><td>MMP34</td><td>A</td><td>M2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}