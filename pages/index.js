import { Fragment } from "react/jsx-runtime";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max Blog</title>
        <meta name="descriptiion" content="I post about nextjs" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
}
export default HomePage;
