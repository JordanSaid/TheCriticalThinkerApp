import React from 'react'

const ArticleListing = function (props) {
  var link = null;

  if (props.embeded !== null) {
    link = props.embeded  } 
    else {
    link = props.url
    }

    return (
      <div className='article-listing'>
        <div className='acrticle-listing-details'>
          <h3 className='article-listing-title'>{props.title}</h3>
          <iframe className='article-listing-iframe'src={link} scrolling="yes" width="500" height="500"></iframe>
          <p className='article-listing-url'><a href={props.url}>{props.url}</a></p>
        </div>
      </div>
  )

}

const { string, text } = React.PropTypes

ArticleListing.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
}

export default ArticleListing