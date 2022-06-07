import Image from "next/image"

const Profile = ({userData, followers, following}) => {
    return (
        <div className="px-4 lg:px-36 pt-14 pb-9 flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
            <div className="flex flex-col lg:flex-row items-center">
                {/* profile image  */}
                <div className="w-52 h-52 ">
                    {
                        userData.avatar_url && <Image src={userData.avatar_url}  width={200} height={200} layout="responsive" alt={userData.login}/>
                    }
                </div>
                <div className="mt-5 lg:ml-12 text-center lg:text-left">
                    <h1 className="text-white text-4xl font-semibold font-inter">{userData.name}</h1>
                    <h3 className="text-white text-xl font-light mt-2 font-inter">{userData.login}</h3>
                    <p className="text-white font-inter mt-5">{userData.bio}</p>
                </div>
            </div>
            <div className="lg:h-24 lg:w-[1px] h-[1px] w-24 bg-disabled my-10"></div>
            <div className="flex ">
                <div className="mx-6 text-center">
                    <h3 className="text-white text-xl font-light mt-2 font-inter">Following</h3>
                    <p className="text-white text-4xl font-inter font-extralight mt-3">{following}</p>
                </div>
                <div className="mx-6 text-center">
                    <h3 className="text-white text-xl font-light mt-2 font-inter">Followers</h3>
                    <p className="text-white text-4xl font-inter font-extralight mt-3">{followers}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile