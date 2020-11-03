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

    const activeClick = () => {
        picEl.current.classList.remove('active--timer')
        picEl.current.classList.add('active--click')
    }


    return (
        <div className="hero__homepage">
            <div className="hero__homepage--backdrop">
                <img 
                    src={require('../images/home/desktop/' + backdrops[current])} 
                    ref={picEl} 
                    alt={`${titles[current]} porfolio preview`}
                />
            </div>
            <div className="hero__homepage__textbox">
                <h2 className="hero__homepage__textbox--heading">{titles[current]}</h2>
                <p className="hero__homepage__textbox--subheading">{paragraphs[current]}</p>
                <Link to="/portfolio" className="btn">
                    <span>See Our Portfolio</span>
                    <img src={arrow} alt="Arrow to redirect to portfolio" />
                </Link>
            </div>
            <div className="hero__homepage--pagination" onClick={activeClick}>
                {ids.map((id, i) => (
                    <button 
                        className={`pagination__btn ${i === current && 'active'}`}
                        onClick={() => setCurrent(i)} 
                        key={i}>
                            {id}
                    </button>
                ))}
            </div>

        </div>
    )
}

export default HeroHomepage;