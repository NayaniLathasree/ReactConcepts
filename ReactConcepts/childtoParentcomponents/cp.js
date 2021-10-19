class Parent extends React.Component {
state ={
    
    text: ''
}
render(){
    return <div>
        <h1>{this.state.text}</h1>
        <Child variable = {this.getDataFromChild.bind(this)}/>
    </div>
}
getDataFromChild(childData){
    console.log(childData)
    //we can't use like below  bcoz it executes before updating data & setSate  is asyn 
  /*  /* A */ this.setState({
        text : childData
    })
    console.log('state text',this.state);  //it executes before updating data */

    //use below way to update the state always
    this.setState({
        text : childData
    },()=>{
        console.log('sate text',this.state);
    })


} 


}
function Child(props){
    const str ='Welcome'
    return <div>
        <button onClick={()=>{props.variable (str)}}>Send data to Parent</button>
    </div>
}
ReactDOM.render(<Parent/>,document.getElementById('container'))