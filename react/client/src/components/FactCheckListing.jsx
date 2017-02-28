import React from 'react'

const FactCheckListing = function (props) {

    return (
      <div className='fact-check-listing'>
        <div className='fact-check-listing-details'>
          <h3 className='fact-check-listing-category'>{props.category}</h3>
          <p className='fact-check-listing-claim'>{props.claim}</p>
          <p className='fact-check-listing-evidence'>{props.evidence}</p>
          <p className='fact-check-listing-sources'>{props.sources}</p>
          <p className='fact-check-listing-user'>{props.user}</p>
        </div>
      </div>
  )

}

const { string, text } = React.PropTypes


export default FactCheckListing