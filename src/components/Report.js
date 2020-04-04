import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function Report() {

    const location = useLocation();

    const [pType, setPType] = useState('');
    const [jobRole, setJobRole] = useState('');

    useEffect(() => {
        console.log('choices', location.state.choices);
        getPType(location.state.choices);
    }, []);


    const checkType = (choiceList, choiceType) => {
        const count = choiceList.filter((obj) => obj.choice === 'agree').length;
        return (count > (choiceList.length / 2)) ? choiceType[0] : choiceType[1];
    }


    const getPType = async (choices) => {


        //Split the choices into personality types

        let choiceCount = choices.length;

        //Questions - Extraversion (E) - Introversion (I)
        //choices.slice(0, choiceCount/4); //first 1/4

        //Questions - Sensing (S) - Intuition (N)
        //choices.slice(choiceCount/4, choiceCount/2); //second 1/4

        //Questions - Thinking (T) - Feeling (F)
        //choices.slice(choiceCount/2, choiceCount*3/4); //third 1/4

        //Questions - Judging (J) - Perceiving (P)
        //choices.slice(choiceCount*3/4, choiceCount); //forth 1/4

        const pType = checkType(choices.slice(0, choiceCount / 4), 'EI')
            + checkType(choices.slice(choiceCount / 4, choiceCount / 2), 'SN')
            + checkType(choices.slice(choiceCount / 2, choiceCount * 3 / 4), 'TF')
            + checkType(choices.slice(choiceCount * 3 / 4, choiceCount), 'JP');

        const response = await fetch(`http://localhost:5000/p/${pType}`);
        const data = await response.json();

        let pTypeDesc = '';
        if (data.length > 0)
            pTypeDesc = data[0].personality_type_desc;

        setPType(pType + ' - ' + pTypeDesc);
        setJobRole(data[0].job_role);
    }


    return (
        <div className="container">
            <h3>User Report</h3>
            <div className="card">
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <h5>Personality Type</h5>
                            <h6>{pType}</h6>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-md-12">
                            <h5>Job Roles</h5>
                            <h6>{jobRole}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report;