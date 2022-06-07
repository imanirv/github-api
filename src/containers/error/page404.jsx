import {useRouter} from "next/router"

const Container404 = () => {
    const {push} = useRouter()
    return(
        <div className="w-screen h-screen bg-dark-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold uppercase text-white text-center font-inter">Heyyyy, No user found here</h1>
            <p className="text-2xl font-inter text-white mt-3">Make sure you type it correctly</p>
            <button onClick={() => push('/')} className="bg-green-600 hover:bg-green-700 px-5 py-2 text-white font-semibold font-inter uppercase mt-7">go back</button>
        </div>
    )
}

export default Container404