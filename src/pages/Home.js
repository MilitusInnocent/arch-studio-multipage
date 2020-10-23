import React from 'react';
import { Welcome, HomepageCTA, Featured } from '../components';

const Home = () => (
    <div className="page">
        <Welcome />
        <HomepageCTA />
        <Featured />
        
    </div>
)

export default Home;