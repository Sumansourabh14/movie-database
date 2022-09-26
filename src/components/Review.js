const Review = ({ review }) => {
    return (
        <li>
            <h4>{review?.author}</h4>
            <p className="text-sm my-4">{review?.content?.slice(0, 1000)}...</p>
        </li>
    )
}

export default Review;