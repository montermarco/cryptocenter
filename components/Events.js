import Event from './Event';

const Events = (props) => {
    const eId = Object.keys(props.events);
    return (
        <div className="list-groups ">
            { eId.map(key => (
                <Event key={key} info={props.events[key]}/>
            )) }
        </div>
    )
};

export default Events;