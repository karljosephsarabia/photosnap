import { createContext } from "react";


export const PhotoSnapContext = createContext();

export const Provider = (props) => {

    const category = ['home', 'stories', 'features', 'pricing'];

    const banner = [{
        title: "Create and share your photo Stories",
        overview: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
        image: "/assets/home/mobile/create-and-share.jpg",
        "slug-title": "create-and-share",
        cta: "get an invite",
        category: 'home',
        highlight: [{
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
        }]
    },
    {
        title: "Features",
        overview: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
        image: "/assets/features/mobile/hero.jpg",
        "slug-title": "hero",
        cta: "",
        category: 'features',
        highlight: []
    },
    {
        title: "Pricing",
        overview: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
        image: "/assets/pricing/mobile/hero.jpg",
        "slug-title": "hero",
        cta: "",
        category: "pricing",
        highlight: []
    }];

    const stories = [{
        title: "Hazy full moon of Appalachia",
        'sub-title': "Last month's featured story",
        'release-date': "March 2nd 2020",
        author: 'John Appleseed',
        overview: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
        image: '/assets/stories/mobile/moon-of-appalacia.jpg',
        'cta-title': 'read the story',
        feature: true

    },
    {
        title: "The Mountains",
        'sub-title': "",
        'release-date': "April 16th 2020",
        author: 'John Appleseed',
        overview: '',
        image: '/assets/stories/mobile/mountains.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Sunset Cityscapes",
        'sub-title': "",
        'release-date': "April 14th 2020",
        author: 'Benjamin Cruz',
        overview: '',
        image: '/assets/stories/mobile/cityscapes.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "18 Days Voyage",
        'sub-title': "",
        'release-date': "April 11th 2020",
        author: 'Alexei Borodin',
        overview: '',
        image: '/assets/stories/mobile/18-days-voyage.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Architecturals",
        'sub-title': "",
        'release-date': "April 9th 2020",
        author: 'Samantha Brooke',
        overview: '',
        image: '/assets/stories/mobile/architecturals.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "World Tour 2019",
        'sub-title': "",
        'release-date': "April 7th 2020",
        author: 'Timothy Wagner',
        overview: '',
        image: '/assets/stories/mobile/world-tour.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Unforeseen Corners",
        'sub-title': "",
        'release-date': "April 3rd 2020",
        author: 'William Malcolm',
        overview: '',
        image: '/assets/stories/mobile/unforeseen-corners.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "King on Africa: Part II",
        'sub-title': "",
        'release-date': "March 29th 2020",
        author: 'Tim Hillenburg',
        overview: '',
        image: '/assets/stories/mobile/king-on-africa.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "The Trip to Nowhere",
        'sub-title': "",
        'release-date': "March 21st 2020",
        author: 'Felicia Rourke',
        overview: '',
        image: '/assets/stories/mobile/trip-to-nowhere.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Rage of The Sea",
        'sub-title': "",
        'release-date': "March 19th 2020",
        author: 'Mohammed Abdul',
        overview: '',
        image: '/assets/stories/mobile/rage-of-the-sea.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Running Free",
        'sub-title': "",
        'release-date': "March 16th 2020",
        author: 'Michelle',
        overview: '',
        image: '/assets/stories/mobile/running-free.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Behind the Waves",
        'sub-title': "",
        'release-date': "March 11th 2020",
        author: 'Lamarr Wilson',
        overview: '',
        image: '/assets/stories/mobile/behind-the-waves.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Calm Waters",
        'sub-title': "",
        'release-date': "March 9th 2020",
        author: 'Samantha Brooke',
        overview: '',
        image: '/assets/stories/mobile/calm-waters.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "The Milky Way",
        'sub-title': "",
        'release-date': "March 5th 2020",
        author: 'Benjamin Cruz',
        overview: '',
        image: '/assets/stories/mobile/milky-way.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Night at The Dark Forest",
        'sub-title': "",
        'release-date': "March 4th 2020",
        author: 'Mohammed Abdul',
        overview: '',
        image: '/assets/stories/mobile/dark-forest.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Somwarpet’s Beauty",
        'sub-title': "",
        'release-date': "March 1st 2020",
        author: 'Michelle',
        overview: '',
        image: '/assets/stories/mobile/somwarpet.jpg',
        'cta-title': 'read story',
        feature: false

    },
    {
        title: "Land of Dreams",
        'sub-title': "",
        'release-date': "February 25th 2020",
        author: 'William Malcolm',
        overview: '',
        image: '/assets/stories/mobile/land-of-dreams.jpg',
        'cta-title': 'read story',
        feature: false
    }];

    const socialMedia = [{
        name: 'facebook-icon',
        path: '/assets/shared/desktop/facebook.svg'
    },
    {
        name: 'youtube-icon',
        path: '/assets/shared/desktop/youtube.svg'
    },
    {
        name: 'twitter-icon',
        path: '/assets/shared/desktop/twitter.svg'
    },
    {
        name: 'pinterest-icon',
        path: '/assets/shared/desktop/pinterest.svg'
    },
    {
        name: 'instagram-icon',
        path: '/assets/shared/desktop/instagram.svg'
    }];

    return (
        <>
            <PhotoSnapContext.Provider value={{ category, socialMedia, stories, banner }}>
                {props.children}
            </PhotoSnapContext.Provider>
        </>
    );
};
