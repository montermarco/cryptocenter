import Article from './Article';

const News = (props) => {
    return (
       <div className="row">
           { 
               props.news.map( (art , idx)=>(
                    <Article 
                        key={idx}
                        article={art} />
               ))
            }
       </div>
    )
}

export default News;