'use client'

import Image from "next/image";
import footerTop from "/public/images/bg-footer-top-desktop.svg";
import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleSubscribe = () => {
    // Here you can handle the subscribe action, e.g., send the email to your server
    setEmail('');
    closeModal();
    alert('Thanks for subscribing 😊');
  }

  return (
    <div style={{ marginTop: '15rem' }}>
      <Image src={footerTop} width={3000} height={1000} />
      <div style={{ backgroundColor: 'rgba(19, 33, 55, 1)' }}>
        <div style={{ paddingTop: '5rem', maxWidth: '90vw', margin: '0 auto', width: '87vw' }}>
          <div style={{ color: 'white' }}>
            <h2>NEWSLETTER</h2>
            <p>
              To receive tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address.
            </p>
            <div style={{ paddingBottom: '5rem' }}>
              <input 
                className="w-full py-2 rounded-md text-black" 
                type="email" 
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <button onClick={openModal} className="bg-Pink px-10 py-2 rounded-md hover:bg-Light-Pink">Subscribe</button>
              {isModalOpen && (
                <dialog open>
                  <p>Thanks for subscribing 😊</p>
                  <button onClick={handleSubscribe}>Close</button>
                </dialog>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;