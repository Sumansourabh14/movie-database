import React from 'react';
import { Main, Row } from '../components';
import API_REQUESTS from '../Requests';

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowId='1' title="Upcoming" fetchURL={API_REQUESTS.requestTopUpcoming} />
        <Row rowId='2' title="Top Rated" fetchURL={API_REQUESTS.requestTopRated} />
    </div>
  )
}

export default Home;