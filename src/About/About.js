import React from 'react';
import './About.css'


function About() {
  return (
    <div className='About'>
      <h1>About Birthday Alert!</h1>
      <p>Birthday Alert is an app that helps you remember people's birthdays and enables you to create a list of gift ideas. This app solves the problem of forgetting birthdays and allows you to make a list of gift ideas throughout the year so that you are never at a loss when the time comes to buy a gift. Users can enter the name and birthdate of a friend or relative. The users can then create a list of gift ideas for each person on their birthday list.</p>
      <h2>How to:</h2>
      <ol>
        <li>1. From the home page, click "Add Birthday" Or click "Add Birthday" in the Header.</li>
        <li>2. Enter a friend's first name, last name, and select their birthday.</li>
        <li>3. Once you have added someone to your Birthday List, you can add a gift list to their profile.</li>
        <li>4. To view upcoming birtdays, click on "Upcoming B-Days" in the Header. You will see a list of upcoming birthdays and access gift lists.</li>
      </ol>
    </div>
  );
}

export default About;