import React from 'react';

import {observer} from 'mobx-react';

import UserStore from './stores/UserStore';

import LoginForm from './LoginForm';
//import InputField from './InputField';
import SubmitButton from './SubmitButton';
//import MenuButton from './MenuButton';

import './App.css';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import SettingsPage from './pages/SettingsPage';



var dev = true;

class App extends React.Component {


  async componentDidMount(){
    try{
      if(dev){
UserStore.loading = false;
UserStore.isLoggedIn = true;
UserStore.username = "Test";
      }else{
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
        }else{
          UserStore.loading = false;
          UserStore.isLoggedIn = false;
          UserStore.username = '';
        }
      }
      


    }catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
      UserStore.username = '';
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

        if(UserStore.page === "settings"){
          return (
            <div className="app">
              <div className="header">
                SmartHome
              </div>
              <div className="container">
                <SettingsPage />
              </div>
              <Footer />
            </div>
          )
        }
        if(UserStore.page === "home"){
          return (
            <div className="app">
              
              <div className="container">
              <div className="header">
                Home
              </div>
                <HomePage />
              </div>
              <Footer />
            </div>
          )
        }else{
          return (
            <div className="app">
              <div className="container">
                Welcome {UserStore.username}!
                <SubmitButton
                  text={'Log out'}
                  disabled={false}
                  onClick={ () => this.doLogout()}
                />
             </div>
            </div>
          )
        }

        
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
