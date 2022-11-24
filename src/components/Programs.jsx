import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { programs } from '../data';
import Card from '../UI/Card';
import SectionHead from './SectionHead';
const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title="Programs" />
                <div className="programs__wrapper">
                    {
                        programs.map(({ id, icon, title, info, path }) => {
                            return (
                                <Card className={'programs__program'} key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link path={path} className="btn sm">
                                        Learn More <BsArrowRight />
                                    </Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Programs;