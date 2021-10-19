import React, { Component } from 'react'

export class classcomponent extends Component {
    state = {
        isLoggin :false
    }

   
    render() {
        
        return (
            <div>

                {isLoggin ? 'your are login' : 'your are logout'}
            </div>
        )
    }
}

ReactDOM.render(<classcomponent />,document.getElementById('container'))

