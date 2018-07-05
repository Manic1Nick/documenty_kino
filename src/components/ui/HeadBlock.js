import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

const LINKS = [ 'names', 'festivals', 'paragraphs', 'live', 'all' ]

export default class HeadBlock extends Component {

    render() {
        const { posts } = this.context
        
        let post = {}, 
            defaultIds = { 
                'all': posts[posts.length - 1].id 
            }
        
        for (let i = posts.length - 1; i >= 0; i--) {
            post = posts[i]
            if (!defaultIds[post.tag]) defaultIds[post.tag] = post.id
        }
    
        return(
            <header>
                <div className='site-title'>
                    <Link to={`/all/${defaultIds.all}`}>
                        <h1>Documenty</h1>                
                    </Link>
                </div>
                
                <div className="main-nav">
                    <ul className="links">
                    {
                        LINKS.map((link, i) => 
                            <li key={i}>
                                <Link to={`/${link}/${defaultIds[link]}`}>[ {link} ]</Link>
                            </li>
                        )
                    }
                    </ul>
                </div>
            </header>
        )
    }
}

HeadBlock.contextTypes = {
    posts: PropTypes.array
}