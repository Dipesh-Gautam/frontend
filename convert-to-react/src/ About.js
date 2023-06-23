import React from 'react'

const  About = () => {
  return (
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src={require('./images/about.jpg')} className= "imageAboutPage" alt=""/>
                </div>

                <div className="col-lg-8">
                    <p> Trying to code everyday.
                    </p>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: Dipesh Gautam</li>
                                <li>Age: 24</li>
                                <li>Occupation: Student right now</li>

                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Phone: +977 98666010874</li>
                                <li>Email: nirmalgautam12012@gmail.com</li>
                                <li>Address: Nepal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <p>I'm Dipesh Gautam, a passionate and driven student studying software engineering. With a deep love for technology, I thrive on the challenges and opportunities it presents. When I'm not coding, I find solace in staying fit and playing basketball. I do powerlifting too. I'm committed to personal growth, constantly seeking new ways to expand my knowledge and skills. I aim to make a positive impact and use technology for social good. With perseverance, adaptability, and a thirst for innovation, I'm on a journey to become a skilled software engineer and inspire others to pursue their passions in the ever-evolving world of technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default  About
