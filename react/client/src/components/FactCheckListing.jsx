import React from 'react'

const FactCheckListing = function (props) {

    return (
      
      <div className='fact-check-listing'>
        <div className='fact-check-listing-details'>
          <h3 className='fact-check-listing-category'>{props.category}</h3>
          <p className='fact-check-listing-claim'>Claim: {props.claim}</p>
          <p className='fact-check-listing-evidence'>Evidence: {props.evidence}</p>
          <p className='fact-check-listing-sources'>Source: <a href={props.sources}>{props.sources}</a></p>
          <p className='fact-check-listing-user'>User: {props.user.username}</p>
        </div>
      </div>
     
  )

}

const { string, text } = React.PropTypes


export default FactCheckListing