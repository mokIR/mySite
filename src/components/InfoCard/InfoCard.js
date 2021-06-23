import './InfoCard.scss';
// import CogContainer from '../CogContainer/CogContainer';

const InfoCard = () => {
    return (<section className="info-card">
        <div className="info-card--image-container">
            <div className="info-card--image-container--image"></div> </div>
        <div className="info-card--text-container">
            <h1>What I do</h1>
            <p>
                I'm a software developer who works mainly on the
                frontend but has worked on the backend in the past.
            </p>
        </div>
    </section>)
}

export default InfoCard;