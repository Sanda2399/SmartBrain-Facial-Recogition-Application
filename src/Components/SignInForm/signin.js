import React from 'react';
import Logo from '../Logo/logo';
import './signin.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }

    ///// Functions /////
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = (event) => {
        console.log(this.state);
        event.preventDefault();
        fetch('https://agile-journey-45011.herokuapp.com/signin', 
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.id)
                {
                    this.props.loadUser(data);
                    this.props.routeChangeAndTrue('home');
                }
            })
    }

    ///// Main Render Function /////
    render(props) {
        return (
            <div className="SF_container">
                <article className="br3 ba b--black-10 mv4 w-150 w-50-m w-25-l mw6 shadow-3 center">
                    <main className="pa4 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0"><Logo /></legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                                    <input 
                                    className="f2 lh-copy pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={this.onEmailChange}/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                                    <input 
                                    className="f2 lh-copy b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange}/>
                                </div>
                            </fieldset>
                            <div className="">
                                <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
                                onClick={this.onSubmitSignIn}
                                type="submit" 
                                value="Sign in"/>
                            </div>
                            <div className="lh-copy mt3">
                                <span onClick={() => {this.props.routeChangeAndFalse('register')}} className="f4 link dim black db">Register</span>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}

export default SignIn;