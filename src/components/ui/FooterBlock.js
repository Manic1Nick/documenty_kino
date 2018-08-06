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

                <div className='social-icon'>              
                    <a href="http://facebook.com" title='Читати у Facebook'>
                        <ion-icon id="fb" name="logo-facebook"></ion-icon>
                    </a>
                </div>

                <div className='social-icon'>     
                    <a href="http://twitter.com" title='Читати в Twitter'>
                        <ion-icon id="tw" name="logo-twitter"></ion-icon>
                    </a>
                </div>

                <div className='social-icon'>
                    <a href="http://googleplus.com" title='Читати в Google+'>
                        <ion-icon id="gp" name="logo-googleplus"></ion-icon>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default FooterBlock