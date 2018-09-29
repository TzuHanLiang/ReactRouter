import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component{
	renderField(field){
		return(
			<div className='form-group'>
				<label>{field.label}</label>
				<input 
					className='form-control'
					type='text'
					{...field.input}
				/>
			</div>
		);

	}
	onSubmit(values){
		// console.log('values:', values); //return an object
		this.props.createPost(values, ()=>{
			this.props.history.push('/');
		});


	}
	render(){
		const { handleSubmit } = this.props;
		return(
			
			<form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
				<Field
					label='Title' 
					name='title'
					component={this.renderField}
				/>
				<Field
					label='Categories'
					name='categories'
					component={this.renderField}
				/>
				<Field
					label='Post Content'
					name='content'
					component={this.renderField}
				/>
				<button className='btn btn-primary' type='submit'>Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(
	connect(null, { createPost })(PostsNew)
);


