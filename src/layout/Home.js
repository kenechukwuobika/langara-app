import React from "react";

import Button from "../components/Button";
import Heading from "../components/Heading";
import FileSaver from 'file-saver';

import cloudIcon from "../assets/icons/Icon awesome-cloud-download-alt.svg";
import teamImage from "../assets/images/team_image.jpg";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const history = useNavigate();
    
    const onExplore = () => {
        history('/introduction')
    }

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
                                        onClick={onExplore}
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
                                        
                                        <img className="team__img" src={teamImage} />

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
            
            <section className="events">
                <div className="heading__center">
                    <Heading 
                        text="Events"
                    />
                </div>

                <>
                    <Link>https://en.wikipedia.org/wiki/Main_Page</Link>
                </>
            </section>

            <section className="publications">
                <div className="heading__center">
                    <Heading 
                        text="Studies and Publications"
                    />
                </div>

                <>
                    <Link>https://en.wikipedia.org/wiki/Main_Page</Link>
                </>
            </section>
        </>
    )
}

export default Home;