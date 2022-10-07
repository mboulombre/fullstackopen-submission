import React from 'react';
import Content from '../Content';
import Header from '../Header';

const  Course = ({course}) => {

    console.log("course: ", course.parts);
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
            
    </div>
  )
}

export default Course;
