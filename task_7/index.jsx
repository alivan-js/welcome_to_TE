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


const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
    const [ isActive, setActive ] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallbak();
    }

    return (
        <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
            <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}

const Block2 = ({ mouseEnterCallbak, content }) => {
    const [ isActive, setActive ] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallbak();
    }

    return (
        <div onMouseEnter={mouseEnterHandler} className={ isActive ? 'active': '' }>
            <p>BLock2 content: {content}</p>
        </div>
    );
}
