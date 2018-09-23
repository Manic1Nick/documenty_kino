import SideBar from './SideBar'
import SideList from './SideList'

const SideBlock = (props) => {

    const isPreviewsPageOpen = !props.match.params.id

    if (isPreviewsPageOpen && props.screenWidth < 624) 
        return null

    else if (props.screenWidth > 480) 
        return <SideList { ...props } />
        
    else
        return <SideBar isOpen={ props.shifted } { ...props } />
}

export default SideBlock