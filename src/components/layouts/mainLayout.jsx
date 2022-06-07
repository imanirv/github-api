import Navbar from "./elements/navbar"

const MainLayout = ({children}) => {
    return(
        <div className="w-screen h-full min-h-screen bg-dark-1">
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout