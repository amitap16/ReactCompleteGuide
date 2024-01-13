export default function CoreConcept({ concept }) {
    const title = concept.title;
    const description = concept.description;
    const image = concept.image;

    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}