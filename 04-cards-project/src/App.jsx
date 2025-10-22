import React from 'react'

import Card from './components/Card.jsx'
import User from './components/User.jsx'

const App = () => {

 const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$85',
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: '$60',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$95',
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Motion Graphics Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$75',
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHI2JLXYQ0StQ1vzNLvULyckAUF1uIUnoxg&s",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Software Engineer - Android",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$70',
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Internship",
    pay: '$40',
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$90',
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 weeks ago",
    post: "Graphics Programmer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: '$80',
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-icon.png",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Creative Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '$65',
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intel.com",
    companyName: "Intel",
    datePosted: "9 weeks ago",
    post: "VLSI Design Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '$88',
    location: "San Jose, USA"
  }
];

console.log(jobOpenings);

  return (
    <div className='parent'>
    {jobOpenings.map(function(elem,idx){
      console.log(idx);

      return <div key={idx}>
      <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} date={elem.datePosted} logo={elem.brandLogo}/>
      </div>
    })}     
    </div>
  )
}

export default App

