function MyApp(){
    const [name,setName] =React.useState('Ajit')
    const [isAdmin,setIsAdmin] =React.useState(false)
    const UpdateName= ()=>{
        console.log(name);
        console.log(isAdmin);
        setName('Guru')
        setIsAdmin(true)

    }
    return <div>
        <p>{name}</p>
        <button onClick={UpdateName}>UpdateName</button>
    </div>

}
ReactDOM.render(<MyApp/>,document.getElementById('container'))