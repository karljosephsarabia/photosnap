import { useContext } from "react";
import { PhotoSnapContext } from "../../../context/context-provider";
import './stories.scss';

const Stories = () => {
    const { stories } = useContext(PhotoSnapContext);

    return (
        <>
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
        </>
    );
};

export default Stories;