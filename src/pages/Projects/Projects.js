import GitHubIcon from '@material-ui/icons/GitHub';
import './Projects.css'

const Projects = () => {
    return(
        <main className= "projects">
            <div className="flex-container">
                <a target="_blank" rel="noreferrer" href="https://python-online-code-compiler.herokuapp.com" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Online Code Compiler</h3>
                        <p className="project-description" >Created an online compiler for executing python scripts in a web browser.</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/Chatbot_using_IBM_Watson_Assistant" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Chatbot Using IBM Watson assistant</h3>
                        <p className="project-description" >Developed a chatbot for user conversation in my portfolio website using IBM Watson assistant.</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/Product_Browse_Node_Classification" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Amazon Browse Node Classifier</h3>
                        <p className="project-description" >Build an Amazon product browse node classifier(Amazon ML Challenge 2021).</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/Database_Driven_Python_ANPR" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Python ANPR</h3>
                        <p className="project-description" >Implemented an Automatic Number Plate Recognition to recognize vehicle numbers and stored it in MySQL Database.</p>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/YughendaranPalanivel/speech-processing-using-python" className="project-link">
                    <div className="project-card">
                        <h3 className="project-title"> <GitHubIcon /> | Speech Processing Using Python</h3>
                        <p className="project-description" >Developed a GUI for recording speech signal and extracting energy and zero-crossing rate.</p>
                    </div>
                </a>
            </div>
        </main>
    );
}

export default Projects