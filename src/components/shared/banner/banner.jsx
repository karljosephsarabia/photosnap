import { useContext } from 'react';
import './banner.scss';
import { PhotoSnapContext } from '../../../context/context-provider';

const Banner = () => {
    const { banner } = useContext(PhotoSnapContext);

    return (
        <>
            {banner?.map((ban, index) => ban.category === 'home' &&
                <div key={index}>
                    <article className='main-article-v1'>
                        <img src={ban.image} alt={ban['slug-title']} />
                        <div className='main-article-v1__overview'>
                            <h1>{ban.title}</h1>
                            <p>{ban.overview}</p>
                            {ban.cta && <a href='#'>{ban.cta}<img src='/assets/shared/desktop/arrow.svg' alt='arrow' /></a>}
                        </div>
                    </article>

                    {ban.highlight?.map((highlight, index) =>
                        <article className='main-article-v2' key={index}>
                            <img src={`${highlight.image}`} alt={highlight['slug-title']} />
                            <div className='main-article-v2__overview'>
                                <h1>{highlight.title}</h1>
                                <p>{highlight.overview}</p>
                                <a href='#'>{highlight.cta}<img src='/assets/shared/desktop/arrow.svg' alt='arrow' /></a>
                            </div>
                        </article>)}
                </div>
            )}
        </>
    );
};

export default Banner;