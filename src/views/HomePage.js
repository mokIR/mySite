// import MainOption from '../components/MainOption/MainOption';
import InfoCard from '../components/InfoCard/InfoCard';
import ImageCard from '../components/ImageCard/ImageCard';
// import CogContainer from '../components/CogContainer/CogContainer';
import Intro from './Intro';

const HomePage = (props) => {
    console.log('props: ', props);

    return (<main class="home-page">
        <Intro />
        <InfoCard />
        <ImageCard />
        {/* <MainOption option="cssAnimations" childElement={<CogContainer />} secondaryText="Coming Soon"/>
        <MainOption option="skills"/>
        <MainOption option="experience"/>
        <MainOption option="education"/> */}
    </main>)
}

export default HomePage;