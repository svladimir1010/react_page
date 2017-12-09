import React, { Component } from "react";
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'



 class Article extends Component {

	static propTypes = {

		article: PropTypes.shape({
			id: PropTypes.string.isRequired,   
			title: PropTypes.string.isRequired,
			text: PropTypes.string  
		}).isRequired  
	}

	/*constructor(props) {
		super(props);
		this.state = {
			isOpen: true
		}; 
	}*/

	render() {
		const { article,  isOpen, toggleOpen} = this.props;
		//const { isOpen } = this.state
		return (
			<div>
				<h3>{ article.title }</h3> 
						<button onClick={ toggleOpen }>
								{ !isOpen ? "ОТКРЫТЬ" : "ЗАКРЫТЬ" }
						</button>
				{ this.getBody() }
			</div>
		)
	}

	getBody() {
		const { article, isOpen } = this.props
		if (!isOpen) return null
			return <section>
				       { article.text }
				       < CommentList comments = { article.comments } />
				  </section>							
	}


	/*toggleOpen = (e) => {
		e.preventDefault()
		this.setState( {
			isOpen: !this.state.isOpen
		} )
	};*/
}

export default toggleOpen( Article )




// export default function Article(props) {
// 	const { article } = props;
// 	return (
// 		<div>
// 			<h3>{article.title}</h3>
// 			<section>{article.text}</section>
// 		</div>
// 	);
// }
