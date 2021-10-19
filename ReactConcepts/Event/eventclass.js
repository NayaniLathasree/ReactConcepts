class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.getData = this.getData.bind(this)
        this.greet = this.greet.bind(this)
    }
    render(){
        return <div>
            <h1>Welcome, {this.props.firstName}</h1>
            <button onClick={this.getData.bind(this)}>click</button>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.greet}>Greet</button>
        <button onClick={()=>{this.getName()}}>Get</button>
        <button onClick={()=>{this.getAge('google')}}>GetAge</button>
        </div>
    }
    getAge =()=> {
        console.log(this);
        console.log(this);
    }
    getName(){
        console.log(this);
    }
    greet(){
        console.log(this);
    }
    getData(){
        console.log(this);
        console.log(this.props.firstName);
    }
}
ReactDOM.render(<Welcome firstName='vijay'/> ,document.getElementById('container'))