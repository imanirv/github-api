import { useAuthDispatcher } from "../redux/reducers/auth"
import { NoAuthProvider } from "../providers/auth"
const LandingPage = () => {
    const {doLogin} = useAuthDispatcher()
  return(
      <NoAuthProvider>
        <button onClick={() => doLogin()}>Sign in with github</button>
      </NoAuthProvider>
  )
}

export default LandingPage

