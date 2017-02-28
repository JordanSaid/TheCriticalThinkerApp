import React from 'react'

const ArticleListing = function (props) {
  var link = null;

  if (props.embeded !== null) {
    link = props.embeded  } 
    else {
    link = props.url
    }
    console.log(props)

    return (
      <div className='article-listing'>
        <div className='article-listing-details'>
          <h3 className='article-listing-title'>{props.title}</h3>
          <iframe className='article-listing-iframe'src={link} scrolling="yes" width="500" height="500"></iframe>
          <p className='article-listing-url'><a href={props.url}>link</a></p>
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