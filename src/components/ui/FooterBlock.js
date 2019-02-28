import React from 'react'

const FooterBlock = () => {

    return(
        <footer>
            <div className='copyright-text'>
                <p>
                    Авторське право &copy; 2018 належить Документам. Всi права захищенi.
                </p>
            </div>

            <div className='social-icons'>   

                <div className='social-icon'>              
                    <a href="https://www.facebook.com/Ukrdocuments/" title='Читати у Facebook'>
                        <ion-icon id="fb" name="logo-facebook"></ion-icon>
                    </a>
                </div>

                <div className='social-icon'>
                    <a href="https://t.me/ukraineDocs" title='Читати в Telegram'>
                        <ion-icon id="tg" name="paper-plane"></ion-icon>
                    </a>
                </div>

                {/*<div className='social-icon'>     
                    <a href="http://twitter.com" title='Читати в Twitter'>
                        <ion-icon id="tw" name="logo-twitter"></ion-icon>
                    </a>
                </div>*/}
            </div>
        </footer>
    )
}

export default FooterBlock