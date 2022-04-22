import { useState } from "react";
const Book = (props) => {
	const [mybook ,setMybook] = useState(props.book)
	const { alt, title, src, author } = mybook

	const buttonHandler = (e) =>{
		console.log(e.target);
		
	}
	const compClickHandler = (author) =>{
		setMybook({})
	}
	
	return (
		

		<article className="book" onClick={()=>{
			console.log(props.book);
			
		}}>
			<img alt={alt} src={src} />
			<h2> {title} </h2>
			<h1 style={{ color: 'purple', fontSize: '0.75rem', margin: '0.5rem' }}> {author}</h1>
			<button onClick={buttonHandler}>Click me! </button>
			{/*<button onClick={clickHandler(author)}>Click</button>*/}
			 <button onClick={()=>compClickHandler(author)}>delete this</button>
		</article>
	)
}

export default Book

