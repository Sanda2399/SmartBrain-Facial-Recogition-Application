import React from 'react';
import Logo from '../Logo/logo';
import './signin.css'

const SignIn = (props) => {
    return (
        <div className="SF_container">
            <article className="br3 ba b--black-10 mv4 w-150 w-50-m w-25-l mw6 shadow-3 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0"><Logo /></legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f3" for="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f3" for="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib" 
                            onClick={() => {props.routeChangeAndTrue('home')}}
                            type="submit" 
                            value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <span onClick={() => {props.routeChangeAndFalse('register')}} className="f4 link dim black db">Register</span>
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
}

export default SignIn;