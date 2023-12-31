import React from 'react';
import { useEffect,useState } from 'react';
// import Gallery from '../data/gallery-images.json';

const Welcome = () => {
    const [Gallery,setGalleryImages] = useState([]);
    const loadGalleryImages = async () =>
    {
      const url = "https://6torc7wbze.execute-api.us-east-1.amazonaws.com/Production/galleryimages";
      const response = await fetch(url);
      let jsonResponse = await response.json();
      setGalleryImages(jsonResponse);
    }
    useEffect(
      () => {
        loadGalleryImages();
      },[]
    )
    return(
        <div className="scene" id="welcome">
            <article className="content">
              <div className="gallery">
                {
                  Gallery.map((link)=> 
                  <img className={link.className} src={link.img} alt={link.alt} />)
                }
                </div>
              <h1>Welcome to the Landon&nbsp;Field,   TODO: more edits on words and styling later.</h1>
              <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
          </div>
        );
}
export default Welcome;