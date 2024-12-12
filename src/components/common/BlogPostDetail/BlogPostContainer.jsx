import { useParams } from "react-router-dom"
import BlogPost from "./BlogPost"
import { useEffect, useState } from "react"

const BlogPostContainer = () => {
    const { id } = useParams()
    const [content, setContent] = useState([]);
    const [texts, setTexts] = useState([]);
    useEffect(() => {
        let url = "https://portfolioback-815092256362.us-central1.run.app/api/posts/" + id;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setContent(res)
                let textos = res.content.split("\n");
                setTexts(textos);
            });

    }, [])
    console.log(content)
    console.log(texts)
    return (
        <>
            <BlogPost info={content} texts={texts} />
        </>
    )
}

export default BlogPostContainer