import { PropTypes } from 'prop-types'
import { Component } from 'react'

import PreviewsItem from './PreviewsItem'

class PreviewsGrid extends Component {

	constructor(props) {
		super()
		this.state = { 
			posts: props.posts
		}
	}

	componentDidMount() {
		let grid = this.refs.grid
			
		this.msnry = new Masonry( grid, {
			itemSelector: '.PreviewsItem',
			columnWidth: '.PreviewsItem',
			gutter: 10,
			isFitWidth: true
		})
		this._msnryLayout()
	}

	componentWillReceiveProps(nextProps) {
		// if (nextProps.screenWidth !== this.props.screenWidth) {
		// 	this.setState({ screenWidth: nextProps.screenWidth })
		// }
		if (nextProps.posts !== this.props.posts) {
			this.setState({ posts: nextProps.posts })
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.posts !== this.state.posts) {
			this.msnry.reloadItems()
			this._msnryLayout()
		}
	}
	
	render() {
		return (
			<div className='PreviewsGrid' ref='grid'>
			{
				this.state.posts.map((post, i) => 
					<PreviewsItem 
						key={i}
						post={ post } 
						timeoutMs={ 100*i }
						{...this.props}
					/>						
				)
			}
			</div>
		)
	}

	_msnryLayout() {
		let grid = this.refs.grid

		imagesLoaded( grid, () => {
			this.msnry.layout()
		})
	}
}

// 	_msnryLayout() {
// 		let grid = this.refs.grid
			
// 		imagesLoaded( grid, () => {
// 			this.msnry = new Masonry( grid, {
// 				itemSelector: '.PreviewsItem',
// 				gutter: 10,
// 				isFitWidth: true
// 			})
// 			this.msnry.layout()
// 		})
// 	}
// }

PreviewsGrid.propTypes = {
	posts: PropTypes.array,
	screenWidth: PropTypes.number
    // buyItem: PropTypes.func, 
    // openItem: PropTypes.func
}

export default PreviewsGrid