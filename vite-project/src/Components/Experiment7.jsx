import React from 'react'

function Experiment7({students}){
    const studentList = [];

    for(let x in students){
        studentList.push(
            <div key={x} style={{backgroundColor:'#f5f5f5', padding:'5px 10px'}}>
                <h3>{students[x].name}</h3>
                <h3>{students[x].rollno}</h3>
                <h3>{students[x].course}</h3>
            </div>
        );
    }

    return(
        <div style={{display: 'flex', gap:'10px', margin:' 0 auto'}}>
            {studentList}
        </div>
    );
}

export default Experiment7;