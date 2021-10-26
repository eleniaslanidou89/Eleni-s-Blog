// import React from 'react'
// import './Cards.css'
// import CardItem from './CardItem'
// import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl'

// function Cards() {
//   return (
//     <div className="cards">
//       <h1>Check out these projects!</h1>
//       <div className="cards__container">
//             {/*Project #1*/}
//             <Card
//               shadow={5}
//               style={{
//                 minWidth: '500',
//                 marginTop: '80px',
//                 marginLeft: '50px',
//                 padding: '50px',
//                 fontFamily: 'Segoe UI',
//               }}
//             >
//               <CardTitle
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   fontWeight: 'bold',
//                   paddingRight: '20px',
//                   paddingLeft: '20px',
//                 }}
//               >
//                 Covid19 Tracker
//               </CardTitle>
//               <img
//                 src="/images/covidTracker.PNG"
//                 alt="Covid19"
//                 className="project-image"
//               />
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Description:
//               </CardText>
//               An app which is created with Vuejs and Tailwind. The website is
//               fully responsive.
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Technologies used:
//               </CardText>
//               Vuejs, Tailwind
//               <CardActions>
//                 {/*link for github*/}
//                 <a
//                   href="https://github.com/eleniaslanidou89/Covid19Tracker"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     GitHub{' '}
//                     <i className="fab fa-github-square" aria-hidden="true" />
//                   </Button>
//                 </a>
//                 {/*link for the app*/}
//                 <a
//                   href="https://vuejscovid.surge.sh/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     LINK <i class="fas fa-link" aria-hidden="true" />
//                   </Button>
//                 </a>
//               </CardActions>
//             </Card>
//             {/*Project #3*/}
//             <Card
//               shadow={5}
//               style={{
//                 minWidth: '500',
//                 marginTop: '80px',
//                 marginLeft: '50px',
//                 padding: '50px',
//                 fontFamily: 'Segoe UI',
//               }}
//             >
//               <CardTitle
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   fontWeight: 'bold',
//                   paddingRight: '40px',
//                   paddingLeft: '40px',
//                 }}
//               >
//                 Weather App
//               </CardTitle>
//               <img
//                 src="/images/weather-app.PNG"
//                 alt="WeatherApp"
//                 className="project-image"
//               />
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Description:
//               </CardText>
//               Weather app in React JS, I used the Open Weather Map API to make
//               calls to a restful api to return the current weather data. The App
//               is fully responsive.
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Technologies used:
//               </CardText>
//               JavaScript, React, API, CSS
//               <CardActions>
//                 {/*link for github*/}
//                 <a
//                   href="https://github.com/eleniaslanidou89/Weather-App"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     GitHub{' '}
//                     <i className="fab fa-github-square" aria-hidden="true" />
//                   </Button>
//                 </a>
//                 {/*link for the app*/}
//                 <a
//                   href="http://weatherappbyeleni.surge.sh/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     LINK <i class="fas fa-link" aria-hidden="true" />
//                   </Button>
//                 </a>
//               </CardActions>
//             </Card>

//             {/*Project #4*/}
//             <Card
//               shadow={5}
//               style={{
//                 minWidth: '500',
//                 marginTop: '80px',
//                 marginLeft: '50px',
//                 padding: '50px',
//                 fontFamily: 'Segoe UI',
//               }}
//             >
//               <CardTitle
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   fontWeight: 'bold',
//                   paddingRight: '40px',
//                   paddingLeft: '60px',
//                 }}
//               >
//                 Bookstore
//               </CardTitle>
//               <img
//                 src="/images/Bookstore.PNG"
//                 alt="Bookstore"
//                 className="project-image"
//               />
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Description:
//               </CardText>
//               Website that has as a goal, making an end user able to browse
//               within the available books.
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Technologies used:
//               </CardText>
//               JavaScript, React, Next.js, Tailwind, API.
//               <CardActions>
//                 {/*link for github*/}
//                 <a
//                   href="https://github.com/eleniaslanidou89/e-books"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     GitHub{' '}
//                     <i className="fab fa-github-square" aria-hidden="true" />
//                   </Button>
//                 </a>
//                 {/*link for the website*/}
//                 <a
//                   href="http://bookstore-eleni.herokuapp.com/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     LINK <i class="fas fa-link" aria-hidden="true" />
//                   </Button>
//                 </a>
//               </CardActions>
//             </Card>

//             {/*Project #5*/}
//             <Card
//               shadow={5}
//               style={{
//                 minWidth: '500',
//                 marginTop: '80px',
//                 marginLeft: '50px',
//                 padding: '50px',
//                 fontFamily: 'Segoe UI',
//               }}
//             >
//               <CardTitle
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   fontWeight: 'bold',
//                   paddingRight: '40px',
//                   paddingLeft: '60px',
//                 }}
//               >
//                 Calculator
//               </CardTitle>
//               <img
//                 src="/images/Calculator.PNG"
//                 alt="calculator"
//                 className="project-image"
//               />
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Description:
//               </CardText>
//               A calculator app using Vue JS. The App is fully responsive.
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Technologies used:
//               </CardText>
//               JavaScript, Vuejs, CSS
//               <CardActions>
//                 {/*link for github*/}
//                 <a
//                   href="https://github.com/eleniaslanidou89/Vue.js_project"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     GitHub{' '}
//                     <i className="fab fa-github-square" aria-hidden="true" />
//                   </Button>
//                 </a>
//                 {/*link for the app*/}
//                 <a
//                   href="https://calculatorvuejs.surge.sh/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     LINK <i class="fas fa-link" aria-hidden="true" />
//                   </Button>
//                 </a>
//               </CardActions>
//             </Card>

//             {/*Project #6*/}
//             <Card
//               shadow={5}
//               style={{
//                 minWidth: '500',
//                 marginTop: '80px',
//                 marginLeft: '50px',
//                 padding: '50px',
//                 fontFamily: 'Segoe UI',
//               }}
//             >
//               <CardTitle
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   fontWeight: 'bold',
//                   paddingRight: '40px',
//                   paddingLeft: '40px',
//                 }}
//               >
//                 E-Commerce
//               </CardTitle>
//               <img
//                 src="/images/E-commerce.PNG"
//                 alt="commerce"
//                 className="project-image"
//               />
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Description:
//               </CardText>
//               A complete eCommerce website. A fully functional eCommerce
//               application using commerce.js.
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Technologies used:
//               </CardText>
//               JavaScript, React, TypeScript
//               <CardActions>
//                 {/*link for github*/}
//                 <a
//                   href="https://github.com/eleniaslanidou89/E-Commerce"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     GitHub{' '}
//                     <i className="fab fa-github-square" aria-hidden="true" />
//                   </Button>
//                 </a>
//                 {/*link for the website*/}
//                 <a
//                   href="https://commerce.surge.sh/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     LINK <i class="fas fa-link" aria-hidden="true" />
//                   </Button>
//                 </a>
//               </CardActions>
//             </Card>

//             {/*Project #7*/}
//             <Card
//               shadow={5}
//               style={{
//                 minWidth: '500',
//                 marginTop: '80px',
//                 marginLeft: '50px',
//                 padding: '50px',
//                 fontFamily: 'Segoe UI',
//               }}
//             >
//               <CardTitle
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   fontWeight: 'bold',
//                   paddingRight: '10px',
//                   paddingLeft: '20px',
//                 }}
//               >
//                 Remember To Buy
//               </CardTitle>
//               <img
//                 src="/images/RememberToBuy.PNG"
//                 alt="ToDoList"
//                 className="project-image"
//               />
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Description:
//               </CardText>
//               A To do App which reminds what products should the user buy.
//               <CardText
//                 style={{
//                   fontSize: '20px',
//                   fontFamily: 'Segoe UI',
//                   paddingLeft: '5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Technologies used:
//               </CardText>
//               JavaScript, React, CSS
//               <CardActions>
//                 {/*link for github*/}
//                 <a
//                   href="https://github.com/eleniaslanidou89/Remember_To_Buy"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     GitHub{' '}
//                     <i className="fab fa-github-square" aria-hidden="true" />
//                   </Button>
//                 </a>
//                 {/*link for the app*/}
//                 <a
//                   href="https://remembertodo.surge.sh/"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   <Button colored>
//                     LINK <i class="fas fa-link" aria-hidden="true" />
//                   </Button>
//                 </a>
//               </CardActions>
//             </Card>
//         </div>
//       </div>
//   )
// }

// export default Cards
