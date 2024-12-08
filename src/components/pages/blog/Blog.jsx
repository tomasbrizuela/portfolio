/* eslint-disable react/prop-types */
import './BlogStyle.css';
import BlogItemsContainer from "../../common/BlogItems/BlogItemsContainer"

const Blog = ({ info }) => {
    return (
        <div>
            <div className="listEntries">
                <h1>My writings & thoughts</h1>
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