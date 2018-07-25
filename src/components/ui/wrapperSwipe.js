import React, { Component } from 'react'
import Swipe from 'react-easy-swipe'

export default (funcPrev, funcNext) => (SwipingComponent) => {

    return class wrapperSwipe extends Component {

        constructor() {
            super()
            this.state = { start: 0, end: 0 }
        }

        swipeMove(position) {
            this.setState({ end: position.x })
        }

        swipeStart() {
            this.setState({ start: 0, end: 0 })
        }

        swipeEnd() {
            const onPrev = this.props[funcPrev],
                onNext = this.props[funcNext],
                { start, end } = this.state,
                movingPx = end - start

            if (movingPx > 80) onPrev()
            else if (movingPx < -80) onNext()
        }

        render() {        
            return(
                <Swipe
                    onSwipeStart={ this.swipeStart.bind(this) }
                    onSwipeEnd={ this.swipeEnd.bind(this) }
                    onSwipeMove={ this.swipeMove.bind(this) }
                >
                    <SwipingComponent {...this.props} />
                </Swipe>
            )
        }
    }
}