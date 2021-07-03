import React,{Component} from 'react'

class Footer extends Component{
    NewFunction(){
        alert("Class Button Clicked")
    }
    render() {
        return <div>
                 <h2> Hello React js and bootstrap</h2>
            <button onClick={this.NewFunction} className="btn btn-warning">classButton</button>
        </div>
    }
}
export default Footer