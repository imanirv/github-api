import { useAuthDispatcher } from "../../redux/reducers/auth"
import GithubIcon from "../../components/icons/github-icon"
const LandingContainer = () => {
    const {doLogin} = useAuthDispatcher()
    return (
        <div className="w-screen h-screen bg-dark-1 flex flex-col justify-center pl-3 lg:pl-14">
            <div className="lg:w-1/2">
                <h1 className="text-white font-extrabold text-5xl lg:text-8xl uppercase">See your <span className="text-green-600 hover:tracking-widest transition-all">repository</span>  differently </h1>
                <button className="py-2 px-8 bg-green-700 hover:bg-green-800 transition-all text-white mt-10 flex items-center" onClick={() => doLogin()}><GithubIcon /><span className="ml-3 font-bold uppercase">Sign in with github</span> </button>
            </div>
        </div>
    )
}

export default LandingContainer