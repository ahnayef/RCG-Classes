import React from 'react';
import "./routinebox.css";
import { FaClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineAlert } from 'react-icons/ai';
import { useEffect } from 'react';
import ReactGA from "react-ga4"


export default function Routinebox(routine) {

    // console.log(time);

    const { courseCode, lab, name, teacher, time, roomNo, section } = routine;


    useEffect(() => {

        ReactGA.event(
            {
                name:"Subject View",
                category: "Subject View",
                action: { name },
                label: `View ${name} subject`,
            },
            {
                name:"Room",
                category: "Room",
                action: { roomNo },
                label: `Visit ${roomNo}`
            },
            {
                name:"Teacher",
                category: "Teacher",
                action: { teacher },
                label: `Class taken by ${teacher}`
            }
        )

    }, []);

    return (
        <div className="routineBox">
            <p className="courseCode">{courseCode}</p>
            {lab ? <div className="lab">LAB</div> : " "}
            <h2 className='gre-text'>{name}</h2>
            <h4>{teacher}</h4>
            <div className="time">
                {time.map((time, index) => {
                    return (
                        <h3 key={index}><i><FaClock /></i> {time}</h3>
                    )
                })}
            </div>
            <h3><i><MdLocationOn /></i> {roomNo}</h3>
            {section && <h3><i className='alertSec'><AiOutlineAlert /></i> {section} <b>only</b></h3>}
        </div>
    )
}
