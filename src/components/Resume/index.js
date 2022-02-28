import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
       
        </p>
      <h3>Education</h3>
      Suffolk County Community College -
      Computer Science Major 2018 -2020 

      <p>Columbia University Coding Boot Camp June 2021 - Septemeber 2021</p>

      <h3>Work Experience</h3> 
      <p>
        <li>Suffolk County Department of Social Services 2018-2021</li>
        <ul>-	Assist case workers in getting information on clients.</ul>
        <ul>-	Provide support and information to police both local and non-local.</ul>
        <ul>-	Log client data in excel.</ul>
        <ul>-	Produce short summary for the case for both the case worker and county records.</ul>
      </p>


        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
