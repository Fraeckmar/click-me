import React from 'react'
import ReactDOM from 'react-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    componentDidMount() {

    }

    incrementCount() {
        let counter = this.state.counter
        this.setState({counter: counter+1})
    }

    render(){
        return(
           <div className='d-flex w-100 h-100 min-vh-100 align-items-center'>
                <div className='w-100 text-center'>
                    <h3 className='counter'>{this.state.counter}</h3>
                    <button className='btn btn-light' onClick={this.incrementCount}>Click Me!</button>
                </div>
           </div> 
        )
    }
}

export default Home;

if (document.getElementById('app')) {
    ReactDOM.render(<Home />, document.getElementById('app'));
}