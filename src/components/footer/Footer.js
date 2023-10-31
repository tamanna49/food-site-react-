import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className='main__footer'>
                <div className="leftSide__footer">
                    <div className="leftSide__footer-logo">
                        <div className="footer__logo">
                            Flavours Hut
                        </div>
                    </div>
                    <div className="leftSide__content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, illo? Nobis perspiciatis tenetur magnam. Odit illum corporis veniam beatae soluta neque assumenda sint eveniet. Expedita dolores libero ducimus quibusdam eaque.
                    </div>
                </div>
                <div className="rightSide__footer">
                    <div className="location">
                        <ion-icon name="pin" id="location-icon"></ion-icon>
                        <div className="icons-text">Near Urban Estate, Rajpura</div>
                    </div>
                    <div className="mail">
                        <ion-icon name="mail-open" id="mail-icon"></ion-icon>
                        <div className="icons-text">flavourshut123@gmail.com</div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                Copyright &copy; 2023 Flavours Hut. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
