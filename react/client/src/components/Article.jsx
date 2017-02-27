import React from 'react'

const Article = (props) => (
  <div className='article'>
    <div className='article-details'>
      <h3 className='article-title'>{props.title}</h3>
      <iframe className='article-iframe'src={props.url} scrolling="yes" width="500" height="500"></iframe>
      <p className='article-url'><a href={props.url}>{props.url}</a></p>
    </div>
  </div>
)

const { string, text } = React.PropTypes

Article.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
}


export default Article