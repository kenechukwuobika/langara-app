import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Heading from "components/Heading";
import Card from "components/Card";
import Tab from "components/Tab";
import Button from "components/Button";

import education from "data/education";
import employment from "data/employment";
import housing from "data/housing";
import immigration from "data/immigration";
import wellbeing from "data/wellbeing";
import about from "data/about";

const Result = () => {
    let { query } = useParams();
    const { search } = useLocation();
    const filters = ["college", "gender"]
    const results = [education, employment, housing, immigration, wellbeing, about]

    const [ result,  ] = useState(results.find( result => result.slug === query));
    const [ currentQuestion, setCurrentQuestion ] = useState([]);
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);
    const [ filter, setFilter ] = useState(filters[0]);

    useEffect(() => {
        if(!search) {
            return;
        }

        const searchValue = search.toLowerCase().split('=')[1];

        if(search.includes('filter')) {
            setFilter(searchValue)
        }
    }, [search])

    useEffect(() => {
        if(result) {
            setCurrentQuestion(result.questions[currentQuestionIndex])
        }
    }, [result, currentQuestionIndex])

    const displayth1 = () => {
        if(!currentQuestion || currentQuestion.length === 0) {
            return(<></>)
        }
        return currentQuestion["answers"][filter]?.data.map((tr, index) => {
            let className = ""
            if(tr.type === "th1") {
                className = "th1"
            }else if(tr.type === "th2") {
                className = "th2"
            }else {
                className = "td"
            }
            return (
                <tr key={index} className={className}>
                    {tr?.data.map((td, index) => {
                        if(tr.type === "th1") {
                            if(index === 0) {
                                return (<th key={index} colSpan={1}>{td}</th>)
                            }
                            return (<th key={index} colSpan={3}>{td}</th>)
                        }
                        else if(tr.type === "th2") {
                            return (<th key={index} colSpan={tr?.colSpan}>{td}</th>)
                        }else {
                            if(index === 0) {
                                return (<td key={index} colSpan={1}>{td}</td>)
                            }
                            return (<td key={index} colSpan={tr?.colSpan}>{td}</td>)

                        }
                    })}
                </tr>
            )
        })
    }

    const displayColgroups = () => {
        if(!currentQuestion || currentQuestion.length === 0) {
            return(<></>)
        }
        return currentQuestion["answers"][filter]?.colgroups.map((col, index) => {
            return (
                <colgroup key={index} span={col} className="colgroup"></colgroup>
            )
        })
    }

    const nextQuestion = () => {
        if(currentQuestionIndex >= result.questions.length) {
            return;
        }
        setCurrentQuestionIndex(currentQuestionIndex+1)
    }

    const prevQuestion = () => {
        if(currentQuestionIndex <= 0) {
            return;
        }
        setCurrentQuestionIndex(currentQuestionIndex-1)
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
                                    text={`${result.text}`}
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
                            number={currentQuestion.number}
                            text={currentQuestion.text}
                        />

                            <div className="result__tab">
                                <Tab
                                    items={filters}
                                    tabItem={filter}
                                    setTabItem={setFilter}
                                    type="filter"
                                />
                            </div>

                            <div className="result__ctas">
                                    {currentQuestionIndex > 0 &&
                                        <div className="result__prev">
                                            <Button
                                                onClick={prevQuestion}
                                                text="Previous"
                                            />
                                        </div>
                                    }

                                    {currentQuestionIndex < result.questions.length-1 &&
                                        <div className="result__next">
                                            <Button
                                                onClick={nextQuestion}
                                                text="Next"
                                            />
                                        </div>
                                    }

                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>


            <div className="table__container">
                <table className="table" cellSpacing="0">    
                    {displayColgroups()}
                    <tbody>
                        {displayth1()}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Result;