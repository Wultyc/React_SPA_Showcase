import useFetch from "../hooks/useFetch";
import Comment from "../models/Comment";

interface Props {
  postId: string;
}

export default function PostComments({ postId }: Props) {
  const postsURL = `http://localhost:3001/posts/${postId}/comments`;

  const { data: commentsList, isLoading, errors } = useFetch<Comment[]>(postsURL);

  console.log(commentsList);

  return (
    <section className='mb-5'>
      <div className='card bg-light'>
        <div className='card-body'>
          <form className='mb-4'>
            <textarea className='form-control' rows={3} placeholder='Join the discussion and leave a comment!'></textarea>
          </form>
          {isLoading && <p>Loading ...</p>}
          {commentsList?.map((comment) => (
                <div className='d-flex mb-4' key={comment.id}>
                    <div className='flex-shrink-0'>
                        <img className='rounded-circle' src='https://dummyimage.com/50x50/ced4da/6c757d.jpg' alt='...' />
                    </div>
                    <div className='ms-3'>
                        <div className='fw-bold'>{comment.name}</div>
                        {comment.body}
                    </div>
                </div>
            )
          )}
          {errors && (
            <div className='container'>
              <h3>An error occurred</h3>
              <p>{errors}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
