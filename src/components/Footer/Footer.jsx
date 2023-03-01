import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Footer(){
    return(
        <footer class="footer">
            <div class="footer-item">
                <a href="https://twitter.com/odysseus3096" target="_blank"><FontAwesomeIcon icon={brands('twitter')} /></a>
            </div>
            <div>
                <FontAwesomeIcon icon={brands('instagram')} />
            </div>
            <div>
                <FontAwesomeIcon icon={brands('facebook')} />
            </div>
            <div>
                <a href="https://www.linkedin.com/in/manchala-sreekanth-537bba209/" target="_blank"><FontAwesomeIcon icon={brands('linkedin')} /></a>
            </div>
            <div>
                <a href="https://github.com/odysseus1999" target="_blank"><FontAwesomeIcon icon={brands('github')} /></a>
            </div>
        </footer>
    )
}
