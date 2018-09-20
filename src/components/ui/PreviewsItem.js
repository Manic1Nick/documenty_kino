import { Component } from 'react'
import classNames from 'classnames'
import ViewCount from './ViewCount'
import ReactHtmlParser from 'react-html-parser'

export default class PreviewsItem extends Component {

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
    
    // componentDidUpdate = (prevProps) => {
    //     if (prevProps.post !== this.props.post) {
    //         this.setState({ hidden: true })
    //         this.activeAnimateIn()
    //     }
    // }

    activeAnimateIn() {
        const { timeoutMs } = this.props

        setTimeout(() => {
            this.setState({ 
                animateIn: true, 
                hidden: false 
            })
        }, timeoutMs)
        
		// setTimeout(() => {
		// 	this.setState({ animateIn: false })
        // }, timeoutMs + 1000)
    }

    handleSelectItem = (id) => {        
        this.props.openPost(id)
    }

    render() {
        const { post } = this.props,
            { id, title, tag, image, text, date } = post,
            { animateIn, hidden } = this.state

        let styleItem = { 'display': hidden ? 'none' : 'block' },
            classListItem = classNames('PreviewsItem', { fadeIn: animateIn })

        return(
            <div className={ classListItem } 
                onClick={ () => this.handleSelectItem(post.id) }
                style={ styleItem }
            >
                <div className='article-preview-image'>
                    <img src={`${image}`} alt={ title } title={ title } />
                </div>
                <div className='article-preview-text'>
                    <p className='article-preview-title'>
                        <span>{ title }</span>
                        <ViewCount />
                    </p>
                    <div className='article-preview-cutted'>
                        { ReactHtmlParser(text)[0] }
                    </div>
                </div>                    
            </div>
        )
    }

    // _cutText = (text) => {
    //     let cuttedText = text.substring(0, 200),
    //         lastSpaceIndex = cuttedText.lastIndexOf(" ") || 0

    //     return cuttedText.substring(0, lastSpaceIndex) + " ..."
    // }
}