import React, { useEffect, useState } from 'react';
import { Typography, Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import Question from './Question';

function QuestionList() {

    const history = useHistory();

    const cardColor = {
        '1': 'red',
        '2': 'yellow',
        '3': 'pink',
        '4': 'green'
    }

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        const response = await fetch('http://localhost:5000/q/');
        const data = await response.json();

        const dataSet = [];
        data.map(question => {
            question.choice = "";
            dataSet.push(question);
        });

        setQuestions(dataSet);
    }

    const handleChoices = (e) => {
        const questionsCopy = questions.slice();

        if (e.target.id === `txt-agree-${e.target.name.substring(1)}`) {
            questionsCopy[e.target.name.substring(1) - 1].choice = 'agree';

        }
        else if (e.target.id === `txt-disagree-${e.target.name.substring(1)}`)
            questionsCopy[e.target.name.substring(1) - 1].choice = 'disagree';

        setQuestions(questionsCopy);
    };

    const submitQuestions = () => {
        history.push({
            pathname: '/report',
            search: '',
            state: { choices: questions }
        });
    }

    const [cardStyle, setCardStyle] = useState({});

    return (
        <div>
            <form action="" onSubmit={submitQuestions}>
                <Typography style={{ padding: 10 }} variant="h6"> Questionnaire </Typography>
                <div className="q-list">

                    {questions.map((question, index) => (
                        <div>
                            <div style={{ 'font-weight': 'bold' }}>
                                {
                                    index == 0 ? 'Extraversion (E) - Introversion (I)' :
                                        index == questions.length / 4 ? 'Sensing (S) - Intuition (N)' :
                                            index == questions.length / 2 ? 'Thinking (T) - Feeling (F)' :
                                                index == questions.length * 3 / 2 ? 'Judging (J) - Perceiving (P)'
                                                    : ''
                                }
                            </div>
                            <Question key={question.question_id} questionList={question} handleChoices={handleChoices} />
                        </div>
                    ))}

                </div>
                <div>
                    <Button type="submit" style={{ marginTop: 16 }} variant="contained" color="primary"> Submit </Button>
                </div>
            </form>
        </div >
    );

}

export default QuestionList;


