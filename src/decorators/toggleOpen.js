import React, { Component as ReactComponent } from 'react'

export default ( OriginalComponent ) => class WrappedComponent extends ReactComponent {
	state = {
		isOpen: false
	}
	render() {
		return < OriginalComponent { ...this.props } {...this.state} toggleOpen = { this.toggleOpen } />
	}

toggleOpen = (e) => {
		e && e.preventDefault && e.preventDefault()
		this.setState( {
			isOpen: !this.state.isOpen
		} )
	}

}









 


// =========================================

//return < OriginalComponent { ...this.props } isOpen = {this.state.isOpen} toggleOpen = { this.toggleOpen } />

/*const func = ( ...args ) => {

	console.log("...args", ...args);
	return originalFunc( ...args )
}*/