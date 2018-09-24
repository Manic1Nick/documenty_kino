import React, { Component } from 'react'
import classNames from 'classnames'

// import SideBlock from './SideBlock'
import ArticleContainer from './ArticleContainer'
import SocialShareButtons from './SocialShareButtons'
import ArrowButton from './ArrowButton'

export default class ArticlePage extends Component {

    shouldComponentUpdate = (nextProps) => {
        return nextProps.posts !== this.props.posts
            || nextProps.activePostIndex !== this.props.activePostIndex
            || nextProps.shifted !== this.props.shifted
    }

    render() {
        const { posts, activePostIndex, shifted, openPost } = this.props,
            activePost = posts[activePostIndex],
            prevPost = this._getPrevPost(),
            nextPost = this._getNextPost()

        if (!activePost) return null

        let classArticles = classNames('ArticlePage', { shifted })

        return(
            <div className={ classArticles }>

                <div className='ArticleBlock'>
                    <div className='blog-nav'>                
                        <SocialShareButtons post={ activePost } />

                        <ArrowButton 
                            name='back'
                            action={ () => openPost(prevPost.id) } 
                            title={ prevPost ? `Назад: ${prevPost.title}` : null }
                            // hidden={ !prevPost }
                        />
                    </div>

                    <ArticleContainer
                        post={ activePost }
                        shifted={ shifted }
                        onPrev={ () => openPost(prevPost.id) } //for mobile scrolling
                        onNext={ () => openPost(nextPost.id) } //for mobile scrolling
                        {...this.props}
                    />
                    
                    <div className='blog-nav'>
                        <ArrowButton 
                            name='forward'
                            action={ () => openPost(nextPost.id) }  
                            title={ nextPost ? `Вперед: ${nextPost.title}` : null }
                            // hidden={ !nextPost }
                        />
                    </div>                
                </div>

                {/* <SideBlock {...this.props} /> */}
            </div>
        )
    }

    _getPrevPost = () => {
        const { posts, activePostIndex } = this.props,
            prevPost = posts[activePostIndex - 1]

        return prevPost || posts[posts.length - 1]
    }

    _getNextPost = () => {
        const { posts, activePostIndex } = this.props,
            nextPost = posts[activePostIndex + 1]

        return nextPost || posts[0]
    }
}