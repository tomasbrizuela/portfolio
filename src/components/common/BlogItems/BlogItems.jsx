import { Link } from "react-router-dom"
import './BlogItemsStyle.css'
/* eslint-disable react/prop-types */
const BlogItems = ({ post }) => {
    return (
        <Link to={`/blog/${post.id}`} style={{ color: "grey", textDecoration: "none", maxWidth: "80%" }}>
            <div className="blogItem">
                <h4>{post.title}</h4>
                <p> {post.created_at.split("T")[0]}</p>
            </div>
        </Link>
    )
}

export default BlogItems