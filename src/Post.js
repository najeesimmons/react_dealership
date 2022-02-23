import React from 'react'
//Load in Comment component
import Comment from './Comment'

function Post(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <h3>{props.author}</h3>
        <div>
	      <p>{props.body}</p>
	    </div>
        <h3>Comments:</h3>
        {/* Render Comment component, passing in data */}
        <Comment message={props.comment[1]} />
      </div>
    )
  }

  export default Post