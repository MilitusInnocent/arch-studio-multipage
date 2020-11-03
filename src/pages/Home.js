import React from 'react';
import { HeroHomepage, Welcome, HomepageCTA, Featured } from '../components';

const Home = () => (
    <div className="page">
        <HeroHomepage />
        <Welcome />
        <HomepageCTA />
        <Featured />       
    </div>
)

export default Home;