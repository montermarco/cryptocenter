import Link from 'next/link';

const Navegation = () => (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="container">
                <Link href="/"><a className="navbar-brand">Bitcoin Center</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/"><a className="nav-link">home</a></Link></li>
                        <li className="nav-item">
                            <Link href="/about"><a className="nav-link">about</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>  
);

export default Navegation;




