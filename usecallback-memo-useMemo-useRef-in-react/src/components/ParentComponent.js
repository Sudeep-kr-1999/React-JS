import React,{useState,useCallback} from 'react';
import Count from './Count';
import Button from './Button';
import Title from './Title';


function ParentComponent() {
    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(50000);


    // useCallback():---------- first parameter is the arrow function and the sencond parameter is the dependency list 
    const incrementAge=useCallback(()=>{
        setAge(age+1);
    },[age]);

    const incrementSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary]);

    return (
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSalary}>Incement Salary</Button>
        </div>
    )
}

// export default ParentComponent;
export default React.memo(ParentComponent);


// Note:--------------------------------------------------------- 
// Rendering Age
// Button.js:4 Rendering button -  Increment Age
// Button.js:4 Rendering button -  Incement Salary


// Rendering button -  Increment Age
// Count.js:4 Rendering Salary
// Button.js:4 Rendering button -  Incement Salary

// On clicking increment age the sarray increment sallary also rernder and vice-versa because har render par function dobara create ho raha hai means agr naam same bhi ho fir bhi 
// dono same nhi hai kyuki dono ka reference same nhi hai islye har baar component dekhta hai ki prop change ho gya h (since function hi prop hai) isliye re-render prevent nhi krta h 



// after useCallback:------------------------------------------- 
// Rendering Age
// Button.js:4 Rendering button -  Increment Age

// Rendering Salary
// Button.js:4 Rendering button -  Incement Salary