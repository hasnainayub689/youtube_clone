import React from 'react';
import './SignatureFooter.css';
import { Link } from 'react-router-dom';

function SignatureFooter() {
    return (
        <div class="announcement">
            <Link className="color" to={`https://muhammadhusnain.site`}>
                <p>
                    App built by &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Muhammad
                    Husnain
                </p>
            </Link>
        </div>
    );
}

export default SignatureFooter;
