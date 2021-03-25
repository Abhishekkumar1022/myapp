import React,{Component} from 'react';
import '../css/styles.css';



class Header extends Component {
    inputChangeHandler(event){
        console.log(event.target.value)
    }
    render(){
        return (
            <header>
                <div className = "logo">Logo</div>
                <input onChange = {(e)=>this.inputChangeHandler(e)} type = "text"></input>
            </header>
        )
    }
}

export default Header;