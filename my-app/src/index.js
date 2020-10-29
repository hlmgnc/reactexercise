import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81Q8O-3Hq1L._AC_UL200_SR200,200_.jpg" alt="" />
)

const Title = () => <h1>The Food Lab</h1>
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Kenji Lopez Alt</h4>
// const Person = () => <h2> hello</h2>
// const Message = () => {
//   return <p>heyyoooo</p>
// }
// const BookList = () => {
//   return React.createElement('div', {}, React.createElement('h4', {}, 'HELLO WORLD'))
// }

ReactDom.render(<BookList />, document.getElementById('root'))
