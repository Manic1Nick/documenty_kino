import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    constructor() {
        super()
        this.state = { 
            animateIn: false,
            animateSelect: false,
            hidden: true 
        }
    }

    componentDidMount() {
		this.activeAnimateIn()
    }
    
    componentDidUpdate = (prevProps) => {
        if (prevProps.post !== this.props.post) {
            this.setState({ hidden: true })
            this.activeAnimateIn()
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.post.id === parseInt(nextProps.match.params.id)) {
            this.activeAnimateSelect()
        }
    }

    activeAnimateSelect() {
        this.setState({ animateSelect: true })
        
		setTimeout(() => {
			this.setState({ animateSelect: false })
        }, 1000)
    }

    activeAnimateIn() {
        const { timeoutMs } = this.props

        setTimeout(() => {
            this.setState({ 
                animateIn: true, 
                hidden: false 
            })
        }, timeoutMs)
        
		setTimeout(() => {
			this.setState({ animateIn: false })
        }, timeoutMs + 1000)
    }

    handleSelectItem = (id) => {
        const { openPost, hideSideBar } = this.props
        
        openPost(id)
        if (hideSideBar) hideSideBar()
    }

    render() {
        const { post, match } = this.props,
            { animateIn, animateSelect, hidden } = this.state

        let isActivePost = post.id === parseInt(match.params.id),
            styleItem = { 'display': hidden ? 'none' : 'block' },
            classListItem = classNames(
                'listItem', 
                { active: isActivePost }, 
                { fadeInLeft: animateIn },
                { flipInX: animateSelect }
            )

        return(
            <div className={ classListItem } 
                onClick={ () => this.handleSelectItem(post.id) }
                style={ styleItem }
            >
            {
                isActivePost ? <ion-icon name="videocam"></ion-icon> : null
            }
            <span className='post-title-text'>{ post.title }</span>
            </div>
        )
    }
}