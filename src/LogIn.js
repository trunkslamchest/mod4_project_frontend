import React from 'react';

class LogIn extends React.Component {

  state = {
    logIn: true,
    username: "",
    password: "",
    errors: []
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitFunctions = (event) => {
    this.logInSubmitted(event)
    this.props.update_cart()
  }

  logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(res_obj => {
      if (res_obj.errors) {
        this.setState({
          errors: res_obj.errors
        })
      } else {
        this.props.setToken(res_obj)
      }
    })
  }

  signUpSubmitted = (event) => {
    event.preventDefault()
  }

  render(){
    return <>
      <ul>
        { this.state.errors.map(error => <li>{ error }</li>) }
      </ul>
      {
        this.state.logIn
        ?
        <section>
          <h2>Log In</h2>
          {/* <button onClick={ () => this.setState({ logIn: false }) }>I need to register!!!</button> */}
          <form onSubmit={ this.onSubmitFunctions }>
            <label  htmlFor="log_in_username">Username</label>
            <input  id="log_in_username"
                    type="text"
                    onChange={ this.onChange /* for controlled form input status */ }
                    name="username"
                    value={ this.state.username /* for controlled form input status */ } />
            <label  htmlFor="log_in_password">Password</label>
            <input  id="log_in_password"
                    type="password"
                    onChange={ this.onChange }
                    name="password"
                    value={ this.state.password } />
            <input type="submit" />
          </form>
        </section>
        :
        <section>
          <h2>Sign up</h2>
          {/* <button onClick={ () => this.setState({ logIn: true }) }>I already signed up!!!</button> */}
          <form onSubmit={ this.signUpSubmitted }>
            <label  htmlFor="sign_up_username">Username</label>
            <input  id="sign_up_username"
                    type="text"
                    onChange={ this.onChange }
                    name="username"
                    value={ this.state.username } />
            <label  htmlFor="sign_up_password">Password</label>
            <input  id="sign_up_password"
                    type="password"
                    onChange={ this.onChange }
                    name="password"
                    value={ this.state.password } />
            <input type="submit" />
          </form>
        </section>
      }
    </>
  }

}

export default LogIn