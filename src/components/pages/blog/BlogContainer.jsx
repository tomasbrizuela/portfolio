import { useEffect, useState } from "react"
import Blog from "./Blog"

const BlogContainer = () => {
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let url = "https://portfolioback-815092256362.us-central1.run.app/api/posts";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setPosts(res.Data)
                setLoading(false)
            })

    }, [])
    return (
        <>
            <Blog info={posts} isLoading={isLoading} />
        </>
    )
}

export default BlogContainer