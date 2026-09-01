import './App.css';
import BorderGlow from './assets/BorderGlow';
import ClickSpark from './assets/ClickSpark';
import LogoLoop from './component/LogoLoop';
import Waves from './component/Waves';
import PolaroidRow from './component/polaroids';
import Igns from './component/ign';
import Skills from './component/skills';
import ContactButton from './component/contact';
import Certifications from './component/certs';
import { SiReact } from 'react-icons/si';
import { DiGithubBadge, DiJsBadge, DiPython } from "react-icons/di";
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineFileDownload } from "react-icons/md";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <DiGithubBadge />, title: "Github", href: "https://github.com/aeonossss"},
  { node: <DiJsBadge />, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  { node: <DiPython />, title: "Python", href: "https://www.python.org/"},
  { src: "dart.svg", alt: "Dart", href: "https://dart.dev/docs" },
  { src: "netlify.svg", alt: "Netlify", href: "https://www.netlify.com/" },
  { src: "flutter.svg", alt: "Flutter", href: "https://flutter.dev/" },
];


function App(){
  return(
    <div className='mainPage'>
      <ClickSpark
          sparkColor='#EAF9C8'
          sparkSize={10}
          sparkRadius={20}
          sparkCount={6}
          duration={200}
        >
            <div className='landing-section'>
              <div className='header'>
                <div className='header-links'>
                  <div className='tabs'>
                    <a href='#work'>Work</a>
                    <a href='#cert'>Certifications</a>
                    <a href='#skills'>Skills</a>
                    <a href='#interests'>Interests</a>
                  </div>
                  <ContactButton />
                </div>
              </div>
              <div className='landing-content'>
                <div className='text-group'>
                  <h1>EYA ISABEL YALUNG</h1>
                  <p>Front-End Developer | UI/UX Designer</p>
                  <p>Frontend developer focused on bridging functionality and visual design, creating seamless and engaging digital experiences. With a strong UI/UX foundation in design systems, branding, prototyping, and wireframing, I transform ideas into polished, user-centered interfaces that enhance usability and strengthen brand identity.</p>
                  <div className='cta-buttons'>
                    <a href='/Yalung-Eya-Resume.pdf' download>
                      <button className='resume' style={{ display: 'flex', flexDirection:'row', gap: '8px' }}><MdOutlineFileDownload size={20} />Download CV</button>
                    </a>
                    <ContactButton />
                  </div>
                </div>

                <a href='https://www.linkedin.com/in/e-yalung/' className='me-link' target='_blank' rel='noopener noreferrer'>
                  <div className='me'></div>
                </a>

              </div>
            </div>
            

            <div id='orgs'>
              <div className='org-title' style={{position: 'relative', zIndex: 1}}>Organizations Served</div>
              <div id='orgs-served'>
                <a href='https://www.lumirracollective.com/' className='lumirra' target='_blank' rel='noopener noreferrer'></a>
                <a href='https://www.shore360agency.com/' className='shore' target='_blank' rel='noopener noreferrer'></a>
                <a href='https://www.onefinebaby.com.au/' className='onefine' target='_blank' rel='noopener noreferrer'></a>
                <a href='https://www.igy6.com.au/' className='igy6' target='_blank' rel='noopener noreferrer'></a>
              </div>
            </div>

            <div id='logo-loop'>
                  <div style={{ position: 'relative', overflow: 'hidden'}}>
                    <LogoLoop
                      logos={techLogos}
                      speed={100}
                      direction="left"
                      logoHeight={60}
                      gap={60}
                      hoverSpeed={0}
                      fadeOut
                      useCustomRender={false}
                  />
                </div>
            </div>

            <div id='work'>
              <Waves
                lineColor="#362b4e"
                backgroundColor="rgba(66, 55, 66, 0.2)"
                waveSpeedX={0.01}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
              
              <div className='section-Title' style={{position: 'relative', zIndex: 1}}>Work</div>
                <div className='section' style={{position: 'relative', zIndex: 1}}>
                  Front-End
                  </div>
                  <div className='work-cards'>
                    <div className='frontend'>
                      <BorderGlow
                      edgeSensitivity={2}
                      glowColor="40 20 80"
                      backgroundColor="#16141C"
                      borderRadius={16}
                      glowRadius={10}
                      glowIntensity={.5}
                      coneSpread={10}
                      animated={true}
                      colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                    >
                    <div style={{ padding: '2em' }}>
                      <div>
                        <div style={{ gap: '0' }}>
                          <h2>Customized To-Do List</h2>
                        <a href='https://design-team-todo.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>https://design-team-todo.netlify.app</a>
                        </div>
                        <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
                      </div>
                    </div>

                    </BorderGlow>

                    <BorderGlow
                        edgeSensitivity={2}
                        glowColor="40 20 80"
                        backgroundColor="#16141C"
                        borderRadius={16}
                        glowRadius={10}
                        glowIntensity={.5}
                        coneSpread={10}
                        animated={true}
                        colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                      >
                      <div style={{ padding: '2em' }}>
                        <h2>Graphic Designer Portfolio</h2>
                        <a href='https://eya-yalung.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>https://eya-yalung.netlify.app</a>
                        <p>Developed in a React.js environment using HTML, CSS, and JavaScript, this portfolio draws inspiration from Frutiger Aero. It showcases a range of works, including graphic designs, layouts, and asset creation, enhanced with interactive elements reminiscent of the Windows 7 interface, complete with an integrated music player.</p>
                      </div>
                    </BorderGlow>

                    <BorderGlow
                      edgeSensitivity={2}
                      glowColor="40 20 80"
                      backgroundColor="#16141C"
                      borderRadius={16}
                      glowRadius={10}
                      glowIntensity={.5}
                      coneSpread={10}
                      animated={true}
                      colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                    >
                    <div style={{ padding: '2em' }}>
                      <div>
                        <div style={{ gap: '0' }}>
                          <h2>Technical Portfolio</h2>
                        <a href='https://yalung-eya.netlify.app/' className='links' target='_blank' rel='noopener noreferrer'>(THIS SITE) https://yalung-eya.netlify.app/</a>
                        </div>
                         <p>Developed using React and Vite, alongside core web technologies such as HTML, CSS, and JavaScript. It adopts a minimalistic design approach in contrast to the designer portfolio, emphasizing clarity and functionality. The portfolio highlights my work in frontend development and UI/UX design, demonstrating both technical implementation and user-centered design principles.</p>
                      </div>
                    </div>
                    </BorderGlow>
                    </div>
                    <div className='ui' style={{position: 'relative', zIndex: 1}}>
                      UI/UX Design
                    </div>

                    <div className='uiux'>
                      <BorderGlow
                        edgeSensitivity={2}
                        glowColor="40 20 80"
                        backgroundColor="#16141C"
                        borderRadius={16}
                        glowRadius={10}
                        glowIntensity={.5}
                        coneSpread={10}
                        animated={true}
                        colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                      >
                      <div style={{ padding: '2em' }}>
                        <div>
                          <div style={{ gap: '0' }}>
                            <h2>Technical Portfolio</h2>
                          <a href='https://www.figma.com/design/8wDRxXaypsokDQLoBs5upN/Eya-Yalung-Technical-Portfolio?node-id=0-1&t=6PG7HzgzGXbEOXuL-1' className='links' target='_blank' rel='noopener noreferrer'>FIGMA LINK HERE</a>
                          </div>
                          <p>Developed using React and Vite, alongside core web technologies such as HTML, CSS, and JavaScript. It adopts a minimalistic design approach in contrast to the designer portfolio, emphasizing clarity and functionality. The portfolio highlights my work in frontend development and UI/UX design, demonstrating both technical implementation and user-centered design principles.</p>
                        </div>
                      </div>
                      </BorderGlow>

                      <BorderGlow
                        edgeSensitivity={2}
                        glowColor="40 20 80"
                        backgroundColor="#16141C"
                        borderRadius={16}
                        glowRadius={10}
                        glowIntensity={.5}
                        coneSpread={10}
                        animated={true}
                        colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                      >
                      <div style={{ padding: '2em' }}>
                        <div>
                          <div style={{ gap: '0' }}>
                            <h2>To-Do Application (Web & Mobile)</h2>
                          <a href='https://www.figma.com/design/tXwVVIUYPlW6YeDHeYxKoe/To-Do-Website?node-id=0-1&t=Sc0zR00Dc7fbLR1F-1' className='links' target='_blank' rel='noopener noreferrer'>FIGMA LINK HERE</a>
                          </div>
                          <p>UI/UX design for Lumirra Collective, with ownership of the website’s visual direction, user experience, and interface design. The project focused on translating the brand’s vintage photography and art print identity into a refined, immersive, and intuitive digital experience through cohesive layouts, user flows, and interactive components.</p>
                        </div>
                      </div>
                      </BorderGlow>

                      {/* <BorderGlow
                          edgeSensitivity={2}
                          glowColor="40 20 80"
                          backgroundColor="#16141C"
                          borderRadius={16}
                          glowRadius={10}
                          glowIntensity={.5}
                          coneSpread={10}
                          animated={true}
                          colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                        >
                        <span style={{ padding: '2em' }}>
                          <h2>Custom Event Souvenir Perfume E-Commerce Website (Work in Progress)</h2>
                          <a href='https://www.figma.com/design/vJPOuKYDusK5PpMb2dBJqt/Spray-Lab?t=NwZSMAK5J1YhagYT-1' className='links' target='_blank' rel='noopener noreferrer'>FIGMA LINK HERE</a>
                          <p>Built a custom e-commerce website for personalized perfume souvenirs for weddings, birthdays, and special occasions. Implemented a user-friendly design with smooth navigation and an optimized browsing experience to help customers easily select and purchase products.</p>
                        </span>
                      </BorderGlow> */}
                    </div>

                  <div className='launched-title' style={{position: 'relative', zIndex: 1}}>
                    Launched UI/UX Design
                  </div>

                  <div className='launched-uiux'>
                    <BorderGlow
                      edgeSensitivity={2}
                      glowColor="40 20 80"
                      backgroundColor="#16141C"
                      borderRadius={16}
                      glowRadius={10}
                      glowIntensity={.5}
                      coneSpread={10}
                      animated={true}
                      colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                    >
                    <div style={{ padding: '2em' }}>
                      <div>
                          <h2 className='ui-title'>Lumirra Collective</h2>
                          <div className='role'>
                            <h4>(Leading UI/UX Designer)</h4>
                            <a href='https://lumirracollective.com/' className='links' target='_blank' rel='noopener noreferrer'>https://lumirracollective.com/</a>
                        </div>
                        <p>Led the UI/UX design for Lumirra Collective, overseeing the website’s visual direction, user experience, and interface design. The project focused on translating the brand’s vintage photography and art print identity into a refined, immersive, and intuitive digital experience through cohesive layouts, user flows, and interactive components.</p>
                      </div>
                    </div>
                    </BorderGlow>

                  </div>

                  </div>
            </div>

            <div id='cert'>
              <div className='cert-title'>
                Certifications
              </div>
              <Certifications />         
           </div>

            <div id='skills'>
              <div className='skills-title'>
                Skills
              </div>
              <Skills />
            </div>

            <div id='interests'>
              <div className='interests-title'>
                Interests  
              </div>
              <PolaroidRow/>
              <Igns/>
            </div>

            <div id='footer'>
              <div className='footer-content'>
                <div>
                  <h1>EYA ISABEL YALUNG</h1>
                  <p>Front-End Developer | UI/UX Designer</p>
                  <a href='/Yalung-Eya-Resume.pdf' download>
                    <button className='resume' href=''> Download CV</button>
                  </a>
                </div>
                  
                  <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="#work">Work</a></li>
                      <li><a href="#cert">Certifications</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#interests">Interests</a></li>
                    </ul>
                  </div>
                  <div className='web-href'>
                    <h4>Wrong Website?</h4>
                    <p>Try:</p>
                    <a href='https://eya-yalung.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>
                      <button className='designer-port'>Designer Portfolio</button>
                    </a>
                    <div className="social-icons">
                    <a href="https://github.com/aeonossss" target="_blank" rel="noopener noreferrer">
                      <DiGithubBadge size={28} />
                    </a>
                    <a href="https://linkedin.com/in/e-yalung" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} />
                    </a>
                    </div>
                  </div>
                  </div>
                  <hr></hr>
              <div className='rights'>
                    <div>
                     Eya Isabel Yalung © 2025.
                  </div>
                  <div>
                      All rights reserved.
                  </div>
                  </div>
            </div>
      </ClickSpark>
    </div>
  )
}

export default App;