import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';//importamos firebase
import  'firebase/auth';
import firebaseConfig from './firebase';
import Button from '@material-ui/core/Button'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{

    render(){

        const {user ,signOut, signInWithGoogle,signInWithEmailAndPassword,email, password } = this.props;

        return(

            <div>
            {
                    user ?
                        <p>Hello, {user.displayName}</p>
                        :
                        <p>Please, Sign In</p>
               }
                {
                    user ?
                        <Button variant = "contained" color="primary" onClick= {signOut}>singOut</Button>
                        :
                        <Button variant = "contained" color="primary" onClick= {signInWithGoogle}>Sign In with google</Button> 
                                
                }
            </div>

        );

    }

}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };
export default withFirebaseAuth({
providers,
firebaseAppAuth
})(Login);