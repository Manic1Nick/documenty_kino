import React, { Component } from 'react'
import Article from './Article'
import wrapperSwipe from './wrapperSwipe'

class ArticleSwiped extends Component {

    render() {
        return(
            <Article {...this.props} />
        )
    }
}

export default wrapperSwipe('onPrev', 'onNext')(ArticleSwiped)