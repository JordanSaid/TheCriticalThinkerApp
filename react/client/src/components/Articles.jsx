import React from 'react'
import { Link, browserHistory } from 'react-router'
import Article from './Article'

class Articles extends React.Component {

  constructor(props) {
    super(props)
    this.doSearch = this.doSearch.bind(this)
    this.state = { 
      searchQuery: '', 
      articles: [] 
    }
  }

  componentDidMount(){
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

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  }

  render(){
    return(
      <div className="article">
        <nav>
          <Link to='/' className='title'>The Critical Thinker</Link>
          <input className='search-box' type='text' placeholder='Search Title...' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>
    

        <div className='articles-container'>
          {
            this.state.articles.filter((article) => `${article.title}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((article) => (
              <Article { ...article } key={article.url}/>
            ))
          }
        </div>
      
      </div>
    )
  }

}

export default Articles