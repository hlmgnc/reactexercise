import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <>
      <article>
        <h4>Hello React</h4>
        <ul>
          <img src="" alt="" />
          <br />
          <input type="text" name="" id="" />
        </ul>
      </article>
      <div>hey hey</div>
    </>
  )
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h4', {}, 'HELLO WORLD'))
// }

ReactDom.render(<Greeting />, document.getElementById('root'))
