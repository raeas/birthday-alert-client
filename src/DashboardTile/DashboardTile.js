// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import AppContext from '../AppContext';
// import './DashboardTile.css';
// import moment from 'moment';



// class DashboardTile extends Component {
//   static contextType = AppContext

//   constructor (props) {
//     super(props)
//     this.state = {
//       first_name: '',
//       last_name: '',
//       birthday: '',
//       age: ''
//     };
//     console.log('add-person-props ', this.props)
//   }

//   render() {
//     const currentYear = moment().year()
//     console.log(currentYear)
//     const pastBdays = this.context.people.map(person => person.birthday)
//     // const pastBday = this.context.people[0].birthday
//     const pastBdayDate = moment(pastBdays).date()
//     const pastBdayMonth = moment(pastBdays).month()
//     // const pastBday2 = moment(pastBday).format('YYYY MM DD')
//     console.log(pastBdays)
//     console.log(pastBdayDate)
//     console.log(pastBdayMonth + 1)
//     const currentBday = moment(pastBdayMonth + 1).month('MM') + '/' + moment(pastBdayDate).date('DD') + '/' + moment(currentYear).year('YYYY')
//     console.log(currentBday)
//     // console.log(this.context.people[0].birthday.moment().format('MM'))
//     // const presentBday = pastBday.year(moment().format('YYYY'))
//     // console.log(presentBday)
//     const dobs = new Date(this.context.people.map(person => moment(person.birthday).))
//     console.log(dobs)
//     return (
//       <div className='DashboardTile'>
//         {
//           this.context.people.map(person => (
//               <li key={person.id}>
//                 <p className='DashboardItem'>{person.first_name} {person.last_name}</p>
//                 <p className='DashboardItem'>{person.birthday}</p>
//               </li>
//           ))
//         }
//       </div>
//     );
//   }
// }


// export default DashboardTile;