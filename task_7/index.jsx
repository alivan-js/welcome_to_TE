import { useState } from 'react';

const Block = ({ mouseEnterCallback, imgSrc, imgAlt, content }) => {
    const [ isActive, setActive ] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallback();
    }

    return (
        <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
            {imgSrc && <img src={imgSrc} alt={imgAlt} />}
            {content && <p>BLock2 content: {content}</p>}
        </div>
    );
}