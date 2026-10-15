import PostHeader from "./post-header"
import classes from './post-content.module.css'
import ReactMarkdown from "react-markdown"
const DUMMY_POST={
     slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    date: "2026-10-14",
    content:'# This is a first Post'
}

function PostContent(props){
    const {post}=props
    const imagePath=`/images/posts/${post.slug}/${post.image}`
    return <article className={classes.content}>
        <PostHeader image={imagePath} title={post.title}/>
        <ReactMarkdown>{post.content}</ReactMarkdown>
        {post.content}

    </article>
}
export default PostContent