class Parent extends React.Component {
    constructor(props){
      /*   Intialization,
       bind Method */
        super(props)
        this.state = {
            text : "mounting Phase",
            show: true
        }
        console.log('Parent constructor executed');
    }
    static getDerivedStateFromProps(props,state){
       /*  returns new state */
        console.log(' getDerivedStateFromProps executed');
        return state
    }
    render(){
      /*   return jsx,
      noside effect,
      shouldn't update state */
        console.log('parent render executed');
        return <div> <p>{this.state.text}</p>
     {/*    //update */}
        <button onClick={()=>{this.updateText('updating phase')}}>Update
        </button>
        {this.state.show ?<Child/>: null}
        </div>

    }
    updateText(text){
        this.setState({
            text: text,
            show: false
            
        })
    }
    shouldComponentUpdate(){
        console.log('Parent  shouldComponentUpdate executed');
        return true

    }
    getSnapshotBeforeUpdate(){
        console.log('Parent getSnapshotBeforeUpda execute');
        return 'scroling position'
    }
    componentDidUpdate(prevprops,preState,snapshot){
        console.log('parent  componentDidUpdate executed ');
        console.log(prevprops);
        console.log(preState);
        console.log(snapshot);
    }
    componentWillUnmount(){
        console.log('parent   componentwillUnmount executed');
    }
    componentDidMount(){
         /*    1.Used to make side effect if.e,making api calls,interacting with Dom
        2.used to update the state */
        console.log('parent  componentDidMount executed');
    }
}
class Child extends  React.Component{
    render(){
        return <div>Child Component</div>

    }
    componentWillUnmount(){
        console.log('Child componentwillUnmount executed');
    }
}
ReactDOM.render(<Parent/>,document.getElementById('container')) 