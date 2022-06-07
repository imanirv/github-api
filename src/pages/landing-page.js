import Head from "next/head"
import LandingContainer from "../containers/landing"
import { NoAuthProvider } from "../providers/auth"
const LandingPage = () => {
    
  return(

      <>
        <Head>
          <title>github api - homepage</title>
        </Head>
        <NoAuthProvider>
          <LandingContainer />
          
        </NoAuthProvider>
      </>
  )
}

export default LandingPage

