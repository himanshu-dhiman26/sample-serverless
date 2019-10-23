import Layout from '../../components/basicLayout';
import { Component } from 'react';
import Router from 'next/router'
import axios from 'axios';

class BlogForm extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		title: '',
  		content: ''
  	};
  	this.submitForm = this.submitForm.bind(this);
  	this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  submitForm(event) {
    	event.preventDefault();
	  	
	  	let payload = {
	  		"Item": this.state
	  	};

	  	axios.post(
	  		'https://4vtblvzdme.execute-api.ap-south-1.amazonaws.com/dev/blogs',
	  		 payload,
	  		 {headers: {"app_user_id":"test", "app_user_name": "test"}}
  		).then(response => {
  			Router.push('/');
  		});

  }

  render() {
    return (
    	<Layout>
    		<h1>Create Blog</h1>
	      <form onSubmit={this.submitForm}>
	        <label>
	          Title:
	          <input type="text" value={this.state.title}  onChange={this.handleChange('title')}/>
	        </label>
	        <label>
	          Content:
	          <input type="text" value={this.state.content}  onChange={this.handleChange('content')}/>
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
	    </Layout>
    );
  }
}

export default BlogForm;