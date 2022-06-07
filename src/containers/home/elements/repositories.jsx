import moment from "moment"

const Repositories = ({data}) => {
    return (
        <div className="border-t border-disabled bg-dark-2">
            <div className="px-4 py-5 lg:px-36">
                <h2 className="text-white text-3xl font-bold font-inter ml-3">Repositories</h2>
                <div className="w-full h-full flex justify-start items-start flex-wrap mt-5">
                    {data.map((repo, i) => (
                        <div key={i} className="w-full lg:w-1/4  p-3">
                            <div className="border border-disabled p-5 h-40 relative hover:border-4 hover:rounded-md transition-all ">
                                <h5 className="text-white text-xl font-inter">{repo.name}</h5>
                                <p className="text-white font-extralight font-inter">{repo.full_name}</p>
                                <span className="absolute bottom-2 right-2 text-disabled text-xs font-inter font-light italic">Last updated: {moment(repo.updated_at).fromNow()}</span>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Repositories