import React from 'react'
import { Link, browserHistory } from 'react-router'
import FactCheckListing from './FactCheckListing'

class Article extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      article: null,
      factChecks: []
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/articles/' + parseInt(this.props.location.query.article_id)
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
           if(request.status === 200){
            console.log("request: ", request.responseText)
            var data = JSON.parse(request.responseText)
            console.log(data)
            var articleData = {title: data.title, url: data.url, id:data.id, embeded: data.embeded}
            var factCheckData = data.fact_checks
            console.log(factCheckData)
            this.setState( { article: articleData, factChecks: factCheckData } )
           } else{
            console.log("Uh oh you're not logged in!")
            browserHistory.goBack()
           }
        }
        request.send(null)
  }

  render(){
    return(
      <div className='article-container'>
      <div className='fact-checks-list'>
        { this.state.factChecks.map((factCheck) => (
        <FactCheckListing { ...factCheck } key={factCheck.id}/>
        ))
      }
      </div>
      </div>
    )
  }
}

export default Article