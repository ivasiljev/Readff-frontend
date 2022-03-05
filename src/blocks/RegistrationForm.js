import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/blocks/RegistrationForm.module.css';

const RegistrationTitle = () => (
    <h1 className="h3 mb-3 fw-normal">Create new account</h1>
)

const Login = () => (
    <div className="form-floating mb-2">
        <input type="text" className="form-control" id="floatingLogin" placeholder="Login" />
        <label className={styles.login} htmlFor='floatingLogin'>Login</label>
    </div>
)

const Email = () => (
    <div className="form-floating mb-2">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label className={styles.email} htmlFor='floatingInput'>Email address</label>
    </div>
)

const Password = () => (
    <div className="form-floating mb-2">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label className={styles.password} htmlFor="floatingPassword">Password</label>
    </div>
)

const PasswordConfirm = () => (
    <div className="form-floating mb-2">
        <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Confirm password" />
        <label className={styles.passwordConfirm} htmlFor="floatingPasswordConfirm">Confirm password</label>
    </div>
)

const RegistrateButton = () => (
    <button className="w-100 btn btn-lg btn-primary" type="submit">Create</button>
)

const RedirectToSignIn = () => (
    <Link to="/login">{`Sign in`}</Link>
)

export function RegistrationForm(props) {
    return (
        <div className={`${styles.formReg}`}>
            <form>
                <RegistrationTitle />
                <Login />
                <Password />
                <PasswordConfirm />
                <Email />
                <RegistrateButton />
                <RedirectToSignIn />
            </form>
        </div>
    );
}