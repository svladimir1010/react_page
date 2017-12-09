/*import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	// state = {      
	// 		isOpen: false
	// 	}; 
	
	render() {
		const text = this.props.isOpen ? 'hide comments' : 'show comments'
		return <div>
					<button onClick = { this.props.toggleOpen }>{ text }</button>
					{ this.getBody() }
				</div>
	}
	getBody() {
			const { comments, isOpen } = this.props
		if (!isOpen) return null
		// if (!comments || !comments.length) return <p>No comments yet</p>   добавляем 'commets' 
		// дефолтные свойства массива и убираем проверку на массив ( !comments  )
        if ( !comments.length ) return <p>No comments yet</p>

			return (
				<ul>
					{ comments.map(comment => 
						 <li key = { comment.id }><Comment comment = { comment } /></li>) }
				</ul>
			)
	}
	// toggleOpen = e => this.setState( {
	// 	isOpen: !this.state.isOpen
	// } )
}



export default toggleOpen( CommentList )
*/
/////==================================================================//то же в фанкшин компонент

import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList ({comments = [], isOpen, toggleOpen }) {

		const text = isOpen ? 'hide comments' : 'show comments'
		return (
			    <div>
					<button onClick = { toggleOpen }>{ text }</button>
					{ getBody ({ comments, isOpen }) }
				</div>
		)
	}

	function getBody({ comments, isOpen }) {
			
		if (!isOpen) return null
		
        if ( !comments.length ) return <p>No comments yet</p>

			return (
				<ul>
					{ comments.map(comment => 
						 <li key = { comment.id }><Comment comment = { comment } /></li>) }
				</ul>
			)
	}
	
export default toggleOpen( CommentList )


