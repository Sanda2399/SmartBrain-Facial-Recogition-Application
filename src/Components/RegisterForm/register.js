import React from "react";
import './register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            Password: "",
            Name: ""
        }
    }

    ///// Functions /////
    onEmailChange = (event) => {
        this.setState({Email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({Password: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({Name: event.target.value})
    }

    onSubmitRegister = (event) => {
        console.log(this.state);
        event.preventDefault();
        fetch('https://agile-journey-45011.herokuapp.com/register', 
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password,
                name: this.state.Name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id)
                {
                    this.props.loadUser(user);
                    this.props.routeChangeAndTrue('home');
                }
            })
    }

    ///// Main Render Function /////
    render(props) {
        return (
            <div className="RF_container">
                <article className="br3 ba b--black-10 mv4 w-150 w-50-m w-25-l mw6 shadow-3 center">
                    <main className="pa4 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
                                    <input 
                                    className=" f2 lh-copy pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="name" 
                                    name="name"  
                                    id="name"
                                    onChange={this.onNameChange}/>
                                </div>
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
                                onClick={this.onSubmitRegister}
                                type="submit" 
                                value="Register"/>
                            </div>
                            <div className="lh-copy mt3">
                                <span onClick={() => {this.props.routeChangeAndFalse('signin')}} className="f4 link dim black db">Back to Sign In</span>
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        );
    }
}
export default Register;