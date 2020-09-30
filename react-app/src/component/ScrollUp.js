import React, {useState} from 'react';

import {
    Link
} from 'react-router-dom';

import {
    ArrowUpCircle,
    HouseDoor,
    PencilSquare,
} from 'react-bootstrap-icons';

const iconSize = 42;
const iconColor = "orange"; 

export default function ScrollUp(props) {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div className="footer-scroll-up" style={{display: showScroll ? 'flex': 'none'}}>
            <Link to="/" >
                <HouseDoor color={iconColor} size={iconSize} renderAs="button" className="footer-icon"/>
            </Link>
            <ArrowUpCircle 
                renderAs="button"
                className="scrollTop footer-icon"
                onClick={scrollTop}
                size={iconSize}
                color={iconColor}
            />
            <Link to="/blogs">
                <PencilSquare color={iconColor} size={iconSize} renderAs="button" className="footer-icon"/>
            </Link>
        </div>
    );
}