import React, { Component } from 'react'
import swal from 'sweetalert';

export default class cricket extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           scores:[],
           score:null,
           batsman:"A",
           count:1,
           totalScores:0,
           ball:false,
        }
      }

       
_onBat=()=> {
    var x = Math.floor(Math.random() * 7) 
    console.log(x);
    if(x === 5){
      this._onBat();
    }else{
      this.setState({score:x}) 
    }
    if(x === 1 ||x === 3 ){
      this.setState({batsman:(this.state.batsman==="A")?"B":"A"})
    } 
    console.log(this.state.batsman);
  }
  
  _onBowl=async()=>{
    this._onBat();
    this.state.scores.push(this.state.score);
    console.log(this.state.scores)
    this.setState({count:this.state.count+1})
    console.log(this.state.count);
    var sum=0;
    console.log(sum);
  
    if(this.state.count === 7){
      swal("","Over Change","succes");
      this.setState({batsman:(this.state.batsman==="A")?"B":"A"})
    }
   }
  
    render() {

        if(this.state.count>=14){
            var sum = this.state.scores.reduce(myFunction);
            function myFunction(total, value, index, array) {
              return total + value;
            }
            swal("Vinay",`Game Over and totalScore is: ${sum} `,"succes");
            this.setState({count:0 , scores:[] , score:0})
          }
          
        return (
            <div className="app" style={{
                  textAlign : 'center' ,
                  justifyContent:'center',
                  margin: 100,
                  alignContent:'center',   }}>
                <h1>Batsman {this.state.batsman} <img src="https://img.icons8.com/material/2x/cricketer.png" alt="batsman" /> on strike</h1>
                <h4>scored : {this.state.score}</h4>
                <button onClick={this._onBowl} style={{backgroundColor:'red',borderRadius:50 }}><h1>Bowl</h1></button>
            </div>
        )
    }
}
