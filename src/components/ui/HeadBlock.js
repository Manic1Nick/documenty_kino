import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { LINKS, LINKS_UKR, MAIN_TITLE } from '../../constants'

import DropdownMenu from 'react-dd-menu'
import LogoFullImage from '../../assets/images/documenty_logo_full_1.png'
import LogoImage from '../../assets/images/documenty_logo_1.png'

export default class HeadBlock extends Component {

    constructor() {
        super()
        this.state = { 
            activeLinkIndex: 0,
            isMenuOpen: false 
        }

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
        return(
            <ul className="links">
            {
                LINKS.map((tag, i) => 
                    <li key={i}>
                        <Link to={`/${tag}/${this._getDefaultId(tag)}`}>
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
                    <Link to={`/all/${this._getDefaultId('all')}`}>
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

    _getDefaultId = (tag) => {
        const { posts } = this.context

        let id = tag === 'all'
            ? posts[0].id
            : posts.find(post => post.tag === tag).id

        return id
    }
}

HeadBlock.contextTypes = {
    posts: PropTypes.array,
    screenWidth: PropTypes.number
}