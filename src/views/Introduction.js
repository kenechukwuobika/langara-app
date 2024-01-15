import { useNavigate } from "react-router-dom";

import Card from "components/Card";
import Heading from "components/Heading";
import sample1 from "assets/images/sample1.png";
import sample2 from "assets/images/sample2.png";

const Introduction = () => {

    const history = useNavigate();

    const results = [
        {
            slug: "education",
            text: "Education - Study experience in Canada (Q2 - Q15)"
        },
        {
            slug: "employment",
            text: "Employment - Working experience in Canada (Q16 - Q25)"
        },
        {
            slug: "housing",
            text: "Housing - Housing in Canada (Q26 - Q37)"
        },
        {
            slug: "immigration",
            text: "Immigration - immigration process since your arrival in Canada (Q38 to Q43)"
        },
        {
            slug: "wellbeing",
            text: "Wellbeing (Q44 - Q48)"
        },
        {
            slug: "about",
            text: "About you (Q49 - Q60)"
        }
    ]

    return (
        <section className="intro">
            <div className="row">
                <div className="container">
                    <div className="col-12">
                        <div className="intro__content">
                            <div className="heading__center">
                                <Heading 
                                    text="Introduction"
                                />
                            </div>

                            <p className="overview__text">Despite a significant increase in international students (IS) coming to Canada in recent years, very little is known about them and their immigration pathways. We know some students are successful in achieving their intended study, employment, and immigration outcomes while others are not, but what is happening on the ground? Since the immigration trajectories of IS are not well understood, it is not possible to evaluate, much less ensure, the effectiveness or efficiency of policy and program priorities for Canada. How does the importance of educational programs, community support, and immigration policy converge with international students' status pathways?</p>
                            <p className="overview__text">The Immigration, Education & Employment Pathways research study, funded by through a College and Community Social Innovation Fund (CSIF) grant from the Natural Sciences and Engineering Research Council (NSERC)  builds on and expands current knowledge by exploring the migration, employment, and education pathways of urban and rural IS in BC. The project is organized as a joint effort between Langara College and College of New Caledonia (CNC).</p>
                            <p className="overview__text">6,926 students and recent graduates from the two colleges were invited to participate in an on-line survey to collect the necessary data. The survey was conducted in the period of February 2021 to April 2021. In addition to the quantitative data, the project team also conducted a series of interviews with </p>
                        </div>

                        <div className="intro__content">
                            <div className="heading__center">
                                <Heading 
                                    text="Result of the Survey"
                                />
                            </div>

                            <p className="overview__text">Results of the survey are summarized in the data tables in this section. They are grouped according to the sections in the questionnaire as follows:</p>

                            {results && results.map((result, index) => 
                            
                                (<Card key={index} text={result.text} onClick={() => history(`/results/${result.slug}`)} />)
                            )}
                        </div>

                        <div className="intro__content">
                            <p className="overview__text">Two tables are generated for each question in the survey.</p>
                            <p className="overview__text">The first table shows summary of answers to the question as stratified by the two Colleges (CNC and Langara). Two other strata were created for answers that are “Other” or “Preferred Not to Answer (PNA)”. Non-responses to a question (DNA) are also included in the in the last stratum (PHA/DNA).</p>
                            <p className="overview__text">The second table shows summary of answers to the question as stratified by the gender provided by the respondents. One stratum was created for answers that is “Preferred Not to Answer (PNA)”. Non-responses to this question (DNA) are also included in the in the last stratum (PHA/DNA).</p>
                            <p className="overview__text">Please refer to the Sample tables section on how these data tables should be read.</p>
                        </div>

                        <div className="intro__content">
                            <div className="heading__center">
                                <Heading 
                                    text="Sample Tables"
                                />
                            </div>

                            <p className="overview__text">As stated above, two tables are generated for each question in the survey: one for stratification by college, the other, stratification by gender. The two sample tables that follow demonstrate how these two tables should be read.</p>

                            <h4 className="overview__h4">By College</h4>
                            <img className="intro__img" src={sample1} alt="Sample table data by college"/>

                            <h4 className="overview__h4">By Gender</h4>
                            <img className="intro__img" src={sample2} alt="Sample table data by gender"/>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;