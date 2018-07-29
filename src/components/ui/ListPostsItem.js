import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    constructor() {
        super()
        this.state = { 
            animateIn: false,
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
            { animateIn, hidden } = this.state

        let isActivePost = post.id === parseInt(match.params.id),
            styleItem = { 'display': hidden ? 'none' : 'block' },
            classListItem = classNames(
                'listItem', 
                { active: isActivePost }, 
                { fadeInLeft: animateIn }
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