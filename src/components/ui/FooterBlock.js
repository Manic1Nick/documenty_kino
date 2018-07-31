import React from 'react'

const FooterBlock = () => {

    const tooltip = (social) => <span className='tooltip'>Читати у {social}</span>

    return(
        <footer>
            <div className='copyright-text'>
                <p>
                    Copyright &copy; 2018 by Documenty. All rights reserved.
                </p>
            </div>

            <div className='social-icons'>   

                <div className='social-icon'>              
                    <a href="http://facebook.com">
                        <ion-icon id="fb" name="logo-facebook"></ion-icon>
                    </a>
                    { tooltip('Facebook') }
                </div>

                <div className='social-icon'>     
                    <a href="http://twitter.com">
                        <ion-icon id="tw" name="logo-twitter"></ion-icon>
                    </a>
                    { tooltip('Twitter') }
                </div>

                <div className='social-icon'>
                    <a href="http://googleplus.com">
                        <ion-icon id="gp" name="logo-googleplus"></ion-icon>
                    </a>
                    { tooltip('Google+') }
                </div>
            </div>
        </footer>
    )
}

export default FooterBlock