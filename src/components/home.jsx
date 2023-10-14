import { useContext } from 'react';
import './home.scss';
import { PhotoSnapContext } from '../context/context-provider';

const Home = () => {
    const { stories } = useContext(PhotoSnapContext);

    const banner = [{
        title: "Create and share your photo Stories",
        overview: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
        image: "/assets/home/mobile/create-and-share.jpg",
        "slug-title": "create-and-share",
        cta: "get an invite"
    },
    {
        title: "Beautiful stories every time",
        overview: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks.",
        image: "/assets/home/mobile/beautiful-stories.jpg",
        "slug-title": "beautiful-stories",
        cta: "view the stories"
    },
    {
        title: "Designed for everyone",
        overview: "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
        image: "/assets/home/mobile/designed-for-everyone.jpg",
        "slug-title": "",
        cta: "view the stories"
    }];

    // const otherStories = [{
    //     title: "The Mountains",
    //     author: "John Appleseed",
    //     image: "/assets/stories/mobile/mountains.jpg"
    // },
    // {
    //     title: "Sunset Cityscapes",
    //     author: "Benjamin Cruz",
    //     image: "/assets/stories/mobile/cityscapes.jpg"
    // },
    // {
    //     title: "18 Days Voyage",
    //     author: "Alexei Borodin",
    //     image: "/assets/stories/mobile/18-days-voyage.jpg"
    // },
    // {
    //     title: "Architecturals",
    //     author: "Samantha Brooke",
    //     image: "/assets/stories/mobile/architecturals.jpg"
    // }];

    const features = [{
        title: '100% Responsive',
        description: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
        icon: '/assets/features/desktop/responsive.svg'
    },
    {
        title: 'No Photo Upload Limit',
        description: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
        icon: '/assets/features/desktop/no-limit.svg'
    },
    {
        title: 'Available to Embed',
        description: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
        icon: '/assets/features/desktop/embed.svg'
    }];

    return (
        <>
            <main>
                {banner.map((story, index) => !index ?
                    <article className='main-article-v1' key={index}>
                        <img src={story.image} alt={story['slug-title']} />
                        <div className='main-article-v1__overview'>
                            <h1>{story.title}</h1>
                            <p>{story.overview}</p>
                            <a href='#'>{story.cta}<img src='/assets/shared/desktop/arrow.svg' alt='arrow' /></a>
                        </div>
                    </article>
                    :
                    <article className='main-article-v2' key={index}>
                        <img src={`${story.image}`} alt={story['slug-title']} />
                        <div className='main-article-v2__overview'>
                            <h1>{story.title}</h1>
                            <p>{story.overview}</p>
                            <a href='#'>{story.cta}<img src='/assets/shared/desktop/arrow.svg' alt='arrow' /></a>
                        </div>
                    </article>
                )}

                {stories?.filter(story => !story.feature).slice(0, 4).map((story, index) =>
                    <section className='section-container-mid' key={index}>
                        <img src={story.image} alt={story.title} />
                        <div className='section-container-mid__info'>
                            <p><span>{story.title}</span>by {story.author}</p>
                            <hr />
                            <a href=''>read story<img src='/assets/shared/desktop/arrow.svg' alt='arrow' /></a>
                        </div>
                    </section>
                )}

                <section className='section-container-down'>
                    {features.map((feature, index) =>
                        <div className='section-container-down__features' key={index}>
                            <img src={feature.icon} alt={feature.title} />
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    )}
                </section>
            </main>
        </>
    );
};

export default Home;