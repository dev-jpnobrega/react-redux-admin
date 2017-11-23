import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';
import Auth from '../components/auth';
import { validateToken } from '../components/auth/auth-action';

class AuthOrApp extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.token);
        }
    }

    render() {
        const { user, validToken } = this.props.auth;
        
        if (user && validToken) {
           // axios.defaults.headers.common['authorization'] = user.token
            return <App user={user}>{this.props.children}</App>;
        } 
        else {
            return <Auth />;
        } 
    }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);