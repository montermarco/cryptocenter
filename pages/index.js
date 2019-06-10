import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';

//components
import Price from '../components/Price';
import News from '../components/News';
import Events from '../components/Events';


const Index = (props) => (
    <MasterPage>
        
        <div className="row">
            <div className="col-12">                
                <Price price={props.crytoPrice}/>
            </div>

            <div className="col-md-8">
                <h2>Bitcoin News</h2>
                <News news={props.news}/>                
            </div>

            <div className="col-md-4">
                <h2>Bitcoin Events</h2>
                <Events events={props.events}/>
            </div>
        </div>

    </MasterPage>
);

Index.getInitialProps = async () => {
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const bitNews = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=c4abdcd476024514b1cb41ff566925a7');
    const events = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=NDM4MN2I2UWGLFLSO7G3');


    const priceRes = await price.json();
    const newsRes = await bitNews.json();
    const eventsRes = await events.json();

    
    return {
        crytoPrice : priceRes.data.quotes.USD,
        news: newsRes.articles,
        events: eventsRes.events
    }
};


export default Index;