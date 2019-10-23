import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

var customers=[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'서지원',
    'birth':'932104',
    'gender':'남자',
    'job':'취준생',
   
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'앙꼬',
    'birth':'981111',
    'gender':'여자',
    'job':'강아지',
     
    },
    {
      'id':3,
      'image':'https://placeimg.com/64/64/3',
      'name':'로다',
      'birth':'971214',
      'gender':'여자',
      'job':'학생',
       
      },

]
function App() {
  return (
    <div>
      {
      customers.map(c=>{

        return (

          <Customer 
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            birth={c.birth}
            gender={c.gender}
            job={c.job}
          ></Customer>
        )
        
      })
      }
    </div>
  );
}

export default App;
