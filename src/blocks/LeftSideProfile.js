import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ProfileLinks } from '../components/ProfileNavigation';
import { LoginForm } from './LoginForm';

const UserProfileInfo = props => (
    <div {...props}>
        <img src='src' alt='avatar'></img>
        <div>
            <NavLink to='/profile'>Name</NavLink>
            <br></br>
            <span>id: 12312414</span>
        </div>
    </div>
)

const Auth = () => (
    <div className='row justify-content-center'>
        <Link to='/login' className='col-7 btn btn-primary mt-4'>Sign in</Link>
        <Link to='/registrate' className='col-7 btn btn-primary mt-4'>Sign up</Link>
    </div>
)

export class LeftSideProfile extends React.Component {
    constructor(props) {
        super(props);
        this.signinclicked = this.signinclicked.bind(this);
        this.state = {isLoggedIn: false,
                      props: props};
    }
    signinclicked() {
        this.setState({isLoggedIn: true});
    }
  
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div {...this.state.props}>
                {isLoggedIn ?
                    <div>
                        <UserProfileInfo />
                        <ProfileLinks />
                    </div>
                :
                    <Auth />   
                }
            </div>
        );
    }
}