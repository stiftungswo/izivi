import Inferno from 'inferno';
import { Link } from 'inferno-router';
import Component from 'inferno-component';
import axios from 'axios';
import ApiService from '../../utils/api';

import Card from '../tags/card';
import LoadingView from '../tags/loading-view';
import Header from '../tags/header';

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      loading: false,
      error: null,
      done: false,
    };
  }

  send() {
    this.setState({ loading: true, error: null });
    axios
      .post(ApiService.BASE_URL + 'auth/forgotPassword', {
        email: this.state.email,
      })
      .then(response => {
        var errorBox = [];
        errorBox.push(
          <div class="alert alert-info">
            <strong>E-Mail gesendet</strong>
            <br />Sie haben eine E-Mail mit einem Link zum Passwort-Reset erhalten.
          </div>
        );
        this.setState({ done: true, errorBox: errorBox, loading: false });
      })
      .catch(error => {
        var errorBox = [];
        var errorText = '';
        if (error.response != null && error.response.data != null) {
          for (let item in error.response.data) {
            errorText += error.response.data[item] + ' ';
          }
        }
        errorBox.push(
          <div class="alert alert-danger">
            <strong>Fehler</strong>
            <br />
            {errorText}
          </div>
        );
        this.setState({ errorBox: errorBox, loading: false });
      });
  }

  handleChange(e) {
    switch (e.target.name) {
      case 'email':
        this.setState({ email: e.target.value });
        break;
      default:
        console.log('Element not found for setting.');
    }
  }

  render() {
    return (
      <Header>
        <div className="page page__login">
          <Card>
            <h2 class="form-signin-heading">Passwort vergessen</h2>
            {this.state.errorBox}

            {!this.state.done && (
              <form class="form-signin" action="javascript:;" onsubmit={() => this.send()}>
                <p>
                  <label for="inputEmail" class="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    required
                    autofocus
                  />
                </p>
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Weiter
                </button>
              </form>
            )}
          </Card>

          <LoadingView loading={this.state.loading} error={this.state.error} />
        </div>
      </Header>
    );
  }
}