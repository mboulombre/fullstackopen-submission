import React from 'react';
import Content from '../Content';
import Header from '../Header';

const  Course = ({course}) => {

    let valeurInitiale = 0;
    const total = course && course.parts.reduce((accum, courantValue) => accum + courantValue.exercises, valeurInitiale);

        // console.log("total: ", total);

  return (
    <div>
            <Header  title={course.name} />
            {
              course &&  course.parts.map((data) => {
                    return(
                        <Content key={data.id}   exo={data.exercises}  content={data.name}/>
                    )
                })
            }
            <p>
                <strong> { ` total of ${total ? total  : 0} exercises`} </strong>
            </p>
    </div>
  )
}

export default Course;
