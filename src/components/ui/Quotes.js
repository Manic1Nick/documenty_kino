import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Quotes extends Component {

    render() {
        const { posts } = this.props,
            postsWithQuotes = posts.filter(post => post.quote.length > 0),
            post = postsWithQuotes[0]
        
        return(
            <div className='Quotes'>
                <ion-icon name="quote"></ion-icon>

                <div className='quote-text'>
                    {post.quote}
                </div> 

                <button className='quote-link'>
                    <Link to={`/${post.tag}/${post.id}`}>
                        Читати статтю
                    </Link>
                </button>
            </div>
        )
    }
}