import Head from 'next/head'
import Navbar from '../components/navbar';
import Title from '../components/title';
import Rain from '../components/p5-rain';
import Link from 'next/link'

import Glide from '@glidejs/glide'


export default class Home extends React.Component {
  componentDidMount() {
    new Glide('.glide').mount()
    new Glide('.fh-glide').mount()
  }
  render() {
    return (
      <div className="container">
        <Head>
          <title>Ethan Watson</title>
          <link rel="icon" href="/favicon.ico" />

          <script src="../node_modules/@glidejs/glide/dist/glide.min.js"></script>
        </Head>

        <main>

          <Navbar />

          <Title />

          <p className="disclaimer"><em><span style={{color: '#6EB7F5'}}>*</span>intentionally designed brutally digital</em></p>

          <p className="description">
            I am a Junior Front-end Web Designer & Full Stack Developer who is comfortable adapting 
            to new technology, supporting a senior developer, and being effective for my company and its customers.
          </p>

          <div className="slide-spacing"></div>

          <div>
            <div className="job">
              <h2>Imprivata</h2>
              <p className="job-position">Web Developer & Designer, Imprivata</p>
              <p>January 2020-September 2020</p>

              <div className="glide job-img-list">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                      <a href="/imprivata/d7-home.jpg"><img src="/imprivata/d7-home.jpg" className="job-img-item" /></a>
                    </li>
                    <li className="glide__slide">
                      <a href="/imprivata/d7-vid.jpg"><img src="/imprivata/d7-vid.jpg" className="job-img-item" /></a>
                    </li>
                    <li className="glide__slide">
                      <a href="/imprivata/d8-home.jpg"><img src="/imprivata/d8-home.jpg" className="job-img-item" /></a>
                    </li>
                    <li className="glide__slide">
                      <a href="/imprivata/d8-product-page.jpg"><img src="/imprivata/d8-product-page.jpg" className="job-img-item" /></a>
                    </li>
                  </ul>
                </div>

                <div className="glide__arrows" data-glide-el="controls">
                  <button className="" data-glide-dir="<">prev</button>
                  <button className="" data-glide-dir=">">next</button>
                </div>
              </div>

              <p className="job-desc">
              My internship spanned most of a CMS website redesign and migration.
              At the end of my co-op, I had helped reshape and implement many of 
              the components and page layouts/functionalities, held my responsibility 
              as a team member, and trusted my coworkers so that we could release a 
              project impossible for one person. I feel like I have many more tools 
              to make great software and websites for the future! Thanks so much to 
              my manager Josh and the team.
              </p>
            </div>
          </div>

          <div className="slide-spacing"></div>

          <div className="job">
              <h2>FHMemphis.com</h2>
              <p>Web Developer</p>
              <p>September 2019-September 2020</p>

              <div className="fh-glide job-img-list">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides">
                    <li className="glide__slide">
                      <a href="/fhmemphis/fhmemphis-home.jpeg"><img src="/fhmemphis/fhmemphis-home.jpeg" className="job-img-item" /></a>
                    </li>
                    <li className="glide__slide">
                      <a href="/fhmemphis/fhmemphis-home-mobile.jpeg"><img src="/fhmemphis/fhmemphis-home-mobile.jpeg" className="job-img-item" /></a>
                    </li>
                    <li className="glide__slide">
                      <a href="/fhmemphis/fhmemphis-indivhealth.jpeg"><img src="/fhmemphis/fhmemphis-indivhealth.jpeg" className="job-img-item" /></a>
                    </li>
                  </ul>
                </div>

                <div className="glide__arrows" data-glide-el="controls">
                  <button className="" data-glide-dir="<">prev</button>
                  <button className="" data-glide-dir=">">next</button>
                </div>
              </div>
              
              <p className="job-desc">
              I designed, developed, and maintain the website from front-end to deployment. 
              Originally I used Gatsby as front-end and Vultr as a VPS with nginx & jokerDNS for hosting.
              I remade the current site with nextjs for front-end and vercel & namecheap DNS for my hosting solution. I use github for version control and 
              also maintain an email service through namecheap.
              </p>
          </div>

          <div className="slide-spacing"></div>

          <div className="job">
              <h2>Khoury College</h2>
              <p>Graphic Designer, Khoury College of Computer Science at Northeastern University</p>
              <p>January 2019-August 2019</p>

              <div className="job-img-list">
                <a href="/khoury/consider-this-mscs.png"><img src="/khoury/consider-this-mscs.png" className="job-img-item" /></a>
              </div>
              
              <p>Some key takeaways</p>
              <ul>
                <li>Working collaboratively and bouncing ideas off of each other.</li>
              </ul>
          </div>

          <div className="slide-spacing"></div>

          <div className="job">
              <h2>5th Grade Soccer coach and league areferee</h2>
              <p>Graphic Designer, Khoury College of Computer Science at Northeastern University</p>
              <p>January 2019-August 2019</p>
              <p>Some key takeaways</p>
              <ul>
                <li>Working collaboratively and bouncing ideas off of each other.</li>
              </ul>
          </div>

          <div className="slide-spacing"></div>

          <em><ul className="software-list">
            <li className="software-item">Javascript/ES6</li>
            <li className="software-item">Nodejs</li>
            <li className="software-item">Reactjs</li>
            <li className="software-item">Sass/Scss</li>
            <li className="software-item">MySQL/Postgres</li>
            <li className="software-item">PHP/twig</li>
            <li className="software-item">Drupal/CMS</li>
            <li className="software-item">Android Studio</li>
            <li className="software-item">DNS services, VPS/nginx/Joker/namecheap/Vercel</li>

            <li className="software-item">Design</li>
            <li className="software-item">Cinema 4D</li>
            <li className="software-item">Adobe Photoshop</li>
            <li className="software-item">Adobe XD</li>
            <li className="software-item">Adobe Illustrator</li>
            <li className="software-item">Procreate</li>
            <li className="software-item">Unity</li>

            <li className="software-item">hover for more :TODO:</li>
            <li className="software-item">AWS - RDS, S3</li>
            <li className="software-item">Heroku</li>
            <li className="software-item">Java</li>
            <li className="software-item">FL Studio - Rap & Game music production</li>

          </ul></em>

        </main>
        
      </div>
    )
  }
}

