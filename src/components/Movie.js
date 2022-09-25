import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { backdrop_URL_Small } from '../Requests';

const Movie = ({ movie }) => {
    // const [like, setLike] = useState(false);

    return (
        <li className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative mr-4'>
            <img
                className='block w-full h-auto' 
                src={backdrop_URL_Small + movie?.backdrop_path} 
                alt={movie?.title} 
            />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 duration-200 text-white'>
                <p className='flex items-center justify-center text-center h-full font-bold text-xs md:text-sm whitespace-normal px-2'>
                    {movie?.title ? movie?.title : movie?.name}
                </p>
                <p className='absolute top-2 left-2 text-gray-300'>
                    {/* {like ? <FaHeart /> : <FaRegHeart />} */}
                    <FaRegHeart />
                </p>
            </div>
        </li>
    )
}

export default Movie;