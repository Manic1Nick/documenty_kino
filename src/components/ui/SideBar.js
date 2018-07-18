import { Component } from 'react'
import classNames from 'classnames'
import onClickOutside from "react-onclickoutside"
import ListPosts from './ListPosts'

class SideBar extends Component {

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.open !== this.props.open) {
            this._changeHtmlScrollingY(nextProps.open)           
        }
    }

    handleClickOutside = (evt) => {
        this.props.hideSideBar()
    }

    render() {
        const { open } = this.props,
            classSideBar = classNames('SideBar', { open })

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