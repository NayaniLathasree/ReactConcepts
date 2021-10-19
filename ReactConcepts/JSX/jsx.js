// const element = <h1 id="demo">Welocome to ReactJS</h1>
// ReactDOM.render( element ,document.getElementById('containter'))

const mobiles =['honor','Samsung','Xiaomi','Iphone']
const items = <ul>
    {mobiles.map((mobile,index)=>{
        return <li key = {index} >{mobile}</li>
    }) }
</ul>
// ReactDOM.render(items ,document.getElementById('containter'))

const userName = 'Latha'
const element = <h1 id="demo">Welocome {userName}</h1>
ReactDOM.render(<div> {items} {element}</div> ,document.getElementById('containter'))


