import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        axios
        .post("https://api.devcamp.space/sessions",
        {
            client: {
                email: this.state.email,
                password: this.state.password
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Wrong email or password"
                })
                this.props.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            this.setState({
                errorText: "An error occured"
            })
            this.props.handleUnsuccessfulAuth();
        })
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-header">Login to access your dashboard</div>
                <div className="error-text">{this.state.errorText}</div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className='login-form-group'>
                        <FontAwesomeIcon icon="envelope" />
                        <input
                            className="login-input" 
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='login-form-group'>
                        <FontAwesomeIcon icon="lock" />
                        <input
                            className="login-input"
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        );
    }
}