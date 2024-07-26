import React from 'react'
import './footer.css'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'


const Footer = () => {
    const color = 'EAEAEA';
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <div className='footer-logo'>Scarlet Shop</div>
                <p className='footer-description'>
                    There are many variations of passages of Lorem available, but the majority have sufferes alteration in dome form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <div className='footer-socials'>
                    <div className='footer-socialicon' style={{ backgroundColor: `#${color}` }} >
                        <Facebook style={{ color: '3B5999' }} />
                    </div>
                    <div className='footer-socialicon' style={{ backgroundColor: `#${color}` }} >
                        <Instagram style={{ color: 'E4405F' }} />
                    </div>
                    <div className='footer-socialicon' style={{ backgroundColor: `#${color}` }} >
                        <Twitter style={{ color: '55ACEE' }} />
                    </div>
                    <div className='footer-socialicon' style={{ backgroundColor: `#${color}` }} >
                        <Pinterest style={{ color: 'E60023' }} />
                    </div>
                </div>

            </div>
            <div className='footer-center'>
                <h3 className='footer-title'>Useful Links</h3>
                <ul className='footer-list'>
                    <li className='footer-listitem'>Home</li>
                    <li className='footer-listitem'>Cart</li>
                    <li className='footer-listitem'>Man Fashion</li>
                    <li className='footer-listitem'>Woman Fashion</li>
                    <li className='footer-listitem'>Accessories</li>
                    <li className='footer-listitem'>My Account</li>
                    <li className='footer-listitem'>Order Tracking</li>
                    <li className='footer-listitem'>Wishlist</li>
                    <li className='footer-listitem'>Terms</li>
                </ul>
            </div>
            <div className='footer-right'>
                <h3 className='footer-title'>Contact</h3>
                <div className='footer-contactitem' style={{marginRight:"10px"}}><Room /> 622 Dixie Path, South Tobinchester 98336</div>
                <div className='footer-contactitem'style={{marginRight:"10px"}}><Phone />+1 234 56 78</div>
                <div className='footer-contactitem'style={{marginRight:"10px"}}><MailOutline />contact@scarletshop.com</div>
                <img src='https://i.ibb.co/Qfvn4z6/payment.png' className='footer-payment'/>
            </div>
        </div>
    )
}

export default Footer
