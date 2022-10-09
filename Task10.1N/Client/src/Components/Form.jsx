import React, {Component}  from 'react'
import axios from 'axios'
import './Form.css'
// import Buton from './Buton'
// import Input from './Input'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
    axios({
        method:'POST',
        url:"http://localhost:8089",
        data: this.state
      })
      .then(
        (response) => (response.json())
          ).then((response)=> {
        if (response.data.status === 'success') {
          alert("Message Sent.");
          this.resetForm()
        } else if(response.data.status === 'fail') {
          alert("Message failed to send.")
        }
      })
  }

  render() {
    return (
      <div id="subscribe-box">
  <div class="form-holder">
      <form action="/" method="post" onSubmit={this.handleSubmit.bind(this)}>
        <label>
        Sign Up For Daily Insider
          <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
        </label>
        <button type="submit" className="btn btn-lg btn-primary btn-block" >Subscribe</button>
      </form>
    </div>
    </div>
    );
  }
}
export default Form;
