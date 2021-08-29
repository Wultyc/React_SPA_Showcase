interface Props {id: number, author: string, title: string, body: string }

export default function PostPreview({id, author, title, body }: Props) {
    
    return (
        <article>
            <header className="mb-4">
                <h1 className="fw-bolder mb-1">{title}</h1>
                <div className="text-muted fst-italic mb-2">Posted by {author}</div>
                <a className="badge bg-secondary text-decoration-none link-light">Post</a>
            </header>
            <section className="mb-5">
                <p className="fs-5 mb-4">{body.substring(0, body.indexOf('\n'))}</p>
                <a href={"/posts/" + id}>Continue reading</a>
            </section>
        </article>
    )
}