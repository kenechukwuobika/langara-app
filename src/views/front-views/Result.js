import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading";
import Card from "../../components/Card";

const Result = () => {
    const results = [
        {
            slug: "education",
            text: "Education - Study experience in Canada (Q2 - Q15)",
            description: "This section reports responses to Question 2 to Question 15 in the survey and is about respondents’ education background and program details formerly or currently enrolled in Canada. Please refer to Section 2.1 for an example on how these tables should be read and understood.",
            questions: [
                {
                    number: 2,
                    text: "Please indicate the last educational institution you attended. If you are currently a student, please indicate your current institution.",
                    answers: {
                        college: [
                            {
                                type: "th1",
                                colSpan: 3,
                                data: ["Strata", "1.CNC", "2.Langara", "3.Other", "4.PNA/DNA", "Total"],
                            },
                            {
                                type: "th2",
                                colSpan: 1,
                                data: ["", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Est. Prop. Proportion", "ME"],
                            },
                            {
                                type: "td",
                                colSpan: 1,
                                data: ["1.One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                colSpan: 1,
                                data: ["2.More than One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                colSpan: 1,
                                data: ["3.PNA/DNA", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                colSpan: 3,
                                data: ["Total", "650", "403", "300", "344", "829"],
                            },
                        ],
        
                        gender: [
                            {
                                type: "th1",
                                data: ["Strata", "1.CNC", "2.Langara", "3.Other", "4.PNA/DNA", "Total"],
                            },
                            {
                                type: "th2",
                                data: ["", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME"],
                            },
                            {
                                type: "td",
                                data: ["1.One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                data: ["2.More than One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                data: ["3.PNA/DNA", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                data: ["Total", "650", "403", "300", "344"],
                            },
                        ]
                    }
                }
            ],
        }
    ];

    const results1 = [
        {
            slug: "education",
            text: "Education - Study experience in Canada (Q2 - Q15)",
            description: "This section reports responses to Question 2 to Question 15 in the survey and is about respondents’ education background and program details formerly or currently enrolled in Canada. Please refer to Section 2.1 for an example on how these tables should be read and understood.",
            questions: [
                {
                    number: 2,
                    text: "Please indicate the last educational institution you attended. If you are currently a student, please indicate your current institution.",
                    answers: {
                        college: [
                            {
                                type: "th1",
                                colSpan: 3,
                                data: ["Strata", "1.CNC", "2.Langara", "3.Other", "4.PNA/DNA", "Total"],
                            },
                            {
                                type: "th2",
                                colSpan: 1,
                                data: ["", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Est. Prop. Proportion", "ME"],
                            },
                            {
                                type: "td",
                                colSpan: 1,
                                data: ["1.One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                colSpan: 1,
                                data: ["2.More than One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                colSpan: 1,
                                data: ["3.PNA/DNA", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                colSpan: 3,
                                data: ["Total", "650", "403", "300", "344", "829"],
                            },
                        ],
        
                        gender: [
                            {
                                type: "th1",
                                data: ["Strata", "1.He/him/his", "2.She/her/hers", "3.They/them/their", "4.PNA/DNA", "Total"],
                            },
                            {
                                type: "th2",
                                data: ["", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME", "Count", "Percent", "ME"],
                            },
                            {
                                type: "td",
                                data: ["1.One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                data: ["2.More than One", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                data: ["3.PNA/DNA", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%", "650", "93.12%", "1.92%"],
                            },
                            {
                                type: "td",
                                data: ["Total", "650", "403", "300", "344"],
                            },
                        ]
                    }
                }
            ],
        }
    ];

    let { query } = useParams();
    const [ result,  ] = useState(results1.find( result => result.slug === query));
    const [ currentQuestion, setCurrentQuestion ] = useState([]);

    // useEffect(() => {
    //     const currentResult = results.find( result => result.slug === query)
    //     setResult(currentResult)
    // }, [])

    useEffect(() => {
        if(result) {
            setCurrentQuestion(result.questions[0])
        }
    }, [result])

    const displayth1 = () => {
        return currentQuestion?.answers?.gender.map(tr => {
            let className = ""
            if(tr.type === "th1") {
                className = "th1"
            }else if(tr.type === "th2") {
                className = "th2"
            }else {
                className = "td"
            }
            return (
                <tr className={className}>
                    {tr?.data.map((td, index) => {
                        if(tr.type === "th1") {
                            if(index === 0) {
                                return (<th colSpan={1}>{td}</th>)
                            }
                            return (<th colSpan={3}>{td}</th>)
                        }
                        else if(tr.type === "th2") {
                            return (<th colSpan={tr?.colSpan}>{td}</th>)
                        }else {
                            return (<td colSpan={tr?.colSpan}>{td}</td>)

                        }
                    })}
                </tr>
            )
        })
    }


    if(!result) {
        return (<></>)
    }

    return(
        <section className="result">
            <div className="row">
                <div className="container">
                    <div className="col-12">
                        <div className="intro__content">
                            <div className="heading__center">
                                <Heading
                                    text={result.text}
                                />
                            </div>

                            <p>{result.description}</p>
                        </div>


                        <div className="intro__content">
                            <div className="heading__center">
                                <Heading
                                    text="Questions"
                                />
                            </div>

                        <Card
                            title={currentQuestion.number}
                            text={currentQuestion.text}
                        />
                            
                        </div>
                    </div>
                </div>

            </div>


            <table className="table" cellSpacing="0">
            <colgroup span="2"></colgroup>
            <colgroup span="12" class="inbound"></colgroup>
            <colgroup span="3" class="outbound"></colgroup>  
                {displayth1()}
            </table>    
        </section>
    )
}

export default Result;