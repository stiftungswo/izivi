import Inferno from 'inferno';
import { Link } from 'inferno-router';
import Component from 'inferno-component';
import { connect } from 'inferno-mobx'
import InputField from '../tags/InputField';

export default class InputCheckbox extends InputField {

    render() {
        let isChecked = this.props.value == 1 ? true : false;

        return this.getFormGroup(
            <input
                type="checkbox"
                id={ this.props.id }
                name={ this.props.id }
                defaultChecked= {isChecked}
                className="form-control"
                onChange={(e)=>this.props.self.handleChange(e)}
                disabled={this.props.disabled} />
        , null, 1)
    }
}