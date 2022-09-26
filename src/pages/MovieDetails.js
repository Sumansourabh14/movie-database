import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../Requests';
import { backdrop_URL, poster_URL } from '../Requests';

const MovieDetails = () => {
    const [info, setInfo] = useState([]);
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    const movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const movieCastURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {
        axios
            .get(movieDetailURL)
            .then(res => {
                console.log(res.data)
                setInfo(res.data)
            })
    }, [movieDetailURL])

    useEffect(() => {
        axios
            .get(movieCastURL)
            .then(res => setCast(res.data))
    }, [movieCastURL])
    
    return (
        <section className='text-white'>
            <div className='absolute w-full h-[450px] bg-gradient-to-t from-black'></div>
            <img 
                src={backdrop_URL + info?.backdrop_path} 
                className="w-full h-[450px] object-cover"
                alt={info?.title} 
            />
            <div className='px-6 py-8 w-full absolute top-[45%] flex flex-col sm:flex-row justify-center'>
                <div className='mb-6 sm:mb-0 sm:pr-10 md:pr-20'>
                    <h1 className='text-4xl md:text-5xl 2xl:text-6xl font-bold mb-6'>
                        {info?.title ? info?.title : info?.original_name}
                    </h1>
                    <ul>
                        {info?.genres?.map(genre => (
                            <li 
                                className='inline-block text-neutral-200 bg-stone-700 px-3 py-1 rounded mr-2'
                            >
                                {genre?.name}
                            </li>
                        ))}
                    </ul>
                    <h2 className='text-2xl my-6'>{info?.tagline}</h2>
                    <p className='text-sm max-w-[800px] my-6'>{info?.overview}</p>
                    <h3 className='text-3xl my-6'>Cast</h3>
                    <ul className='text-sm grid grid-cols-5 lg:grid-cols-7'>
                        {cast?.cast?.slice(0, 7)?.map((castName) => (
                            <li className='mr-2 flex flex-col items-center text-center'>
                                <h4>{castName?.name}</h4>
                                <img 
                                    className='w-[100px] object-center mt-2' 
                                    src={poster_URL + castName?.profile_path} 
                                    alt={castName?.name} 
                                />
                            </li>
                        ))}
                    </ul>
                    <div className='my-8'>
                        <h3 className='text-3xl mt-8'>Director</h3>
                        {cast?.crew?.filter((crewName) => crewName?.job === "Director")?.map((crewName) => (
                            <div className='mt-6'>
                                <h4>{crewName?.name}</h4>
                                <img 
                                    className='w-[100px] object-center mt-2' 
                                    src={poster_URL + crewName?.profile_path} 
                                    alt={crewName?.name} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[400px] lg:w-[400px]'>
                    <img
                        src={poster_URL + info?.poster_path}
                        className="rounded shadow-lg hover:scale-105 duration-200"
                        alt={info?.title}
                    />
                </div>
            </div>
        </section>
    )
}

export default MovieDetails;