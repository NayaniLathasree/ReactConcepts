function MyApp(){
    const [person,setPerson] =React.useState({
        firstName : 'Ajay',
        lastName: 'k'
    })
    const updateFirstName =()=>{
       /*  never update state like below while using 
        Rect Hook for objects if you update like below it will not take pervious state
       it will consider only present state that we are updating it will not consider pervious state so 
       we take copy before of the previous steate then we update the state.
        setPerson({
            firstName: 'prakash'

        }) */
        //Always update the state like below
        setPerson({
            ...person,   //copy 
            firstName: 'Prakash'
        })
      
    }
    return <div>
    <p>{person.firstName}</p>
    <p>{person.lastName}</p>
    <button onClick={updateFirstName}>UpdateName</button>
</div>
   
}
ReactDOM.render(<MyApp />,document.getElementById('container'))