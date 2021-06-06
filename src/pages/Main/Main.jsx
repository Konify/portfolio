import React from 'react'
import imgProfile from '../../assets/konson.png'
import { projects, skillsData } from '../../assets/data/data'
import {MainTitle} from '../../Components/Title'
import {Container, Row, Col} from 'react-bootstrap'
import { FaMap, FaFacebook, FaWhatsapp, FaLinkedin, FaPhoneAlt, FaInstagram, FaTwitter, FaEnvelope, FaGithub, FaDownload, FaArrowCircleRight } from 'react-icons/fa'

export default function Main(){

    return (
        <div className="">
            <header className="header-wraper">
                <div className="hero-container">
                    <div className="hero-text-container">
                    <div>
                        <h2 className="hero-title">I' am</h2>
                        <h1 className="hero-title">Kon <span className="color-span">Akech</span></h1>
                        <h2 className="hero-title">I' am Web Developer</h2>
                        <div className="hero-btn-container text-center mt-5">
                            <a href={process.env.PUBLIC_URL+'/files/mycv.docx'} className="hero-title hero-btn white mr-2"><FaDownload className="hero-btn-icon" /> Download C.V</a>
                            <a href="#projects" className="hero-title hero-btn orange ">See My Work <FaArrowCircleRight className="hero-btn-icon" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="hero-image-container">
                        <img src={imgProfile} />
                    </div>
                </div>
            </header>
            <Container>
                <div className="content-wraper text-center" id="about">
                    <MainTitle title="About" title2="Me" />
                    <p className="hero-tite px-5">I am a selft taught  UI/UX designer and full stack web developer with an influential personality who wants to pursue a competitive and technical career as a Web Developer.  </p>
                </div>
                
                <div className="content-wraper skills-wraper text-center" id="skill">
                    <MainTitle title="My" title2="Skills" />
                    <Row>
                        {skillsData.map((info, key) => (
                            <Col md="4" key={key}>
                                {info.title}
                                <ul>
                                    {info.skill.map((skill, key) => (
                                        <li key={key}>{skill}</li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="content-wraper projects-wraper text-center" id="projects">
                    <MainTitle title="My" title2="Projects" />
                    <Row>
                        {projects.map((project, key) => (
                            <Col md={project.col} className="p-1 m-0" key={key}>
                                <div className="project-content">
                                    <div className="project-info">
                                        <div className="">
                                            {/* <h2>Web application</h2> */}
                                            {/* <p>{project.text}</p> */}
                                            <a href={project.url} className="url-btn" target="_blank">Visit link {project.url} </a>
                                        </div>
                                    </div>
                                    <img src={project.cover_img} className={project.cName} width="100%" alt="project cover pic" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-3">
                        <button className="body-btn">View All Projects <span className="fa fa-arrow-right"></span></button>
                    </div>
                </div>
                <div className="content-wrapr" id="contact">
                    <div className="contact-container">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="contact-input">
                                    <div className="title">
                                        <h1>Do you need website</h1>
                                    </div>
                                    <form>
                                        <div className="input-box">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                        <div className="input-box">
                                            <input type="text" placeholder="Your E-mail" />
                                        </div>
                                        <div className="input-box">
                                            <textarea placeholder="Your message"></textarea>
                                        </div>
                                        <div className="input-box">
                                            <button>Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="contact-text">
                                    <h3 className="pb-3">Contacts and address</h3>
                                    <table>
                                        <tr>
                                            <td><FaMap className="contact-icon" /> Address:</td>
                                            <td>Juba S.Sudan</td>
                                        </tr>
                                        <tr>
                                            <td><FaPhoneAlt className="contact-icon" /> Phone:</td>
                                            <td>+211920079070</td>
                                        </tr>
                                        <tr>
                                            <td><FaWhatsapp className="contact-icon" /> WhatsApp:</td>
                                            <td>+211920079070</td>
                                        </tr>
                                        <tr>
                                            <td><FaEnvelope className="contact-icon" /> E-mail:</td>
                                            <td>konakech3@gmail.com</td>
                                        </tr>
                                    </table>
                                    <div className="media-container">
                                        <h3 className="ml-4 pb-3">Follow me on</h3>
                                        <div className="d-flex">
                                            <a href="https:facebook.com/koni.akech" target="_blank" rel="noreferrer" ><FaFacebook className="media-icon-footer" /></a>
                                            <a href="https:facebook.com/koni.akech" target="_blank" rel="noreferrer" ><FaInstagram className="media-icon-footer" /></a>
                                            <a href="https:facebook.com/koni.akech" target="_blank" rel="noreferrer" ><FaTwitter className="media-icon-footer" /></a>
                                            <a href="https:facebook.com/koni.akech" target="_blank" rel="noreferrer" ><FaLinkedin className="media-icon-footer" /></a>
                                            <a href="https:facebook.com/koni.akech" target="_blank" rel="noreferrer" ><FaGithub className="media-icon-footer" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}