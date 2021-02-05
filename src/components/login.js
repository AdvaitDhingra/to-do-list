import Button from '@material-ui/core/Button'

import GoogleIcon from './icons8-google.svg'

import fire, { provider } from './firebase'

const Login = () => {
    function signIn(){
        fire.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return(
        <div>
            <Button onClick = {signIn} style = {{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }} variant = "contained">Sign In with Google <img  src = {GoogleIcon} alt = "google"/></Button>
        </div>
    )
}
export default Login