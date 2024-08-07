import React from 'react';
import "./routinebox.css";
import { FaClock } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useEffect } from 'react';
import ReactGA from "react-ga4"


export default function Routinebox(routine) {

    // console.log(time);

    const { note, lab, name, dept, time, roomNo, info } = routine;


    useEffect(() => {

        ReactGA.event(
            {
                name: "Subject View",
                category: "Subject View",
                action: { name },
                label: `View ${name} subject`,
            },
            {
                name: "Room",
                category: "Room",
                action: { roomNo },
                label: `Visit ${roomNo}`
            }
        )

    }, []);

    return (
        <div className="routineBox">
            {/* <p className="courseCode">{courseCode}</p> */}
            {note && <p className="note">{note}</p>}
            {lab ? <div className="lab">LAB</div> : " "}
            <h2 className='gre-text'>{name}</h2>
            {info && <h4>{info}</h4>}
            {dept && <h4>{dept}</h4>}
            <div className="time">
                {time.map((time, index) => {
                    return (
                        <h3 key={index}><i><FaClock /></i> {time}</h3>
                    )
                })}
            </div>
            <h3><i><MdLocationOn /></i> {roomNo}</h3>
            {/* {section && <h3><i className='alertSec'><AiOutlineAlert /></i> {section} <b>only</b></h3>} */}
        </div>
    )
}
