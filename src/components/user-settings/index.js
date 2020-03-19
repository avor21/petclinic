import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserDetails, signOutUser } from '../../redux/ac';
import './user-settings.scss';
import EditProfileForm from '../forms/edit-profile-form';
import {
  authUserDetailsSelector,
  userIsLoadingSelector
} from '../../redux/selectors';
import Loader from '../common/loader';

class UserSettings extends Component {
  render() {
    const { signOutUser, userDetails, isLoading } = this.props;
    if (isLoading || !userDetails) return <Loader />;

    return (
      <div className="container">
        <h1>Настройки профиля</h1>
        <EditProfileForm
          handleSubmit={this.saveUserInfo}
          details={userDetails}
        />

        <button className="btn sign-out" onClick={signOutUser}>
          Выйти из профиля
        </button>
      </div>
    );
  }

  saveUserInfo = values => this.props.addUserDetails(values);
}

export default connect(
  state => ({
    userDetails: authUserDetailsSelector(state),
    isLoading: userIsLoadingSelector(state)
  }),
  {
    signOutUser,
    addUserDetails
  }
)(UserSettings);
