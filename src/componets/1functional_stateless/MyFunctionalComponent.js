import {useState} from "react";

function MyFunctionalComponent() {
    //JS let or const we cant update in function component , solution : create useState
    let name = "hariom"
    const age = 32

    const [name2, setName2]= useState('chandan');

    function clickFun() {
        //it will update the value but it will not render the UI so on UI we can see old value
        name = "omp"
        console.log(age)
    }

    function clickFun2() {
        //it will update the value but it will not render the UI so on UI we can see old value
        setName2('new name')
        console.log(name2)//it will take time to reflect value here, coz of react scheduling
    }

    return (
        <div className="MyFunctionalComponent">
            <br/>
            <h1> Hello World :) MyFunctionalComponent</h1>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
            <h2>Name2 : {name2}</h2>
            <button onClick={clickFun}>Click me to update name</button>
            <button onClick={clickFun2}>Click me to update name2</button>
        </div>
    );
}

export default MyFunctionalComponent;
