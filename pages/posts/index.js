import AllPosts from "../../components/posts/all-posts"
import {getAllPosts} from '../../lib/posts-util'

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJS is a the react framework for production - it makes builing fullStack React applicationsÍ",
    date: "2026-10-14",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "getting started with nextjs2",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJS is a the react framework for production - it makes builing fullStack React applicationsÍ",
    date: "2026-10-14",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "getting started with nextjs3",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJS is a the react framework for production - it makes builing fullStack React applicationsÍ",
    date: "2026-10-14",
  },
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs4",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextJS is a the react framework for production - it makes builing fullStack React applicationsÍ",
    date: "2026-10-14",
  },
];

function AllPostsPage(props){
    return <AllPosts posts={props.posts}/>
}
export function getStaticProps(){
 const allPosts= getAllPosts()

 return{
  props:{
    posts:allPosts
  }
 }
}


export default AllPostsPage