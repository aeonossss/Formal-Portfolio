import { useState } from 'react';
import { MdOpenInNew, MdExpandMore } from 'react-icons/md';

const certifications = [
  {
    category: 'Technical',
    items: [
      { label: 'JavaScript for Beginners', href: 'https://simpli-web.app.link/e/susCQVtVb2b' },
      { label: 'ReactJS for Beginners', href: 'https://simpli-web.app.link/e/DyZZ4usVb2b' },
      { label: 'Cybersecurity Essential', href: 'https://www.linkedin.com/in/e-yalung/overlay/Certifications/1972586743/treasury/?profileId=ACoAAE6smSUBXTo4dfZDOKHcoeQaNDkgOlhYkn8' },
      { label: 'Introduction to Networks', href: 'https://www.linkedin.com/in/e-yalung/overlay/Certifications/1972387697/treasury/?profileId=ACoAAE6smSUBXTo4dfZDOKHcoeQaNDkgOlhYkn8' },
      { label: 'Cyber Threat Management', href: 'https://www.credly.com/badges/51e2b3c5-dc6a-4164-b5d4-a1b6610e86dd' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { label: 'Critical Thinking in the AI Era', href: 'https://www.life-global.org/certificate/c97462a2-151c-4899-ade1-3214145d5c29' },
      { label: 'Agile Project Management', href: 'https://www.life-global.org/certificate/f1b87adc-61ba-4d5a-8f78-c0ad195e4ecc' },
    ],
  },
  {
    category: 'Experience',
    items: [
      { label: 'UI/UX Designer Internship', href: 'https://www.linkedin.com/in/e-yalung/overlay/1775718255489/single-media-viewer/?profileId=ACoAAE6smSUBXTo4dfZDOKHcoeQaNDkgOlhYkn8' },
    ],
  },
];

export default function Certifications() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className='cert-accordion'>
      {certifications.map(({ category, items }, i) => (
        <div key={category} className={`cert-card ${open === i ? 'cert-card--open' : ''}`}>
          <button className='cert-header' onClick={() => toggle(i)}>
            <span>{category}</span>
            <MdExpandMore
              size={20}
              style={{
                transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </button>
          <div className='cert-body'>
            {items.map(({ label, href }) => (
              <a key={label} href={href} target='_blank' rel='noopener noreferrer' className='cert-item'>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}