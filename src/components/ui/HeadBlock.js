import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { LINKS, LINKS_UKR } from '../../constants'

import DropdownMenu from 'react-dd-menu'
import LogoFullImage from '../../assets/images/documenty_logo_full_2.png'
import LogoImage from '../../assets/images/documenty_logo_1.png'

export default class HeadBlock extends Component {

    constructor() {
        super()
        this.state = { 
            activeLinkIndex: 0,
            isMenuOpen: false 
        }

        this.menuToggle = this.menuToggle.bind(this)
        this.menuClose = this.menuClose.bind(this)
    }

    menuToggle() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
     
    menuClose() {
        this.setState({ isMenuOpen: false })
    }

    renderDropdownLinks() {
        const menuOptions = {
            isOpen: this.state.isMenuOpen,
            close: this.menuClose,
            toggle: <ion-icon name='menu' onClick={ this.menuToggle }></ion-icon>,
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
        return(
            <ul className="links">
            {
                LINKS.map((tag, i) => 
                    <li key={i}>
                        <Link to={ this._getLinkByTag(tag) }>
                            {LINKS_UKR[i]}
                        </Link>
                    </li>
                )
            }
            </ul>
        )
    }

    render() {
        const { screenWidth } = this.context
    
        return(
            <header>
                <div className='site-title'>
                    <Link to={ this._getLinkByTag('all') }>
                        {
                            screenWidth > 624
                        ?
                            <img src={LogoFullImage} alt='logo-full' />
                        :
                            <img src={LogoImage} alt='logo-word' />
                        }
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

    _getLinkByTag = (tag) => {
        const { posts } = this.context

        let post = tag === 'all'
            ? posts[0]
            : posts.find(post => post.tag === tag)

        return `/${tag}/${post ? post.id : 0}`
    }
}

HeadBlock.contextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number
}