import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = ({width, height, rows = 1}) => {
    return (
            <Skeleton width={width} height={height} rows={rows} baseColor="#282828" highlightColor="#292929"/>
    )
}

export default Loading