import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Cube from "../assets/images/cube.jpg";
import 'react-vertical-timeline-component/style.min.css';
const Experiences = () => {
    const data = [
        {
            title: "Initial Learning Journey with JavaScript:",
            description: "In the beginning, I started my programming journey with JavaScript. However, I encountered challenges in understanding the language fully. Recognizing the importance of a strong foundation, I decided to switch gears and focus on fundamentals first. This led me to delve into languages like C, emphasizing memory management, data structures, and honing my problem-solving skills.",
        },
        {
            title: "HTML, CSS, and Basic Web Development :  ",
            description: "After solidifying my understanding of fundamental concepts, I returned to web development with a fresh perspective. I delved into HTML and CSS, creating various basic projects like calculators and simple word games. These projects, available on my GitHub, aimed to familiarize myself with the web development environment and enhance my skills."
        },
        {
            title: " Introduction to React and Frontend Development:",
            description: "Subsequently, I embarked on learning React to add dynamism to my projects. While I successfully built dynamic interfaces, I felt there was a gap in the overall richness of my applications. This realization fueled my curiosity to explore backend development using the JavaScript ecosystem, including Node.js, Express, and MySQL."
        },
        {
            "title": 'Full-Stack Development with Node.js, Express, and MySQL:',
            description: " Seeking a more comprehensive skill set, I ventured into full-stack development. Leveraging Node.js, Express, and MySQL, I undertook projects such as a real estate application and a task manager. These projects aimed to integrate both frontend and backend technologies, providing a holistic understanding of web development."
        },
        {
            title: "Enhancing User Interfaces with Tailwind CSS:",
            description: "Description: Acknowledging the importance of aesthetics and efficiency in web design, I introduced Tailwind CSS to my toolkit. This utility-first CSS framework allowed me to streamline styling processes and enhance the visual appeal of my projects."
        },
        {
            title: "Motivation Behind the Learning Journey:",
            description: "Description: It's crucial to note that my journey is not merely a casual pursuit of knowledge. Rather, it's a dedicated effort to build a strong foundation, gain practical experience, and ultimately seek opportunities for employment or real-world experiences in the field. This portfolio is a testament to my commitment to continuous learning and skill development."
        }
    ]
    return (
        <section id="experiences" className=" p-6  mt-8 text-white ">
            <h className=" font-extrabold text-[#e0aaff] text-2xl tracking-wider  border-b-[3px]  border-b-purple-500 p-2  ">
                Experiences :
            </h>
            <div className="flex">
                <VerticalTimeline
                    animate={true}>
                    {
                        data.map((e, index) => {
                            return (
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#3c096c', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #5a189a' }}
                                    iconStyle={{ background: '#3c096c', color: '#fff', width: "50px", height: "50px" }}
                                    date="April 2013"
                                >
                                    <div className="flex flex-col hover:opacity-90 ">
                                        <h3 className="vertical-timeline-element-title font-bold text-[#ffd6ff] text-xl underline">{e.title}</h3>

                                        <p className=" text-gray-300 text-xs font-normal " >
                                            {e.description}
                                        </p>
                                    </div>
                                </VerticalTimelineElement>
                            )
                        })}
                </VerticalTimeline>
            </div>

        </section>
    )
}
export default Experiences;