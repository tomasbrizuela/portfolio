/* eslint-disable react/prop-types */
import './BlogPost.css'
const BlogPost = ({ info, texts }) => {
    console.log(texts)
    return (
        <div className='blogPost'>
            <h1>{info.title}</h1>
            {
                texts.map((text) => <p key={text}>{text}</p>)
            }
        </div>
    )
}

export default BlogPost