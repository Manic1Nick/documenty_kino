import { Component } from 'react'
import classNames from 'classnames'
import onClickOutside from "react-onclickoutside"
import ListPosts from './ListPosts'

class SideBar extends Component {

    componentWillReceiveProps = ({ isOpen }) => {
        if (isOpen !== this.props.isOpen) {
            this._changeHtmlScrollingY(isOpen)           
        }
    }

    handleClickOutside = (evt) => {
        this.props.hideSideBar()
    }
    
    render() {
        const { isOpen } = this.props,
            classSideBar = classNames('SideBar', { open: isOpen })

        return(
            <div className={ classSideBar }>
                <ListPosts { ...this.props } />
            </div>
        )
    }

    _changeHtmlScrollingY = (isOpenSideBar) => {
        document.getElementsByTagName("html")[0].style.overflowY = isOpenSideBar ? 'hidden' : 'auto'
    }
}

export default onClickOutside(SideBar)