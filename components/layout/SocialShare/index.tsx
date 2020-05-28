import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';

type Props = {
  title: string
  description: string
  url: string
}

const SocialShare: React.FC<Props> = ({ title, description, url }) => {
  return (
    <>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon className="rounded-full h-10 w-10" />
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        source={url}
        title={title}
        summary={description}
      >
        <LinkedinIcon className="rounded-full h-10 w-10" />
      </LinkedinShareButton>
      <TwitterShareButton title={title} url={url}>
        <TwitterIcon className="rounded-full h-10 w-10" />
      </TwitterShareButton>
    </>
  )
}

export default SocialShare
