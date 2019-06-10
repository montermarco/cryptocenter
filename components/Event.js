
const Event = (props) => {

    const { name, url, description } = props.info;
    
    let ttl = name.text;
    if(ttl.length > 100){
        ttl = ttl.substr(0,100);
    }
    
    let desc = description.text;
    if(desc){
        desc = desc.substr(0,200);
    }
    
    return (
        <div className="card bg-primary disable">
            <a href={url} target="_blank" className="list-group-item text-primary mb-1">
                <h5 className="mb-3">{ttl}</h5>
                <p className="mb-1">{desc}</p>
            </a>
        </div>
    )
};

export default Event;