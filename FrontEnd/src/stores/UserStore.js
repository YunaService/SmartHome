import { extendObservable } from 'mobx';

/**
 * UserStore
 */

 class UserStore{
     constructor(){
        extendObservable(this, {
             loading: true,
             server: 'http://10.33.156.50:3000',
             isLoggedIn: false,
             username: '',
             page: 'home'

         })
     }
 }

 export default new UserStore();