import './ImageCard.scss';
// todo make info and image one

const ImageCard = () => {
    return (<section className="image-card">
        <div className="image-card--text-container">
            <h1>My hobbies</h1>
            <p>
                I have a wide range of hobbies but at the moment I love collecting Lego Sets.
            </p>
        </div>
        <div className="image-card--image-container">
            <div className="image-card--image-container--image"></div>
        </div>
    </section>)
}

export default ImageCard;