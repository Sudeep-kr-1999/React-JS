import React from 'react'
import Person from './Person';

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana'];
    

    const persons=[
        {
            id:1,
            name:"Bruce",
            age:30,
            skill:"React"
        },

        {
            id:2,
            name:"Clark",
            age:25,
            skill:"Angular"
        },

        {
            id:3,
            name:"Diana",
            age:28,
            skill:"Vue"
        }

    ]
    // const NameList = names.map((name) => <h2>{name}</h2>)

    // note:---------- key is not used by the child Component of that parent component to whom key is being assigned  !    
                    //   basically key prop is reserved by  the React itself only react can use it noone else            
    const personList=persons.map((person)=>(<Person key={person.id} person={person}/>))

    return (
        <div>
            {personList}
            {/* {NameList} */}
            
             {/* {
                names.map((name)=>(<h2>{name}</h2>))
            } */}
            
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList;


// note:-------- Index of the List Element as a key 