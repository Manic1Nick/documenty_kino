const ArrowButton = ({ name, action }) => 
    <div className='arrow-buttons'>
        <ion-icon name={`ios-arrow-${name}`} onClick={ () => action() } ></ion-icon>
    </div>

export default ArrowButton