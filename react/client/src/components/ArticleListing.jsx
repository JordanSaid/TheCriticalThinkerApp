import React from 'react'
import { Link, browserHistory } from 'react-router'

const ArticleListing = function (props) {
  var link = null;

  if (props.embeded !== null) {
    link = props.embeded  } 
    else {
    link = props.url
    }
    console.log(props.id)

    return (
      <div className='article-listing'>
          <h3 className='article-listing-title'>{props.title}</h3>
          <iframe className='article-listing-iframe'src={link} scrolling="yes" width="700" height="500"></iframe>
          <p className='article-listing-url'><a href={props.url}>Go To Link </a>
          <Link to={
            {
              "pathname": "/factChecks",
              "query": {"article_id": props.id},
              "state": "info"
            }
          }> Fact Checks</Link> 
          </p>
      </div>
  )

}

const { string, text } = React.PropTypes

ArticleListing.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
}

export default ArticleListing