import { extendObservable } from 'mobx';

/**
 * UserStore
 */

 class UserStore{
     constructor(){
        extendObservable(this, {
             loading: true,
             isLoggedIn: false,
             username: '',
             credits: 0.0

         })
     }
 }

 export default new UserStore();