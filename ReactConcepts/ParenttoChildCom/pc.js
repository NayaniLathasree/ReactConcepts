function App(props){
    const data =['Chocolate','Straberry','vanilla','Butterscotch']
    return <div>
        <Home appName ='netflix' userName = {props.looggedUser}/>
        <List list ={data}/>
    </div>
}
function List(props){
    return <div>
        
        {
            props.list.map((value,index)=>{
                return <p key={index}>{value}</p>
            })
        }
    </div>
}

function Home(props){
    return <div>
        <h1>Home {props.appName}</h1>
        <h2>{props.userName}</h2>
    </div>
}
ReactDOM.render(<App looggedUser ='Ajay'/>,document.getElementById('container'))