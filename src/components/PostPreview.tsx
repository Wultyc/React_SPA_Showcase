export default function PostPreview() {
    return (
        <article>
            <header className="mb-4">
                <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                <div className="text-muted fst-italic mb-2">Posted on January 1, 2021 by Start Bootstrap</div>
                <a className="badge bg-secondary text-decoration-none link-light" href="#!">Web Design</a>
                <a className="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a>
            </header>
            <section className="mb-5">
                <p className="fs-5 mb-4">Science is an enterprise that should be cherished as an activity of the free human mind. Because it transforms who we are, how we live, and it gives us an understanding of our place in the universe.</p>
                <a href="#">Continue reading</a>
            </section>
        </article>
    )
}