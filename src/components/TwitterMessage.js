import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:"",
      remainingChars:0
    };
  }
  handleChange=(e)=>{
    if(e.target.value.length<=this.props.maxChars){
      this.setState(({message:e.target.value,
      remainingChars:e.target.value.length}))
      
    }
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        <span>Remaining chars: {this.props.maxChars-this.state.remainingChars}</span>
        </div>
    );
  }
}
