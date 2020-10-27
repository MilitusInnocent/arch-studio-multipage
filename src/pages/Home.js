import React from 'react';
import { HeroHomepage, Welcome, HomepageCTA, Featured, Footer } from '../components';

const Home = () => (
    <div className="page">
        <HeroHomepage />
        <Welcome />
        <HomepageCTA />
        <Featured />
        <Footer />        
    </div>
)

export default Home;