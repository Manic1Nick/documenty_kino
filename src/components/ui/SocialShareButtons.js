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

const SocialShareButtons = ({ post }) => {

    return(
        <div className='article-social-shares'>
            <FacebookShareButton className='social-icon' url={'http://google.com'}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton className='social-icon' url={'http://google.com'}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton className='social-icon' url={'http://google.com'}>
                <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
        </div>
    )
}

export default SocialShareButtons