import React from 'react';
import '../css/Comments.css';

function Comments(props) {
	return (
		<div className='container-comment'>
			<img className='image-comment' src={require(`../images/comment-${props.image}.png`)} alt="image" />
			<div className='container-text-comment'>
				<p className='name-comment'><strong>{props.name}</strong> in {props.country}</p>
				<p className='job-comment'>str{props.job} in <strong>{props.company}</strong></p>
				<p className='text-comment'>"{props.comment}"</p>
			</div>
		</div>
	);
}

export default Comments;