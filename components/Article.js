
const Article = (props) => {

    const { urlToImage, title, description, source, url } = props.article;

    let image;
    
    if(urlToImage !== ''){
        image = <img src={urlToImage} alt="Image not available" className="card-img-top"/>
    } else {
        image =<p>Image not available</p>       
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>
                <div className="card-body">
                    <h3 className="card title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-primary"> Read article </a>
                </div>
            </div>
        </div>
    )
}

export default Article;