import React from 'react'
import ReactDOM from 'react-dom'
import API from '../api/API'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            prevCount: -1,
            intervalID: null,
            textColors: ['text-secondary', 'text-success', 'text-danger', 'text-warning'],
            buttonColors: ['btn-secondary', 'btn-success', 'btn-danger', 'btn-warning'],
            colorIdx: 0,
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    componentDidMount() {

        // Update counts
        setInterval(() => {
            if (this.state.counter !== 0 && this.state.counter !== this.state.prevCount) {
                API.post('counts', {
                    count: this.state.counter
                })
                .then((res) => {
                    this.setState({prevCount: this.state.counter})
                })
            }
        }, 2000)

        // Get previous counts 
        API.get('/counts')
        .then((res) => {
            this.setState({counter: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    incrementCount() {
        this.setState({
            counter: this.state.counter+1,
        })
        this.generateRandNum()
    }

    generateRandNum() {
        const num = Math.floor(Math.random() * 3)
        if (num === this.state.colorIdx) {
            this.generateRandNum()
        } else {
            this.setState({colorIdx: num})
        }
    }

    render(){
        return(
           <div className='d-flex w-100 h-100 min-vh-100 align-items-center'>
                <div className='w-100 text-center'>
                    <h1 className={'counter font-weight-bolder '+this.state.textColors[this.state.colorIdx]} style={{ fontSize: '12rem' }}>{this.state.counter}</h1>
                    <button className={'btn '+this.state.buttonColors[this.state.colorIdx]} onClick={this.incrementCount}>Click Me!</button>
                </div>
           </div> 
        )
    }
}

export default Home;

if (document.getElementById('app')) {
    ReactDOM.render(<Home />, document.getElementById('app'));
}