import './Contact.css';

const contactInfo = [
  { id: 1, label: 'Email',    value: 'priyanjaleebandara123@gmail.com', href: 'mailto:priyanjaleebandara123@gmail.com' },
  { id: 2, label: 'Phone',    value: '0713186082',                       href: 'tel:0713186082' },
  { id: 3, label: 'Location', value: 'Kegalle, Sri Lanka',               href: null },
  { id: 4, label: 'LinkedIn', value: 'Connect on LinkedIn',              href: 'https://www.linkedin.com/in/priyanjalee-bandara-878536269/' },
];

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let's <span>Connect</span></h2>

        <div className="contact-layout">
          <div className="contact-intro">
            <p>I'm currently looking for internship opportunities and open to collaborations. Whether you have a project idea or just want to say hello — feel free to reach out!</p>
            <p>I'll try to get back to you as soon as possible.</p>
            <a href="mailto:priyanjaleebandara123@gmail.com" className="btn btn-primary contact-cta">
              Send Me an Email
            </a>
          </div>

          <div className="contact-cards">
            {contactInfo.map((info) => (
              <div key={info.id} className="contact-item card">
                <div>
                  <p className="contact-label">{info.label}</p>
                  {info.href
                    ? <a href={info.href} className="contact-value link" target="_blank" rel="noopener noreferrer">{info.value}</a>
                    : <p className="contact-value">{info.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;