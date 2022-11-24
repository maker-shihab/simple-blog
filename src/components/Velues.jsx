import React from 'react';
import { BsXDiamondFill } from 'react-icons/bs';
import { values } from '../data';
import Image from '../images/values.jpg';
import Card from '../UI/Card';
import SectionHead from './SectionHead';

const Velues = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="values-shape" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<BsXDiamondFill/>} title="Values"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint voluptatem quae ea eligendi labore, autem sapiente assumenda officia </p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card className="values__value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Velues;