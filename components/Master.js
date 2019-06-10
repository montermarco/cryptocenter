import Head from 'next/head';
import Navegation from './Navegation';

const MasterPage = (props) => {
  return (
        <div>
            <Head>
                <title>Crypto Center</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <link rel="stylesheet" href="https://bootswatch.com/4/spacelab/bootstrap.min.css"/>
            </Head>

            <Navegation/>

            <div className="container mt-4">
                {props.children} 
            </div>
            
        </div>
  )
};

export default MasterPage;

