import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
    return (
        <li className="flex items-start pb-16">
            <img
                src={review?.author_details?.avatar_path?.slice(1)}
                alt={review?.author}
                className="rounded-full mr-4"
            />
            <div>
                <h4>{review?.author}</h4>
                <h5 className="text-sm my-2 text-stone-400">@{review?.author_details?.username}</h5>
                <div className="flex items-center text-xl">
                    <h6 className="mr-2">{review?.author_details?.rating}</h6>
                    <h6><FaStar /></h6>
                </div>
            </div>
            <p className="text-sm ml-8">{review?.content?.slice(0, 1000)}...</p>
        </li>
    )
}

export default Review;