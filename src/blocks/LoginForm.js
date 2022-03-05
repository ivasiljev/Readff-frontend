import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/blocks/LoginForm.module.css';

const SignInLabel = () => (
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
)

const Email = () => (
    <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label className={styles.email} htmlFor='floatingInput'>Email address</label>
    </div>
)

const Password = () => (
    <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label className={styles.password} htmlFor="floatingPassword">Password</label>
    </div>
)

const RememberMe = () => (
    <div className="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"/> Remember me
        </label>
    </div>
)

const SignInButton = () => (
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
)

const RedirectToRegistration = () => (
    <Link to="/registration">Create new account</Link>
)

export function LoginForm(props) {
    return (
        <div className={`${styles.formSignIn}`}>
            <form>
                <SignInLabel />
                <Email />
                <Password />
                <RememberMe />
                <SignInButton />
                <RedirectToRegistration />
            </form>
        </div>
    );
}