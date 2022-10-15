import Link from "next/link";

export default function Posts(props) {
    return (
      <div>
        Posts Component
        {console.log(props)}
        {props.posts.map(post => (
            <div key={post.id}>
                <Link href={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </div>
        ))}
      </div>
    )
}

export async function getStaticProps() { 
    const res = await fetch(`http://localhost:3000/api/posts`);
    const data = await res.json();

    return{
        props: {
            posts: data
        }
    }
}