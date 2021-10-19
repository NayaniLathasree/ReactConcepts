function MyApp(){
    const [bikes,setBikes] = React.useState(['BMW',"KTM","HarleyDavidson", "Vkrant"])
    const removeKTM =()=>{
        /* while removing any element from the array we have three steps to do 
        1. first find index of that element which you want to remove 
        2. then index should be greater than zero so check condition based on requirement 
        after that update the state  */
        const indexOfKTM = bikes.indexOf('BTM')
        console.log(indexOfKTM);
        if(indexOfKTM >=0){

                bikes.splice(indexOfKTM,1)
                setBikes([...bikes])
        }
    }
    const navigateToGoogle =(event) =>{
        console.log(event);
        event.preventDefault() 
    }
    return <div>
        {/* while updating the state in array we will pass key attribute to identify unique  
        if we don't pass any key attribute means it gives warning  */}
        {bikes.map((bike,index)=>{
            return <p key={index}>{bike}</p>
        })}
        <button onClick={removeKTM}>Remove KTM</button>
        <hr/>
      {/*   if we are accessing like below we need pass argument  if we won't pass it will give undefine */}
        <button onClick={(event)=>{navigateToGoogle(event)}}>click</button> 

        <a href='https://www.google.com'onClick={navigateToGoogle}>click</a>
    </div>
}
ReactDOM.render(<MyApp />,document.getElementById('container'))