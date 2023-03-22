import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './Card.css';

function Card (props) {
    return (
        <>
                <div className='cards flex relative '>
                    <div className='card flex rounded-2xl'>
                        <img src={props.imgsrc} alt='mtv' className='img_bar rounded-3xl' />
                        <div className='Card_info absolute'>
                            <span className='card_title font-bold pt-4'> {props.sname}</span>
                            {/* <h3 className='link_info'>{props.link} </h3> */}
                            {/* <a className='hero_info'>{props.welcome} </a> */}
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Card;
