import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';

import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signup } from './auth-action';

import { toastr } from 'react-redux-toastr';

import Msg from '../common/messages/messages';
import ThemeDefault from '../../theme-default';
import styles from './auth-css';

class Auth extends Component {

  onSubmit() {
    const { login } = this.props;

    //console.log('onSubmit', login);
    login({_id: 'KJ'});  
  }

  onRegister() {
    toastr.error('Atenção', 'Registro de usuário está indisponivel')
  }


  render() {
     
      return  (
        <MuiThemeProvider muiTheme={ThemeDefault}>
          <div>
            <div style={styles.loginContainer}>    
              <Paper style={styles.paper}>    
                <form onSubmit={() => this.onSubmit()}>
                  <TextField
                    hintText="E-mail"
                    floatingLabelText="E-mail"
                    fullWidth={true}
                  />
                  <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    fullWidth={true}
                    type="password"
                  />
    
                  <div>
                    <Checkbox
                      label="Remember me"
                      style={styles.checkRemember.style}
                      labelStyle={styles.checkRemember.labelStyle}
                      iconStyle={styles.checkRemember.iconStyle}
                    />
    
                    <Link to="/"> </Link>
                      <RaisedButton label="Login"
                                    primary={true}
                                    style={styles.loginBtn} 
                                    type="button"
                                    onClick={() => this.onSubmit()}/>               
                  </div>
                </form>
              </Paper>
    
              <div style={styles.buttonsDiv}>
                <FlatButton
                  label="Register"
                  onClick={() => this.onRegister()}
                  style={styles.flatButton}
                  icon={<PersonAdd />}
                />
    
                <FlatButton
                  label="Forgot Password?"
                  href="/"
                  style={styles.flatButton}
                  icon={<Help />}
                />
              </div>
    
              <div style={styles.buttonsDiv}>
                <Link to="/" style={{...styles.btn, ...styles.btnFacebook}}>
                  <i className="fa fa-facebook fa-lg"/>
                  <span style={styles.btnSpan}>Log in with Facebook</span>
                </Link>
                <Link to="/" style={{...styles.btn, ...styles.btnGoogle}}>
                  <i className="fa fa-google-plus fa-lg"/>
                  <span style={styles.btnSpan}>Log in with Google</span>
                </Link>
              </div>
            </div>
            <Msg/>
          </div>
        </MuiThemeProvider>
      );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({login, signup}, dispatch);

export default connect(null, mapDispatchToProps)(Auth);
