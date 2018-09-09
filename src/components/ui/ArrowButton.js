const ArrowButton = ({ name, action, title, hidden }) => 
    <div className='arrow-buttons'>
        <a title={ title }>
            <ion-icon 
                name={`ios-arrow-${name}`} 
                onClick={ () => action() } 
                style={{ 'display': hidden ? 'none' : 'block' }}
            ></ion-icon> 
        </a>
    </div>

export default ArrowButton