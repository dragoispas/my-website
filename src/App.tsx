import avatar from "./avatar.jpeg"
import Card from './Card'
import { roles } from './data'

function App() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero_bubble">
            <img src={avatar} alt="Dragos - " className="hero_avatar" />
            <p className='secondary'>Welcome to my website!</p>
          </div>

          <h2 className='hero-title'>
            Dragos Ispas,
            <br />
            building reliable frontend products with care
          </h2>

          <p className='muted s'>Scroll down to see portfolio ↓</p>
        </div>
      </section>
      <section className="about">
        
        <div className="about-logos">
          <div className="about-logo sensidev" aria-label="Sensidev" />
          <div className="about-logo ledidi" aria-label="Ledidi" />
          <div className="about-logo jnj" aria-label="Johnson & Johnson" />
          <div className="about-logo nextgen" aria-label="NextGen" />
          <div className="about-logo endava" aria-label="Endava" />
        </div>

        <div className="about-content">
          <p className="eyebrow">About me</p>
          <p className='about-description'>
            Frontend-focused engineer with 4+ years of experience delivering
            production features across large-scale React + TypeScript, Next.js,
            React Native, and Node.js applications.
          </p>
          <p className='about-description muted'>
            I’m known for clear communication, attention to detail, and shipping
            thoughtful, dependable software.
          </p>
        </div>
        
      </section>
      <section className='experience'>
        <div className="experience_inner">
          <p className="eyebrow">Experience</p>
          <h2>Projects & Roles</h2>

          {roles.map(role => <Card role={role}/>)}

        </div>
      </section>
      <section className='footer'>
        <div className="app-icons">
          <a href='https://github.com/dragoispas' target="_blank" >
            <div className="app-icon-container">
              <svg className='app-icon' viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <title>github [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> </path> </g> </g> </g> </g>
              </svg>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/dragos-ispas/' target="_blank" >
            <div className="app-icon-container">
              <svg className='app-icon' viewBox="-3 -3 26.00 26.00" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">
                  <rect x="-3" y="-3" width="26.00" height="26.00" rx="3.38" fill="#0A66C2"/>
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.08"/>
                <g id="SVGRepo_iconCarrier"> <title>linkedin [#161]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"> </path> </g> </g> </g> </g>
              </svg>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default App
