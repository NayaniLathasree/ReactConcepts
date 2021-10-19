const listElement = React.createElement('ul',null,
React.createElement('li',{id:'car'},'Car'),
React.createElement('li',{id:'jeep'},'Jeep'),      //create child Elements in RJS
React.createElement('li',{id:'fruits'},'fruits'))
// console.log(listElement);
// ReactDOM.render(listElement,document.getElementById('containter'))


const mobiles = ['Apple','Redmi','OnePlus','Samsung','Google']

const mobileItems = React.createElement('ul',null,
mobiles.map((mobile,index)=>{  //looping 
    
    return React.createElement('li',{key: mobile + index}, mobile)   
     //when we are looping second parameter should be key it must be unique and in real time projects never pass indexvalue to key 
}))
// console.log(mobileItems);
// ReactDOM.render(mobileItems,document.getElementById('containter'))

//whenever we want multiple elements wrap inside one div  then render that div
const allItems = React.createElement('div',null, listElement, mobileItems)
console.log(allItems);

ReactDOM.render(allItems,document.getElementById('containter'))

