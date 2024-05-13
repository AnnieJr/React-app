import about from "./about.css";

function aboutMe(){
    const cardAboutMe = {
        name: "Fernanda",
        email: "anafernandajz@gmail.com",
        description: "Mi lema de vida: lo estoy intentado.",
    };
    return (
        <div className="card">
            <h2>{aboutMe.name}</h2>
            <h2>{aboutMe.email}</h2>
            <p>{aboutMe.description}</p>
        </div>
    )
}

export default aboutMe;