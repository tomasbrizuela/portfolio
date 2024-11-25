/* eslint-disable react/prop-types */
import CardContainer from '../Cards/CardContainer'
import Skeleton from '@mui/material/Skeleton';

import './ProjectStyle.css'
const Project = ({ apps, loading }) => {
    return (
        <div className='projectList'>



            {loading == false ?
                apps.map((app) =>
                    <CardContainer info={app} key={app.id} />

                ) : <div className='divSkeleton'>
                    <Skeleton style={{ width: "250px", height: "700px", margin: "0px", borderRadius: "8px" }} />
                    <Skeleton style={{ width: "250px", height: "700px", margin: "0px", borderRadius: "8px" }} />
                    <Skeleton style={{ width: "250px", height: "700px", margin: "0px", borderRadius: "8px" }} />
                    <Skeleton style={{ width: "250px", height: "700px", margin: "0px", borderRadius: "8px" }} />
                </div>
            }
        </div>
    )
}

export default Project