import React from 'react'
import { Link, browserHistory } from 'react-router'
import ArticleListing from './ArticleListing'
import ArticleForm from './ArticleForm'
import Collapsible from './Collapsible';

class Articles extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      articles: []
    }
  }

  ajaxCall(){
    var url = 'http://localhost:5000/api/articles'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        console.log("request: ", request.responseText)
        var data = JSON.parse(request.responseText)
        this.setState( { articles: data } )
       } else{
        console.log("Uh oh you're not logged in!")
        browserHistory.goBack()
       }
    }
    request.send(null)
  }

  componentDidMount(){
    this.ajaxCall()
  }

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  render(){
    return(
      <div className="articles-list">
        <nav className='navbar'>
          <Link to='/' className='title'>The Critical Thinker</Link>
          <input className='search-box' type='text' placeholder='Search Articles...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>
        <Collapsible trigger="Add an Article" className="collapse">
        <ArticleForm {...this.state.article} onFormSubmit={this.ajaxCall.bind(this)}/>
        </Collapsible>
        <div className='articles-container'>
          {
            this.state.articles.filter((article) => `${article.title}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((article) => (
              <ArticleListing { ...article } key={article.url}/>
            ))
          }
        </div>    
      </div>
    )
  }

}

export default Articles