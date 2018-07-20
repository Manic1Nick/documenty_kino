import { Component } from 'react'
import classNames from 'classnames'
import onClickOutside from "react-onclickoutside"
import ListPosts from './ListPosts'
import ListPostsItem from './ListPostsItem'

import posed from 'react-pose'

const Sidebar = posed.nav({
    open: { x: '0%', staggerChildren: 100 },
    closed: { x: '-100%' }
  })
  
  const NavItem = posed.li({
    open: { opacity: 1 },
    closed: { opacity: 0 }
  })

class SideBarPose extends Component {

      handleClickOutside = (evt) => {
        this.props.hideSideBar()
    }
    
      render() {
          const { open, posts } = this.props

          return(
            <Sidebar pose={ open ? 'open' : 'closed' }>
            <ul>
                {posts.map((post, i) => (
                <NavItem key={i}>
                    <ListPostsItem post={ post } { ...this.props } />
                </NavItem>
                ))}
            </ul>
            </Sidebar>
          )
      }
  }

  export default onClickOutside(SideBarPose)
