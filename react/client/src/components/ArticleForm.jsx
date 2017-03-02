import React from 'react'
import { Link, browserHistory } from 'react-router'
import ArticleListing from './ArticleListing'
import Articles from './Articles'

class ArticleForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      title: "",
      url: "",
      embeded: null
    }
  }

  addArticle(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    var url = "http://localhost:5000/api/articles"
    request.open("POST", url)
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if (request.status === 201) {
        const article = JSON.parse(request.responseText);
        this.props.onFormSubmit()
      } 
    }
    const articleData = {
      article: {
      title: this.state.article,
      url: this.state.url,
      embeded: this.state.embeded
      }
    }
  request.send(JSON.stringify(articleData));
  }

  handleOnChangeTitle(event) {
    this.setState({title: event.target.value})
  }
  handleOnChangeUrl(event) {
    this.setState({url: event.target.value})
  }
  handleOnChangeEmbeded(event) {
    this.setState({embeded: event.target.value})
  }

  render(){
    return(
      <div>
      <div id="article-form" class="collapse">
      <form onSubmit={this.addArticle.bind(this)} className='add-article-form'>
      <input type="text" onChange={this.handleOnChangeTitle.bind(this)} placeholder="The Article Title" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeUrl.bind(this)} placeholder="The Article Url" />
      <input type="textarea" cols="50" rows="5" onChange={this.handleOnChangeEmbeded.bind(this)} placeholder="The embeded link if video" />
      <button onClick={this.addArticle.bind(this)}> Add Article </button>
      </form>
      </div>
      </div>
      )
    }
  }

export default ArticleForm