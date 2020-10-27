import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/icons/icon-arrow.svg';
import data from '../hero.json';

const HeroHomepage = () => {
    const [current, setCurrent] = useState(0),
        picEl = useRef();

    let ids = data.map(i => i.id),
        backdrops = data.map(i => i.picture),
        titles = data.map(i => i.title),
        paragraphs = data.map(i => i.subheading);

    useEffect(() => {
        picEl.current.classList.add('active--timer');

        const timeoutID = setTimeout (() => {
            if (current < 3) {
                setCurrent (current + 1)
            }  else {
                setCurrent(0) 
            }
    
            picEl.current.classList.remove('active--timer')
            picEl.current.classList.remove('active--click');
        }, 6000)

        return () => clearTimeout(timeoutID)
    }, [current])
    
    /*const timeoutID = setTimeout(() => {
        current < 3
            ? setCurrent(current + 1)
            : setCurrent(0)            

        picEl.current.classList.remove('active--timer')
        picEl.current.classList.remove('active--click');
    }, 6000)*/


    return (
        <div className="hero__homepage">
            <div className="hero__homepage--backdrop">
                <img 
                    src={require('../images/home/desktop/' + backdrops[current])} 
                    ref={picEl} 
                    alt={`${titles[current]} porfolio preview`}
                />
            </div>
            <div className="homepage__hero__textbox">
                <h2 className="homepage__hero__textbox--heading">{titles[current]}</h2>
                <p className="homepage__hero__textbox--subheading">{paragraphs[current]}</p>
                <Link to="/portfolio" className="btn">
                    <span>See Our Portfolio</span>
                    <img src={arrow} alt="Arrow to redirect to portfolio" />
                </Link>
            </div>

        </div>
    )
}

export default HeroHomepage;