import './home.scss';
import Banner from './shared/banner/banner';
import Stories from './shared/stories/stories';
import Feature from './shared/feature/feature';

const Home = () => {

    return (
        <>
            <main>
                <Banner />
                <Stories />
                <Feature />
            </main>
        </>
    );
};

export default Home;