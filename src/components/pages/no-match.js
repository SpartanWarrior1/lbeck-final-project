import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return (
        <div className="nomatch-wrapper">
            <div className="nomatch-header">
                <div>We couldn't find that page</div>
            </div>
            <div className="nomatch-link">
                <Link to="/">Return to homepage</Link>
            </div>
        </div>
    );
}