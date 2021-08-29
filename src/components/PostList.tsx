import PostPreview from './PostPreview'

export default function PostList() {
    return (
        <div className="container">
            <PostPreview/>
            <hr className="col-3 col-md-2 mb-5" />
            <PostPreview/>
            <hr className="col-3 col-md-2 mb-5" />
            <PostPreview/>
            <hr className="col-3 col-md-2 mb-5" />
            <PostPreview/>
        </div>
    )
}