import React from 'react'
import { Link, browserHistory } from 'react-router'

class FactCheckForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      category: "",
      claim: "",
      evidence: "",
      sources: "",
      article_id: props.id
    }
  }

  addFactCheck(event){
    event.preventDefault();
    const request = new XMLHttpRequest();
    var url = "http://localhost:5000/api/fact_checks"
    request.open("POST", url)
    request.setRequestHeader("Content-Type", "application/json");
    request.withCredentials = true;

    request.onload = () => {
      if (request.status === 201) {
        const factCheck = JSON.parse(request.responseText);
        this.props.onFormSubmit()
      } else {
        console.log(factCheckData)
      }
    }
    const factCheckData = {
      fact_check: {
      article_id: this.state.article_id,
      category: this.state.category,
      claim: this.state.claim,
      evidence: this.state.evidence,
      sources: this.state.sources
      }
    }
  request.send(JSON.stringify(factCheckData));
  }

  handleOnChangeCategory(event) {
    this.setState({category: event.target.value})
  }
  handleOnChangeClaim(event) {
    this.setState({claim: event.target.value})
  }
  handleOnChangeEvidence(event) {
    this.setState({evidence: event.target.value})
  }
  handleOnChangeSources(event) {
    this.setState({sources: event.target.value})
  }

  render(){
    return(
    <form onSubmit={this.addFactCheck.bind(this)} id="fcform">
      <select id="category-dropdown" onChange={this.handleOnChangeCategory.bind(this)} value={this.state.value}>
        <option>Choose Fact Check Category</option>
        <option value="False">False</option>
        <option value="Misleading">Misleading</option>
        <option value="Needs More Context">Needs More Context</option>
        <option value="Slight Innacuracy">Slight Innacuracy</option>
      </select>
      <textarea form="fcform" cols="50" rows="5" onChange={this.handleOnChangeClaim.bind(this)} placeholder="The claim you want to dispute" />
      <textarea form="fcform" cols="50" rows="5" onChange={this.handleOnChangeEvidence.bind(this)} placeholder="Your rebuttal with evidence" />
      <textarea form="fcform" cols="50" rows="5" onChange={this.handleOnChangeSources.bind(this)} placeholder="The link to a source that backs your claim" />
      <button onClick={this.addFactCheck.bind(this)}> Add Fact Check </button>
      </form>
      )
    }
  }

export default FactCheckForm