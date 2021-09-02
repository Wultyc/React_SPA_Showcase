import { FormEvent, useState } from "react";
import Comment from "../models/Comment"

interface Props {
  postId: string,
  HandleUpdateComments: Function
}

export default function PostComments({ postId, HandleUpdateComments }: Props) {
  const commentsURL = `http://localhost:3001/comments`;

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const newComment: Comment = {
      postId: parseInt(postId),
      name: name,
      email: email,
      body: comment
    }
  
    fetch(commentsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
    .then(res => {
      if(!res.ok)
        throw('Error sending the comment')
    })
    .catch(err => {
      alert(err)
    })

    setName("")
    setEmail("")
    setComment("")

    HandleUpdateComments()
  }

  return (
    <div className='container'>
      <form className='mb-3' onSubmit={HandleSubmit}>
        <div className='row'>
          <div className='mb-3 col-md-6'>
            <label className='form-label'>Name</label>
            <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} aria-describedby='emailHelp' />
          </div>
          <div className='mb-3 col-md-6'>
            <label className='form-label'>Email</label>
            <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col-md-12'>
            <label className='form-label'>Comment</label>
            <textarea className='form-control' value={comment} onChange={(e) => setComment(e.target.value)} rows={3}></textarea>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
