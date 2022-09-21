import React from 'react';
import { Main, Row } from '../components';
import API_REQUESTS from '../Requests';

const Home = () => {
  return (
    <div>
        <Main />
        <Row title="Upcoming" fetchURL={API_REQUESTS.requestTopUpcoming} />
        <Row title="Top Rated" fetchURL={API_REQUESTS.requestTopRated} />
    </div>
  )
}

export default Home;