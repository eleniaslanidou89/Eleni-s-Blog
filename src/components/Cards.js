import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/covidTracker.PNG'
              text='An app which is created with Vuejs and Tailwind. The website is fully responsive.'
              label='Vuejs, Tailwind'
              path='/services'
            />
            <CardItem
              src='images/weather-app.PNG'
              text='Weather app in React JS, I used the Open Weather Map API to make calls to a restful api to return the current weather data. The App is fully responsive.'
              label='JavaScript, React, API, CSS'
              path='/services'
            />
            <CardItem
              src='images/Bookstore.PNG'
              text='Website that has as a goal, making an end user able to browse within the available books.'
              label='JavaScript, React, Next.js, Tailwind, API'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Calculator.PNG'
              text='A calculator app using Vue JS. The App is fully responsive.'
              label='JavaScript, Vuejs, CSS'
              path='/products'
            />
            <CardItem
              src='images/E-commerce.PNG'
              text='A complete eCommerce website. A fully functional eCommerce application using commerce.js.'
              label='JavaScript, React, TypeScript'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
              text='A To do App which reminds what products should the user buy.'
              label='JavaScript, React, CSS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;