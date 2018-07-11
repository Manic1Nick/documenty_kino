import React from 'react'

const FooterBlock = () => {
    return(
        <footer>
            <div className='copyright-text'>
                <p>
                    Copyright &copy; 2018 by Documenty. All rights reserved.
                </p>
            </div>
            <div className='social-icons'>                 
                <a href="http://facebook.com">
                    <ion-icon id="fb" name="logo-facebook"></ion-icon>
                </a>
                <a href="http://twitter.com">
                    <ion-icon id="tw" name="logo-twitter"></ion-icon>
                </a>
                <a href="http://googleplus.com">
                    <ion-icon id="gp" name="logo-googleplus"></ion-icon>
                </a>
                {/* <a href="#"><ion-icon id="ig" name="logo-instagram"></ion-icon></a> */}
            </div>
        </footer>
    )
}

export default FooterBlock