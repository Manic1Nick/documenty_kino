import { PropTypes } from 'prop-types'
import { Component } from 'react'

import PreviewsItem from './PreviewsItem'

class PreviewsGrid extends Component {

	// constructor(props) {
	// 	super()
	// 	this.state = { screenSize: props.screenSize }
	// }

	componentDidMount() {
		this._msnryLayout()
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.screenSize !== this.props.screenSize) {
			// this.setState({ screenSize: nextProps.screenSize })
			this._msnryLayout()
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.items !== this.props.items) {
			this._msnryLayout()
		}
	}
	
	render() {
		// const {
		// 	items=[],
		// 	buyItem=f=>f,
		// 	openItem=f=>f
		// } = this.props
	
		return (
			<div className='PreviewsGrid' ref='grid'>
			{
				this.props.items.map((post, i) => 
					<PreviewsItem 
						key={i}
						post={ post } 
                        timeoutMs={ 100*i }
						// buyItem={() => buyItem(item) }
						// openItem={() => openItem(item) }
					/>						
				)
			}
			</div>
		)
	}

	_msnryLayout() {
		let grid = this.refs.grid	
			
		imagesLoaded( grid, () => {
			this.msnry = new Masonry( grid, {
				itemSelector: '.PreviewsItem',
				columnWidth: 150,
				gutter: 10,
				isFitWidth: true
			})
			this.msnry.layout()
		})
	}
}

PreviewsGrid.propTypes = {
	items: PropTypes.array,
	screenSize: PropTypes.string
    // buyItem: PropTypes.func, 
    // openItem: PropTypes.func
}

export default PreviewsGrid