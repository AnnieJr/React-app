import "./components/navbar/Navbar.css";
import RocketIcon from "@mui/icons-material/Rocket";

function Navbar(props) {
    const links = props.links;
    return (
        <nav className="navbar"> 
            <div>
                <RocketIcon/>
                <h2 style={{color:"#A87676"}}>Logo</h2>
                <h2 style={{color:"#CA8787"}}>{props.header}</h2>
                <h2>space-app</h2>
            </div>
            <div>
                {links.map((link) => (
                        <button key={link.id}>
                            <a href="{link.link">{link.text}</a>
                        </button>
                ))
                }
                <button>
                <p>icon</p>
                </button>
                <button>
                <p >icon</p>
                </button>
                <button>
                <p>icon</p>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;