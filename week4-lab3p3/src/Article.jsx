function Article({ title, text }) {
    return (
      <article className="section">
        <h3>{title}</h3>
        <p>{text}</p>
      </article>
    );
  }
  
  export default Article;