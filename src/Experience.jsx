import './css/experience.css'

function Experience({ experience = [] }) {
    return (
        <>
            <div className="allcards">
                {experience.map((exp, index) => (
                    <div className="singlecard" key={index.toString()}>
                        <h1>{exp.title}</h1>
                        <br />
                        <p>{exp.dis}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Experience;