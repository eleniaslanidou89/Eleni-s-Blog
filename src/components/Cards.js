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
              text='Description: An app which is created with Vuejs and Tailwind. The website is fully responsive. Technologies used: Vuejs, Tailwind'
              label='CovidTracker'
              path="https://elenisblog.surge.sh/"
            />
            <CardItem
              src='images/weather-app.PNG'
              text='Description: Weather app in React JS, I used the Open Weather Map API to make calls to a restful api to return the current weather data. The App is fully responsive. Technologies udes: JavaScript, React, API, CSS'
              label='Weather App'
              path='/services'
            />
            <CardItem
              src='images/Bookstore.PNG'
              text='Description: Website that has as a goal, making an end user able to browse within the available books. Technologies used: JavaScript, React, Next.js, Tailwind, API'
              label='Bookstore'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Calculator.PNG'
              text='Description: A calculator app using Vue JS. The App is fully responsive. Technologies used: JavaScript, Vuejs, CSS'
              label='Calculator'
              path='/products'
            />
            <CardItem
              src='images/E-commerce.PNG'
              text='Description: A complete eCommerce website. A fully functional eCommerce application using commerce.js. Technologies used: JavaScript, React, TypeScript'
              label='E-commerce'
              path='/sign-up'
            />
            <CardItem
              src='images/RememberToBuy.PNG'
              text='Description: A To do App which reminds what products should the user buy. Technologies used: JavaScript, React, CSS'
              label='To Do App'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;