import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import {books} from './books'
import Book from './Book'

// const name = ['amrit', 'paudel']

const Booklist = () => {
	return (
		<section className="booklist">
			{books.map((book, index) => {
				// const {title, alt, author, src} = book
				console.log({book});
				console.log({...book});

				
				return <Book key={index} book={book} />
			})}
		</section>
	)
}




ReactDOM.render(<Booklist />, document.getElementById('root'))

