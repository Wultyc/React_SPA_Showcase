import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Post from '../models/Post'
import User from '../models/User'
import Pagination from './Pagination'
import PostPreview from './PostPreview'

interface Params {page: string }


const paginationConfig = {
    increment: 2,
    start: 0
}

export default function PostList() {

    const { page } = useParams<Params>()
    const currentPage = (page != null && parseInt(page) > 0) ? parseInt(page) : 1
    const startPost = (currentPage - 1) * paginationConfig.increment
    const endPost = startPost + paginationConfig.increment

    const postsURL = `https://jsonplaceholder.typicode.com/posts?_start=${startPost}&_end=${endPost}`
    const usersURL = `https://jsonplaceholder.typicode.com/users`

    const {data: postList, headers: postHeaders, isLoading, errors} = useFetch<Post[]>(postsURL)
    const {data: authorsList} = useFetch<User[]>(usersURL)

    const hasMorePages = postHeaders['x-total-count'] > endPost

    const GetAuthorName = (authorId: number): string => {

        const newAuthor = authorsList?.find((author: any) => author.id == authorId)

        return newAuthor?.name ?? "Unknown"
    }

    console.log(page, isLoading)

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
                )
            }

            {(!isLoading && !errors) &&
                (<Pagination currentPage={currentPage} hasMore={hasMorePages} endpoint={''} />)
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