import React, {Component} from 'react';

class Footer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="footer-container">
                <p>
                    © Portfolio built by mauro.luyten@gmail.com
                </p>
            </div>
        )
    }
}
export default Footer;