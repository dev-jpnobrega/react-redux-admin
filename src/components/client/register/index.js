import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

import styles from '../client-css'
import { register } from '../client-action';
import PageBase from '../../common/page-base/page-base';


class ClientRegister extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            errors: {}
        };
    }

    render() {
        let { client } = this.props.clients
        return (
            <PageBase title="Registrar Cliente" navigation="Application/Cliente/Registrar">
                <form>
                    <TextField
                        hintText="Name"
                        floatingLabelText="Name"
                        fullWidth={true}
                        value={client.name}
                    />

                    <SelectField
                        floatingLabelText="City"
                        value=""
                        fullWidth={true}>
                        <MenuItem key={0} primaryText="London"/>
                        <MenuItem key={1} primaryText="Paris"/>
                        <MenuItem key={2} primaryText="Rome"/>
                    </SelectField>

                    <DatePicker
                        hintText="Expiration Date"
                        floatingLabelText="Expiration Date"
                        fullWidth={true}
                    />

                    <div style={styles.toggleDiv}>
                        <Toggle
                            label="Disabled"
                            labelStyle={styles.toggleLabel}
                        />
                    </div>

                    <Divider/>

                    <div style={styles.buttons}>
                        <Link to="/">
                            <RaisedButton label="Cancel"/>
                        </Link>

                        <RaisedButton   
                            label="Save"
                            style={styles.saveButton}
                            type="submit"
                            primary={true}
                        />
                    </div>
                </form>
            </PageBase>
        );
    }
} 

const mapStateToProps = state => ({ clients: state.clients });

const mapDispatchToProps = dispatch => 
    bindActionCreators({ register }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClientRegister);
