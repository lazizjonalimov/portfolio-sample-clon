import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [

{
  id: 1, 
  image: IMG1,
  title: "Face Recognition Application", 
  github: "https://github.com/lazizjonalimov", 
  demo: "https://github.com/lazizjonalimov"
},
{
  id: 2, 
  image: IMG2,
  title: "E-Commerce Web Application", 
  github: "https://github.com/lazizjonalimov", 
  demo: "https://github.com/lazizjonalimov"
},
{
  id: 3, 
  image: IMG3,
  title: "Fakefile App - Clone of Makefile in C", 
  github: "https://github.com/lazizjonalimov", 
  demo: "https://github.com/lazizjonalimov"
},
{
  id: 4, 
  image: IMG4,
  title: "Cache Simulator Application", 
  github: "https://github.com/lazizjonalimov", 
  demo: "https://github.com/lazizjonalimov"
},
{
  id: 5, 
  image: IMG5,
  title: "Memory Allocation Application", 
  github: "https://github.com/lazizjonalimov", 
  demo: "https://github.com/lazizjonalimov"
},
{
  id: 6, 
  image: IMG6,
  title: "A Simple Swift Application for iOS", 
  github: "https://github.com/lazizjonalimov", 
  demo: "https://github.com/lazizjonalimov"
}
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id}  className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} target="_blank" className='btn' >GitHub</a>
                    <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                  </div>
                </article>
              );
            })
          } 
        </div>
    </section>
  ) 
}

export default Portfolio


