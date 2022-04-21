const Book = (props) => {
	const { alt, title, src, author } = props.book
	const buttonHandler = (e) =>{
		console.log(e.target);
		
	}
	const clickHandler = (author) =>{

		alert(author)
	}
	const compClickHandler = (author) =>{
		alert(author)
	}
	
	
	
	return (
		<article className="book" onMouseOver={()=>{
			console.log(title);
			
		}}>

			<img alt={alt} src={src} />
			<h2> {title} </h2>
			<h1 style={{ color: 'purple', fontSize: '0.75rem', margin: '0.5rem' }}> {author}</h1>
			<button onClick={buttonHandler}>Click me! </button>
			{/*<button onClick={clickHandler(author)}>Click</button>*/}
			<button onClick={()=>compClickHandler(author)}>ComClick</button>
		</article>
	)
}

export default Book

