import React, { Component } from 'react'

import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    ViberShareButton,
    EmailShareButton,
  } from 'react-share'

import {
    FacebookShareCount,
    GooglePlusShareCount,
    LinkedinShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
  } from 'react-share'

  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    EmailIcon,
    ViberIcon,
  } from 'react-share'

const SocialShareButtons = ({ post: { id, tag, title, image } }) => {

    const siteLink = 'www.docs.co.ua',
        postLink = `${siteLink}/#/${tag}/${id}`,
        shareInfo = `${title} - Документи | ${siteLink}`

    return(
        <div className='article-social-shares'>

            <div className='social-icon-common'>
                <ion-icon name="share"></ion-icon>
            </div>

            <FacebookShareButton 
                className='social-icon' 
                quote={ shareInfo } 
                url={ postLink }
            >
                <a title='Поширити у Facebook'>
                    <FacebookIcon size={32} round={true} />
                </a>
            </FacebookShareButton>

            <TwitterShareButton 
                className='social-icon' 
                title={ shareInfo } 
                url={ postLink }
            >
                <a title='Поширити у Twitter'>
                    <TwitterIcon size={32} round={true} />
                </a>
            </TwitterShareButton>

            <TelegramShareButton 
                className='social-icon' 
                title={ shareInfo } 
                url={ postLink }
            >
                <a title='Поширити у Telegram'>
                    <TelegramIcon size={32} round={true} />
                </a>
            </TelegramShareButton>

        </div>
    )
}

export default SocialShareButtons