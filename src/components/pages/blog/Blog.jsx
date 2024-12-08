/* eslint-disable react/prop-types */
import './BlogStyle.css';
import BlogItemsContainer from "../../common/BlogItems/BlogItemsContainer"
import { Skeleton } from '@mui/material';

const Blog = ({ info, isLoading }) => {
    return (
        <div>
            <div className="listEntries">
                <h1>My writings & thoughts</h1>
                {isLoading && <div className='blogItem'><Skeleton style={{ width: "235px" }} /></div>}
                {isLoading && <div className='blogItem'><Skeleton style={{ width: "198px" }} /></div>}
                {isLoading && <div className='blogItem'><Skeleton style={{ width: "159px" }} /></div>}
                {isLoading && <div className='blogItem'><Skeleton style={{ width: "240px" }} /></div>}
                {
                    info.map((post) => {
                        return isLoading ? <Skeleton /> : <BlogItemsContainer key={post.id} post={post} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog