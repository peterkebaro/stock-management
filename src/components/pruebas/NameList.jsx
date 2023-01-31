import React from 'react'
import Person from './Person.jsx'

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Peter',
      skill: 'React'
    },
    {
      id: 2,
      name: 'Bruce',
      skill: 'Angular'
    }
  ]    
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
      <div>{personList}</div>
  )
}

export default NameList