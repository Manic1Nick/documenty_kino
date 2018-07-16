import { Component } from 'react'
import classNames from 'classnames'

export default class ListPostsItem extends Component {

    constructor() {
        super()
        this.state = { 
            active: false,
            animationIn: false,
            animationOut: false
        }
    }

    componentDidMount() {
		this.activeAnimationIn()
    }
    
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.match.params.tag !== this.props.match.params.tag) {
            this.activeAnimationOut()
            this.activeAnimationIn()
        }
    }

    activeAnimationIn() {
        const { timeout } = this.props

        setTimeout( () => {
            this.setState({ active: true, animationIn: true })
            
            setTimeout(() => {
                this.setState({ animationIn: false })
            }, 800)
        }, timeout)
    }

    activeAnimationOut() {
        const { timeout } = this.props

        setTimeout( () => {
            this.setState({ active: true, animationOut: true })
            
            setTimeout(() => {
                this.setState({ animationOut: false })
            }, 800)
        }, timeout)
    }

    render() {
        const { post, match, openPost } = this.props,
            { active, animationIn, animationOut } = this.state

        let activePost = post.id === parseInt(match.params.id),
            classListItem = classNames(
                { listItem: active }, 
                { activePost }, 
                { fadeInLeft: animationIn },
                { fadeOutRight: animationOut }
            )

        return(
            <li className={ classListItem } 
                onClick={ () => openPost(post.id) }
            >
            {
                activePost ? <ion-icon name="videocam"></ion-icon> : null //return-right
            }
            <span className='post-title-text'>{ post.title }</span>
            </li>
        )
    }
}