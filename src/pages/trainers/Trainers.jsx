import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Headers from '../../components/Headers';
import Trainer from '../../components/Trainer';
import { trainers } from '../../data';
import TrainerImage from '../../images/header_bg_5.jpg';
import './trainers.css';

const Trainers = () => {
  return (
    <>
      <Headers title="Our Trainers" image={TrainerImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </Headers>
      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
             return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebookF/>, link: socials[2]},
                  {icon: <FaLinkedinIn/>, link: socials[3]}
                ]
              }/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers