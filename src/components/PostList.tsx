import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import Post from '../models/Post'
import User from '../models/User'
import PostPreview from './PostPreview'

export default function PostList() {

    const postsURL = `https://jsonplaceholder.typicode.com/posts`
    const usersURL = `https://jsonplaceholder.typicode.com/users`

    const {data: postList, headers: postHeaders, isLoading, errors} = useFetch<Post[]>(postsURL)
    const {data: authorList} = useFetch<User[]>(usersURL)


    const GetAuthorName = (authorId: number): string => {

        const newAuthor = authorList?.find((author: any) => author.id == authorId)

        return newAuthor?.name ?? "Unknown"
    }

    return (
        <div className="container">
            {isLoading && (<p>Loading ...</p>)}
            {
                (!isLoading && !errors) && (
                    postList?.map(post => (
                        <div className="container" key={post.id}>
                            <PostPreview id={post.id} author={GetAuthorName(post.userId)} title={post.title} body={post.body} />
                            <hr className="col-3 col-md-2 mb-5" />
                        </div>
                    ))
                //        (<Pagination currentPage={currentPage} hasMore={hasMorePages} endpoint={''} />)
                )
            }

            {errors && (
                <div className="container">
                    <h3>An error occurred</h3>
                    <p>{errors}</p>
                </div>
            )}
        </div>
    )
}