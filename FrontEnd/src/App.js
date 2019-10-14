import React from 'react';

import {observer} from 'mobx-react';

import UserStore from './stores/UserStore';

import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

import './App.css';

class App extends React.Component {

  async componentDidMount(){
    try{

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let result = await res.json();

      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
        UserStore.credits = result.credits;
      }else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
        UserStore.username = '';
        UserStore.credits = 0.0;
      }


    }catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
      UserStore.username = '';
      UserStore.credits = 0.0;
    }
  }
  async doLogout(){
    try{

      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let result = await res.json();

      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
        UserStore.credits = 0.0;
      }

    }catch(e){
      console.log(e)
    }
  }

  async getCredits(){
    try{

      let res = await fetch('/getCredits', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      let result = await res.json();

      if(result && result.success){
        UserStore.credits = result.credits;
      }

    }catch(e){
      console.log(e)
    }
  }

  render(){

    if(UserStore.loading){
      return (
        <div className="app">
          <div className="container">
            Loading, please wait...
          </div>
        </div>
      )
    }else{
      if(UserStore.isLoggedIn){
        return (
          <div className="app">
            <div className="container">
              Welcome {UserStore.username}!
              <SubmitButton
                text={UserStore.credits + " credits!"}
                disabled={false}
                onClick={ () => this.getCredits()}
              />
              <SubmitButton
                text={'Log out'}
                disabled={false}
                onClick={ () => this.doLogout()}
              />
           </div>
          </div>
        )
      }else{
        return (
          <div className="app">
            <div className="container">
              <LoginForm />
           </div>
          </div>
          )

      }
    }
  }
}

export default observer(App);
