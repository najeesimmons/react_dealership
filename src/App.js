import React from 'react'
import Hello from './Hello'
import Post from './Post'
// import Comment from './Comment'


function App () {
  return (
    <div>
      <Hello name={"Najee"} age={31} />
      <Post title={"Learning React"} author={"Najee Simmons"} body={"They said REACT was fun"} comment={["They lied", "No they didn't", "It depends who you ask, bub."]}/>
      {/* <Comment message={"They lied about REACT!"} /> */}
  </div>
  )
}

export default App