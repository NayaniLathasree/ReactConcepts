class Greet extends React.Component{
    state ={
        firstName : 'Ajay'
    }
    /* constructor(props){
        super(props)
    } */
    render(){
        return <div>
            <h1>{this.state.firstName}</h1>
            <button onClick= {()=>{this.changeName()}}>change Name</button>
        </div>
    }
    changeName(){
         /*    never ever mutate the state like below
            this.state.firstName ='Vijay' */
           
            this.setState({
                firstName :'Vijay'
            })
    }
    
}
ReactDOM.render(<Greet/>, document.getElementById('container'))