import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Q8O-3Hq1L._AC_UL200_SR200,200_.jpg',
    title: 'The Food Lab',
    author: 'Kenji Lopez Alt',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
    title: 'Greenlights',
    author: 'Matthew McConaughey',
  },
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
