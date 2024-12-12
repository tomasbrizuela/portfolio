/* eslint-disable react/prop-types */
import './BlogStyle.css';
import BlogItemsContainer from "../../common/BlogItems/BlogItemsContainer"
import { Skeleton } from '@mui/material';

const Blog = ({ info, isLoading }) => {
    return (
        <div>
            <div className="listEntries">
                <h1>My writings & thoughts</h1>
                {isLoading && <div style={{ width: '350px', height: '20px' }}><Skeleton style={{ width: "235px" }} /></div>}
                {isLoading && <div style={{ width: '350px', height: '20px' }}><Skeleton style={{ width: "198px" }} /></div>}
                {isLoading && <div style={{ width: '350px', height: '20px' }}><Skeleton style={{ width: "159px" }} /></div>}
                {isLoading && <div style={{ width: '350px', height: '20px' }}><Skeleton style={{ width: "240px" }} /></div>}
                {
                    info.map((post) => {
                        return <BlogItemsContainer key={post.id} post={post} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog