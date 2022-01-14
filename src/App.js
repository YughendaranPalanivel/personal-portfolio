import React, {useState} from 'react';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import ContactMe from './pages/ContactMe/ContactMe';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './App.css';

const App = () => {

    const [page, setPage] = useState('Home');

    return(
        <div className="app">
            <header className="app-header">
            <p className="line-2" onClick={()=>setPage('Home')}>Yughendaran</p>
            <nav className="nav-bar">
            <ul>
            <li className="line-2" onClick={()=>setPage('Projects')}>Projects</li>
            <li className="line-2" onClick={()=>setPage('About')}>About</li>
            <li className="line-2" onClick={()=>setPage('ContactMe')}>Contact Me</li>
            {/* <li className="line-2" onClick={()=>setPage('ChatBot')}><ChatBubbleOutlineIcon /></li> */}
            </ul>
            </nav>
            </header>
            {page === 'Home' && <Home />}
            {page === 'Projects' && <Projects />}
            {page === 'About' && <About />}
            {page === 'ContactMe' && <ContactMe />}
            {/* {page === 'ChatBot' && <ChatBot/>} */}
            <footer className="app-footer">
            <nav className="social-media-links">
            <ul>
            <li><a target="_blank" rel="noreferrer" href="mailto: yughendaranp@gmail.com"><MailIcon fontSize="small" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yughendaran-palanivel-68a5a2211/"><LinkedInIcon fontSize="small" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel"><GitHubIcon fontSize="small"  /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/yughendaran?r=nametag"><InstagramIcon fontSize="small" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UCJK6RQ_Pn5OO0Bxn5hWROyQ"><YouTubeIcon fontSize="small"  /></a></li>
            </ul>
            </nav>
            </footer>
        </div>
    );
}

export default App;