class Header extends React.Component {
 render(){
     return <h1>Header</h1>
 }
}
class Content extends React.Component {
    render(){
        return <p>Content {this.props.firstName} {this.props.lastName}  </p>
    }
   }

   class Footer extends React.Component {
    render(){
        return <h2>Footer</h2>
    }
   }
   ReactDOM.render(<div><Header/> 
   <Content firstName ='Latha'  lastName='sree'/> 
   <Content/ > 
   <Content/ > 
   <Footer/> </div> ,document.getElementById('container'))
