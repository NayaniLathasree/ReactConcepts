function Header({logo,brand}){
    return <h1>Header {logo} {brand}</h1> 
}

function Content(props){
    return <p>Content  {props.username}</p> 
}

function Footer({person}){
    return <h2>Footer {person.firstName}</h2> 
}


ReactDOM.render(<div><Header logo ='carlogo' brand='Volvo' price='230000'/> 
    <Content username='rani'/> 
    <Content/ > 
    <Content/ > 
    <Footer person= {{firstName:'Ajay',lastName:'k'}}/> </div> ,document.getElementById('container'))