/* eslint-disable react/prop-types */
import BlogItems from "./BlogItems"

const BlogItemsContainer = ({ post }) => {
    return (
        <>
            <BlogItems post={post} />
        </>
    )
}

export default BlogItemsContainer