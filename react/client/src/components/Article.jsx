import React from 'react'

const Article = (props) => (
  <div className='article'>
    <div className='article-details'>
      <h3 className='article-title'>{props.title}</h3>
      <h4 className='article-url'><a href={props.url}/></h4>
    </div>
  </div>
)

const { string, text } = React.PropTypes

Article.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
}


export default Article