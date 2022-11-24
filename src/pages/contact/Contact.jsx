import { FiFacebook, FiGithub, FiInstagram, FiMail, FiTwitter } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';
import Headers from '../../components/Headers';
import ContactImage from '../../images/contact-bg.jpg';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Headers title="Contact Us" image={ContactImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magni minus libero cumque nesciunt. Quisquam perferendis magni esse similique eligendi.
      </Headers>
      <ReactTooltip />
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__socail">
            <ul>
              <li data-tip="Facebook">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FiFacebook /></a>
              </li>
              <li data-tip="Instagram">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FiInstagram /></a>
              </li>
              <li data-tip="Twitter">
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FiTwitter /></a>
              </li>
              <li data-tip="GitHub">
                <a href="https://www.github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
              </li>
              <li data-tip="Mail">
                <a href="https://www.github.com" target="_blank" rel="noreferrer"><FiMail />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact