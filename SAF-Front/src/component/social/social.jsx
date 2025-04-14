import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../../assets/SAF-Icon.svg';
import '../social/social.css';

const Social = () => {
  const socialIcons = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/student.activites.family.saf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      img: 'https://img.icons8.com/fluency/96/instagram-new.png',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/student.activities.family/',
      img: 'https://img.icons8.com/fluency/96/facebook-new.png',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/student-activities-family/posts/?feedView=all',
      img: 'https://img.icons8.com/color/96/linkedin-circled--v1.png',
    },
    {
      name: 'WhatsApp',
      link: 'https://chat.whatsapp.com/IgbeAKPrZY96sVjeEBrsQ1',
      img: 'https://img.icons8.com/color/96/whatsapp--v1.png',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/SAFOpportunitiesandscholarships',
      img:  'https://img.icons8.com/fluency/96/telegram-app.png'
    },
    {
      name: 'Email',
      link: 'mailto:safstudentactivtiesfamily@gmail.com',
      img: 'https://img.icons8.com/fluency/96/circled-envelope.png',
    }
  ];

  return (
    <div className="page-container">
      <div className="container social-container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 d-flex flex-column align-items-center">
            <h1 className="mb-4 social-heading">
              We are happy to Follow Us with incredible clients
            </h1>
            <p className="social-description">
              Fortune 500 companies and renowned global brands place their trust in our products, 
              solutions, and bespoke software development services.
            </p>

            <div className="social-logo">
              <img src={icon} alt="SAF logo" />
            </div>

            <div className="social-icons">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.img}
                    alt={social.name}
                    width="60"
                    height="60"
                    className="social-img"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
