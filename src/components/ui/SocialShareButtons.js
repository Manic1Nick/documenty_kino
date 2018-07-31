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

const SocialShareButtons = ({ post: { id, tag, title } }) => {

    const postLink = `https://manic1nick.github.io/documenty_kino/#/${tag}/${id}`,
        postTitle = `Документи - ${title}`

    const tooltip = (social) => <span className='tooltip'>Поширити у {social}</span>

    return(
        <div className='article-social-shares'>

            <ion-icon name="share"></ion-icon>

            <FacebookShareButton className='social-icon' quote={ postTitle } url={ postLink }>
                <FacebookIcon size={32} round={true} />
                { tooltip('Facebook') }
            </FacebookShareButton>

            <TwitterShareButton className='social-icon' title={ postTitle } url={ postLink }>
                <TwitterIcon size={32} round={true} />
                { tooltip('Twitter') }
            </TwitterShareButton>

            <TelegramShareButton className='social-icon' title={ postTitle } url={ postLink }>
                <TelegramIcon size={32} round={true} />
                { tooltip('Telegram') }
            </TelegramShareButton>

        </div>
    )
}

export default SocialShareButtons