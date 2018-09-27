import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		_.map(this.props.posts, post => {
			return (
				<li>{posts.title}</li>
			)
		});
	}

	render(){
		return(
			<div>
				<h3>Post</h3>
				<ul>
					{this.renderPosts()}
				</ul>

			</div>
		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);