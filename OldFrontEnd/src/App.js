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
import TemperaturePage from './pages/TemperaturePage';
import ShortCutsPage from './pages/ShortCutsPage';

class App extends React.Component {


  async componentDidMount(){ // Setup
    try{
      let res = await fetch('/isLoggedIn', { // is the User Loggedin???
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();
      console.log(result);
      if(result && result.success){ // YES c:
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }else{ // Nope :c
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
    }catch(e){ // Erron on Login Check?!
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
      UserStore.username = '';
    }
  }
  async doLogout(){ // Logout Function
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


  render(){ // Start the Rendering!

    if(UserStore.loading){ // Loading
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
              
              <div className="container">
              <div className="header">
                SmartHome
              </div>
                <SettingsPage />
              </div>
              <Footer />
            </div>
          )
        }else if(UserStore.page === "temperature"){
          return (
            <div className="app">
              
              <div className="container">
              <div className="header">
                SmartHome
              </div>
                <TemperaturePage />
              </div>
              <Footer />
            </div>
          )
        }else 
        if(UserStore.page === "shortcuts"){
          return (
            <div className="app">
              <div className="container">
              <div className="header">
              Shortcuts
              </div>
                <ShortCutsPage />
              </div>
              <Footer />
            </div>
          )
        }else
        if(UserStore.page === "home"){
          return (
            <div className="app">
              <div className="container">
              <div className="header">
                SmartHome
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
