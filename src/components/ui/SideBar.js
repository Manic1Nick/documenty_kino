import { Component } from 'react'
import classNames from 'classnames'
import onClickOutside from "react-onclickoutside"
import ListPosts from './ListPosts'

class SideBar extends Component {

    handleClickOutside = evt => {
        this.props.hideSideBar()
    }

    render() {
        const { open, hideSideBar } = this.props,
            classSideBar = classNames('SideBar', { open })

        return(
            <div className={ classSideBar } onClick={ () => hideSideBar() }>
                <ListPosts { ...this.props } /> 
            </div>
        )
    }
}

export default onClickOutside(SideBar)