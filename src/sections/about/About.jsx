import AboutImage from '../../assets/header2.jpg'
import CV from '../../assets/resume.pdf'
import {HiDownload} from 'react-icons/hi'
import { TbBrandJavascript } from "react-icons/tb";

import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects and learning have been my passion. I've always pushed myself to do more!


                </p>
                <p>
                Hi, my name is Niveatha Nagarajan. I'm a full-stack web developer with a Bachelor's degree in Information Technology. I have always pushed myself toward my passion and reaching greater heights. Tap below to take a look at my resume and get to know more about me.                </p>
                <div class="button-container">
    <a href={CV} download class='btn primary'>Download Resume <HiDownload/></a>
    <a href=" https://cosmos-1-pqdr.onrender.com/ " class='btn primary'>Tap to view my Freelance Ecommerce website(MERN stack)<TbBrandJavascript /></a>
</div>
            </div>
        </div>
    </section>
  )
}

export default About