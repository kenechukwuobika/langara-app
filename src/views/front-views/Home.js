import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FileSaver from 'file-saver';

import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Tab from "components/Tab";

import cloudIcon from "assets/icons/Icon awesome-cloud-download-alt.svg";
import teamImage from "assets/images/team_image.jpg";
import EventList from "components/lists/EventList";
import { getEvents } from "services/eventService";

const Home = () => {
    const history = useNavigate();
    const { search } = useLocation();
    const [eventTabItem, setEventTabItem] = useState('past');
    const [studiesTabItem, setStudiesTabItem] = useState('past');
    const [events, setEvents] = useState([]);
    const [currentEvents, setCurrentEvents] = useState(null);

    const eventTabItems = ['past', 'current', 'future'];
    const studiesTabItems = ['past', 'underway', 'planned'];

    useEffect(() => {
        (async () => {
            const events = await getEvents()
            setEvents(events)
        })()
    }, [])


    useEffect(() => {
        if(!search) {
            return;
        }

        const searchValue = search.toLowerCase().split('=')[1];

        if(search.includes('events')) {
            setEventTabItem(searchValue)
        }

        if(search.includes('studies')) {
            setStudiesTabItem(searchValue)
        }

    }, [search])

    useEffect(() => {
        if(!events) {
            return;
        }
        const flteredEvents = events.filter(event => {
            if(event.type === eventTabItem) {
                return event
            }
        })
        setCurrentEvents(flteredEvents)
    }, [eventTabItem, events])

    useEffect(() => {
        // const keiks = events.filter(event => {
        //     if(event.type === studiesTabItem) {
        //         return event
        //     }
        // })
        // setCurrentEvents(keiks)
    }, [studiesTabItem])

    return (
        <>
            <section className='banner'>
                <div className='row'>
                    <div className='container'>
                        <div className='col-12'>
                            <div className="banner__content">
                                <h1 className="banner__h1">Immigration, Education & Employment Pathways of Urban and Rural <p className="t--secondary">International Students</p> in BC</h1>
                                <div className="banner__btn">
                                    <Button
                                        onClick={() => FileSaver.saveAs(
                                            process.env.PUBLIC_URL + "/documents/test-pdf.pdf")}
                                        isHollow="true"
                                        text="Download PDF"
                                        icon={cloudIcon}
                                    />
                                    <Button
                                        onClick={() => history('/introduction')}
                                        text="Explore Research"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overview">
                <div className="row">
                    <div className="container">
                        <div className="col-12">
                            <div className="heading__center">
                                <Heading 
                                    text="Project Overview"
                                />
                            </div>

                            <>
                                <h4 className="overview__h4">Background</h4>
                                <p className="overview__text">Despite a significant increase in international students (IS) coming to Canada in recent years, very little is known about them and their immigration pathways. We know some students are successful in achieving their intended study, employment, and immigration outcomes while others are not, <span className="t--secondary">but what is happening on the ground?</span> Since the immigration trajectories of IS are not well understood, it is not possible to evaluate, much less ensure, the effectiveness or efficiency of policy and program priorities for Canada. How does the importance of educational programs, community support, and immigration policy converge with international students' status pathways?</p>
                                <p className="overview__text">The Immigration, Education & Employment Pathways research study, funded by through a College and Community Social Innovation Fund (CSIF) grant from the Social Sciences and Humanities Research Council (SSHRC) builds on and expands current knowledge by exploring the migration, employment, and education pathways of urban and rural IS in BC. The project is organized as a joint effort between Langara College and College of New Caledonia (CNC).</p>
                            </>

                            <>
                                <h4 className="overview__h4">Primary Objectives</h4>
                                <p className="overview__text">Investigating international student experiences and outcomes along the Study-Work-Stay pathway to: </p>
                                <ul>
                                    <li>bring policy, student intent, and reality into closer alignment</li>
                                    <li>enable more students to achieve success as they define it</li>
                                    <li>reduce the gaps between opportunity and responsibility for students, PSIs, employers, and policy makers</li>
                                </ul>
                            </>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team">
                <div className="row">
                    <div className="container">
                        <div className="col-12">
                            <div className="team__container">
                                <div className="team__right">
                                    <div className="team__right--container">
                                        <Heading text="Meet the team" color="white" />
                                        
                                        <p className="team__text">Despite a significant increase in international students (IS) coming to Canada in recent years, very little is known about them and their immigration pathways. We know some students are successful in achieving their intended study, employment, and immigration outcomes </p>
                                        
                                        <img className="team__img" src={teamImage} alt={teamImage} />

                                        <Button
                                            onClick={() => history('/team')}
                                            text="View Team"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="events" className="events" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading__center">
                                <Heading 
                                    text="Events"
                                />
                            </div>

                            <Tab
                                items={eventTabItems}
                                tabItem={eventTabItem}
                                setTabItem={setEventTabItem}
                                type="events"
                            />

                            <EventList events={currentEvents} eventTabItem={eventTabItem} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="publications">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading__center">
                                <Heading 
                                    text="Studies and Publications"
                                />
                            </div>

                            <Tab
                                items={studiesTabItems}
                                tabItem={studiesTabItem}
                                setTabItem={() => {}}
                                type="studies"
                            />

                            {/* <>
                                <Link>https://en.wikipedia.org/wiki/Main_Page</Link>
                            </>       */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;