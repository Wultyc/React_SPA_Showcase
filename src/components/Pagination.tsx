import { Link } from "react-router-dom"

interface Props {currentPage: number, hasMore: boolean, endpoint: string }

export default function Pagination({ currentPage, hasMore, endpoint }: Props) {

    const getPage = (increment: number) => {
        const newPageNr = currentPage + increment
        return `${endpoint}/page/${newPageNr}`
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination position-absolute start-50 translate-middle">
                <li className={"page-item" + (currentPage === 1 ? " disabled" : "")}>
                    <Link className="page-link" to={getPage(-1)} >Previous</Link>
                </li>
                <li className="page-item active">
                    <Link className="page-link" to={getPage(0)} >{currentPage}</Link>
                </li>
                <li className={"page-item" + (!hasMore ? " disabled" : "")}>
                    <Link className="page-link" to={getPage(1)} >Next</Link>
                </li>
            </ul>
        </nav>
    )
}