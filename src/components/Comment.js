import React from 'react'
import PropTypes from 'prop-types'

export default function Comment ({ comment }) {
	return (
		<div>
			<p>{ comment.text } <b>by { comment.user }</b></p>
		</div>
		) 
}

Comment.propTypes = {                  // использование 'PropTypes'  With  function
	comment: PropTypes.shape({         // проверка по типам
		text: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired
	}).isRequired
}  