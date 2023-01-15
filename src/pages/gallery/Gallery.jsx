import Headers from '../../components/Headers';
import GalleryImage from '../../images/header_bg_3.jpg';
import './gallery.css';
const Gallery = () => {
  const  galleryLength = 15;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  
  return (
    <>
      <Headers title="Gallery" image={GalleryImage}>
        Quisquan id tenetur adipisci nesciunt ipsum amet in qubusdam, architecto nostrum nobis, est, deserunt odio illum perspiciatis.
      </Headers>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Image${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}  

export default Gallery