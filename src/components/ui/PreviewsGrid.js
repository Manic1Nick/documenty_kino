import { PropTypes } from 'prop-types'
import { Component } from 'react'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'

import PreviewsItem from './PreviewsItem'

class PreviewsGrid extends Component {

	componentDidMount() {
		let grid = this.refs.grid
		
		imagesLoaded( grid, () => {
			this.msnry = new Masonry( grid, {
				itemSelector: '.PreviewsItem',
				gutter: 10,
				isFitWidth: true
			})
		})
	}

	componentDidUpdate(prevProps, prevState) {
		if (!prevProps.posts .length
			||prevProps.posts !== this.props.posts
			|| prevProps.screenWidth !== this.props.screenWidth) {
			
			this._msnryLayout()
		}
	}

	componentWillUnmount = () => {
		if (this.msnry) this.msnry.destroy()
	}
	
	render() {
		const { posts } = this.props 

		return (
			<div className='PreviewsGrid' ref='grid'>
			{
				posts.map((post, i) => 
					<PreviewsItem 
						key={i}
						post={ post }
						{...this.props}
					/>						
				)
			}
			</div>
		)
	}

	_msnryLayout() {
		let grid = this.refs.grid

		this.msnry.reloadItems()

		imagesLoaded( grid, () => {
			this.msnry.layout()
		})
	}
}



PreviewsGrid.propTypes = {
	posts: PropTypes.array,
	screenWidth: PropTypes.number
    // buyItem: PropTypes.func, 
    // openItem: PropTypes.func
}

export default PreviewsGrid