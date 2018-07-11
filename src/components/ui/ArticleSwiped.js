import React, { Component } from 'react'
import ArticleContent from './ArticleContent'
import wrapperSwipe from './wrapperSwipe'

class ArticleSwiped extends Component {

    render() {
        return(
            <ArticleContent {...this.props} />
        )
    }
}

export default wrapperSwipe('onPrev', 'onNext')(ArticleSwiped)