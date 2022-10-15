export default function PostId(props) {
    return (
      <div>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
        
      </div>
    )
}

export async function getServerSideProps(context) { 
    const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
    const data = await res.json();

    return{
        props: {
            post: data
        }
    }
 }
  