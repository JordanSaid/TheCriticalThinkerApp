import React from 'react'
import { Link, browserHistory } from 'react-router'
import FactCheckListing from './FactCheckListing'
import ArticleListing from './ArticleListing'
import FactCheckForm from './FactCheckForm'
import Collapsible from './Collapsible';
import Nav from './Nav';

class FactChecks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      article: null,
      factChecks: []
    }
  }

  ajaxCall(){
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
            var articleData = {title: data.title, url: data.url, id:data.id, embeded: data.embeded, user: data.user_id}
            var factCheckData = data.fact_checks
            this.setState({ 
              article: articleData,
              factChecks: factCheckData
            });
           } else{
            console.log("Uh oh you're not logged in!")
            browserHistory.goBack()
           }
        }
        request.send(null)
        console.log("hello", this.state.factChecks)
  }

  componentDidMount(){
    this.ajaxCall()
  }

  render(){
    if (!this.state.article) {
      return (
        <p>Loading</p>
        )
    }
    return(
      <div className='article-container'>
      <Nav />
        <ArticleListing {...this.state.article}key={this.state.article.id}/>
        <Collapsible trigger="Add a Fact Check" className="collapse">
        <FactCheckForm {...this.state.article} onFormSubmit={this.ajaxCall.bind(this)} key={this.state.article.user}/>
        </Collapsible>
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

export default FactChecks