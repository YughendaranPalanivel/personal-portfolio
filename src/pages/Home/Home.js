import './Home.css'

const Home = () => {
    return(
        <main className="home">
            <div className="align-center-container">
            <div className="home-flex-container">
                <h1 className="line-1">Hi I am</h1>
                <h1 className="line-1 anim-typewriter">Yughendaran</h1>  
            </div>          
            <p className="about-me">I turn code into life, prefer <code>sync</code> over <code>async</code>, use tabs and spaces in harmony and never broke production.</p>
            </div>
        </main>
    );
}

export default Home;