import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

const params = useParams()
console.log(params.courseid);


  return (
    <div>
      <h1> {params.courseid} Course Details Page</h1>
    </div>
  )
}

export default CourseDetail
