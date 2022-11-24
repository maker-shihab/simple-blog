import React, { useState } from 'react';
import { ImPointLeft, ImPointRight, ImQuotesLeft } from 'react-icons/im';
import { testimonials } from '../data';
import Card from '../UI/Card';
import SectionHead from './SectionHead';

const Testimonials = () => {
    const [index, setIndex] = useState(1);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestBtn = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestBtn = () => {
        setIndex(prev => prev + 1);
        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    }
    return (
        <section className='testimonials'>
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title="Testimonials" />
                <Card className="testimonial">
                    <div className="testimonial__avater">
                        <img src={avatar} alt="avater" />
                    </div>
                    <p className='testimonial__quote'>{quote}</p>
                    <h5>{name}</h5>
                    <small>{job}</small>
                </Card>
                <div className="testimonial__btns">
                    <button type='button' onClick={prevTestBtn}>
                        <ImPointLeft />
                    </button>
                    <button type='button' onClick={nextTestBtn}>
                        <ImPointRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;