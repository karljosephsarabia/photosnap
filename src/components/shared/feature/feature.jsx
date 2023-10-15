import './feature.scss';

const Feature = () => {

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
            <section className='section-container-down'>
                {features.map((feature, index) =>
                    <div className='section-container-down__features' key={index}>
                        <img src={feature.icon} alt={feature.title} />
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                )}
            </section>
        </>
    );
};

export default Feature;