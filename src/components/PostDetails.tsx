import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Post from "../models/Post";
import User from "../models/User";
import PostComments from "./PostComments";
interface Params {
  postId: string;
}

export default function PostDetails() {
  const { postId } = useParams<Params>();
  const postURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const { data: post, isLoading, errors } = useFetch<Post>(postURL);

  const userURL = `https://jsonplaceholder.typicode.com/users/${post?.userId}`
  const {data: author} = useFetch<User>(userURL)

  return (
    <div className='container'>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && !errors && (
        <>
          <article>
            <header className='mb-4'>
              <h1 className='fw-bolder mb-1'>{post?.title}</h1>
              <div className='text-muted fst-italic mb-2'>Posted by {author?.name}</div>
              <a className="badge bg-secondary text-decoration-none link-light">Post</a>
            </header>
            <figure className='mb-4'>
              <img className='img-fluid rounded' src='https://dummyimage.com/900x400/ced4da/6c757d.jpg' alt='...' />
            </figure>
            <section className='mb-5'>
              <p className='fs-5 mb-4'>{post?.body}</p>
            </section>
          </article>
          <PostComments postId={postId}/>
        </>
      )}

      {errors && (
        <div className='container'>
          <h3>An error occurred</h3>
          <p>{errors}</p>
        </div>
      )}
    </div>
  );
}
