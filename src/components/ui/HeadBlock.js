import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { LINKS, LINKS_UKR, MAIN_TITLE } from '../../constants'

import DropdownMenu from 'react-dd-menu'

export default class HeadBlock extends Component {

    constructor() {
        super()
        this.state = { isMenuOpen: false }

        this.toggle = this.toggle.bind(this)
        this.close = this.close.bind(this)
    }

    toggle() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
     
    close() {
        this.setState({ isMenuOpen: false })
    }

    renderDropdownLinks() {
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.close,
            toggle: <ion-icon name="menu" onClick={this.toggle}></ion-icon>,
            align: 'right'
        }
        return (
            <DropdownMenu {...menuOptions}>
            {
                this.renderLinks()
            }
            </DropdownMenu>
        )
    }

    renderLinks() {
        const defaultIds = this._getDefaultIds()

        return(
            <ul className="links">
            {
                LINKS.map((link, i) => 
                    this.renderLink(link, defaultIds[link], i) 
                )
            }
            </ul>
        )
    }

    renderLink(tag, id, i) {

        let linkName = `[ ${LINKS_UKR[i]} ]`
        return(
            <li key={i}>
                <Link to={`/${tag}/${id}`}>{ linkName }</Link>
            </li>
        )

    }

    render() {
        const { screenWidth } = this.context,
            defaultIds = this._getDefaultIds()
    
        return(
            <header>
                <div className='site-title'>
                    <Link to={`/all/${defaultIds.all}`}>
                        <h1>{ MAIN_TITLE }</h1>                
                    </Link>
                </div>
                
                <div className="main-nav">
                {
                    screenWidth > 480
                ?
                    this.renderLinks()
                :
                    this.renderDropdownLinks()
                }
                </div>
            </header>
        )
    }

    _getDefaultIds = () => {
        const { posts } = this.context

        // let post = {}, 
        //     defaultIds = { 
        //         'all': posts[posts.length - 1].id 
        //     }
        
        // for (let i = posts.length - 1; i >= 0; i--) {
        //     post = posts[i]
        //     if (!defaultIds[post.tag]) defaultIds[post.tag] = post.id
        // }
    
        let post = {}, 
            defaultIds = { 
                'all': posts[0].id 
            }
            
        for (let i = 0; i < posts.length - 1; i++) {
            post = posts[i]
            if (!defaultIds[post.tag]) defaultIds[post.tag] = post.id
        }
    
        return defaultIds
    }
}

HeadBlock.contextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number
}