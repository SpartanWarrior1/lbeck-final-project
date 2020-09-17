import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import BlogDetail from "./pages/blog-detail";
import About from './pages/about';
import Contact from './pages/contact';
import Auth from './pages/auth';
import NoMatch from './pages/no-match';
import Icons from './helpers/icons';

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
		this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
		this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
		this.setState({
			loggedInStatus: "LOGGED_IN"
		})
	}

	handleUnsuccessfulLogin() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN"
		})
	}

	handleSuccessfulLogout() {
		this.setState({
			loggedInStatus: "NOT_LOGGED_IN"
		})
  }

  checkLoginStatus() {
		return axios
			.get("https://api.devcamp.space/logged_in", {
				withCredentials: true
			})
			.then(response => {
				const loggedIn = response.data.logged_in;
				const loggedInStatus = this.state.loggedInStatus;
				if (loggedIn && loggedInStatus === "LOGGED_IN") {
					return loggedIn;
				} else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
					this.setState({
						loggedInStatus: "LOGGED_IN"
					});
				} else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
					this.setState({
						loggedInStatus: "NOT_LOGGED_IN"
					});
				}
			})
			.catch(error => {
				console.log("Error", error);
			});
	}

	componentDidMount() {
		this.checkLoginStatus();
  }
  
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
							handleSuccessfulLogout={this.handleSuccessfulLogout}
            />

            <Switch>
              <Route 
                exact path="/"
                render={props => (
                  <Home
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route 
                path="/b/:slug" 
                render={props => (
                  <BlogDetail
                    {...props}
                    loggedInStatus={this.state.loggedInStatus}
                  />
                )}
              />
              <Route 
                path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
