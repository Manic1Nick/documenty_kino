import wrapperSwipe from './wrapperSwipe'
import Article from './Article'

const ArticleSwiped = (props) => <Article { ...props } />

export default wrapperSwipe('onPrev', 'onNext')(ArticleSwiped)