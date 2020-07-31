import React from 'react';

import {GifContainer, ResponsiveIframe} from './styles';

function GifIframeResponsive() {
    return (
        <GifContainer>
            <ResponsiveIframe
                title="Título do iframe"
                src={`https://giphy.com/embed/NfhIQkf74Mh4A`}
                frameBorder="0"
                class="giphy-embed"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            <ResponsiveIframe
                title="Título do iframe"
                src={`https://giphy.com/embed/fvq5t5Ndi7OZvvfN2h`}
                frameBorder="0"
                class="giphy-embed"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </GifContainer>
    );
}

export default GifIframeResponsive;