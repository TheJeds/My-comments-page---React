import React from 'react';
import '../css/Comments.css';

function Comments() {
	return (
		<div className='container-comment'>
			<img className='image-comment' src={require('../images/comment-emma.png')} alt='Image Emma' />
			<div className='container-text-comment'>
				<p className='name-comment'>Emma Bostian in Sweden</p>
				<p className='job-comment'>Software Engineer at Spotify</p>
				<p className='text-comment'>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
			</div>
		</div>
	);
}

export default Comments;