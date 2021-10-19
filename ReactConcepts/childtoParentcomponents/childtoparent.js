
function Parent() {
    const getData = (childData) =>{
        console.log(childData);
        
    }
    return (
        <div>
            <Child getData ={getData } />
            {/* <p>getDataFromChild- {getData}</p> it will not print becoz we are not updating the state */}
        </div>
    )
}
function Child(props){
    const str = 'welcome'
    return <div>
    <p>{props.getData(str)}</p>
    </div>

}
ReactDOM.render(<Parent/>,document.getElementById('container'))