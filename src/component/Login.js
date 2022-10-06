import { Button } from "@material-ui/core"
import React from "react"
import { auth, provider } from "../firebase"
import { useStateValue } from "../StateProvider"
import { actionTypes } from "../reducer"
import "./Login.css"
const Login = () => {
  const [state, dispatch] = useStateValue()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        console.log(result)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className="Login">
      <div className="login__Conatiner">
        <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.fit_scale.size_760x427.v1569479844.jpg" />
        <h1>Sign in Google Auth</h1>
        <p>Gokula krishnan</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  )
}

export default Login
