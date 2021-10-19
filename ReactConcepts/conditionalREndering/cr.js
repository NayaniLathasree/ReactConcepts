class MyApp extends React.Component {
    state ={
        adminName: 'Girish',
        userName : 'Guru',
        isAdmin : true
    }

render(){
     const {adminName,userName,isAdmin} = this.state
        let renderdata= null 
        if(isAdmin){
            renderdata=<div>
                <h1>{adminName}</h1>
                <div>Home</div>
                <div>Login</div>
            </div>
        }else {
            renderdata =<div>
            <h1>{userName}</h1>
            <div>Login</div>
        </div>
        }
        return(
        <div>
            { renderdata}
            <button onClick ={()=>{this.changeAdminUserView()}}>{isAdmin ?'Click here to see User view':'Click here to see Admin View'}</button>
        </div>)
    
     {/*    {this.state.isAdmin ?  <h1>{this.state.adminName}<div>Home</div> <div>Login</div></h1> :
        <h1>{this.state.userName}<div>Home</div> </h1> } */}

}
changeAdminUserView =()=>{
    this.setState({
        isAdmin: !this.state.isAdmin
    })
}
}
ReactDOM.render(<MyApp />,document.getElementById('container'))