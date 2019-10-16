import { extendObservable } from 'mobx';

/**
 * UserStore
 */

 class UserStore{
     constructor(){
        extendObservable(this, {
             loading: false, //true
             isLoggedIn: true, // false
             username: 'Test', // ''
             page: 'home' // home

         })
     }
 }

 export default new UserStore();