import SideBar from './SideBar'
import SideList from './SideList'

const SideBlock = (props) => {

    if (props.isPreviewsOpen && props.screenWidth < 624) 
        return null

    else if (props.screenWidth > 480) 
        return <SideList { ...props } />
        
    else
        return <SideBar isOpen={ props.isSideBarOpening } { ...props } />
}

export default SideBlock