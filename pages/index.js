import Head from 'next/head'
import Navbar from '../components/navbar';
import Title from '../components/title';
import Rain from '../components/p5-rain';
import Link from 'next/link'

import Glide from '@glidejs/glide'


export default function Home() {
  new Glide('.glide').mount()

  return (
    <div className="container">
      <Head>
        <title>Ethan Watson</title>
        <link rel="icon" href="/favicon.ico" />

        <script src="../node_modules/@glidejs/glide/dist/glide.min.js"></script>

        

        
      </Head>

      <main>

        <Navbar />

        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
                <li className="glide__slide">0</li>
                <li className="glide__slide">1</li>
                <li className="glide__slide">2</li>
              </ul>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button className="" data-glide-dir="<">prev</button>
            <button className="" data-glide-dir=">">next</button>
          </div>
        </div>


        <Title />

        <p className="description">
          I am a Junior Front-end Web Designer & Full Stack Developer who is comfortable adapting 
          to new technology, supporting a senior developer, and being effective for my company and its customers.
        </p>

        <div>
          <div className="job">
            <h2>Imprivata</h2>
            <p className="job-position">Web Developer & Designer, Imprivata</p>
            <p>January 2020-September 2020</p>
            <div className="job-img-list">
              <a href="/imprivata/d7-home.jpg"><img src="/imprivata/d7-home.jpg" className="job-img-item" /></a>
              <a href="/imprivata/d7-vid.jpg"><img src="/imprivata/d7-vid.jpg" className="job-img-item" /></a>
              <a href="/imprivata/d8-home.jpg"><img src="/imprivata/d8-home.jpg" className="job-img-item" /></a>
              <a href="/imprivata/d8-product-page.jpg"><img src="/imprivata/d8-product-page.jpg" className="job-img-item" /></a>
            </div>
            <p className="job-desc">
            My internship spanned most of a CMS website redesign and migration.
            At the end of my co-op, I had helped reshape a cool looking site, and
            I got to learn a lot of full stack development. I got exposed to a ton of technologies, especially git/github.
            I feel like I have many more tools to make great software and websites for the future! Thanks so much Josh and team.
            </p>
          </div>
        </div>

        <div className="job">
            <h2>FHMemphis.com</h2>
            <p>Web Developer</p>
            <p>September 2019-September 2020</p>

            <div className="job-img-list">
              <a href="/fhmemphis/fhmemphis-home.jpeg"><img src="/fhmemphis/fhmemphis-home.jpeg" className="job-img-item" /></a>
              <a href="/fhmemphis/fhmemphis-home-mobile.jpeg"><img src="/fhmemphis/fhmemphis-home-mobile.jpeg" className="job-img-item" /></a>
              <a href="/fhmemphis/fhmemphis-indivhealth.jpeg"><img src="/fhmemphis/fhmemphis-indivhealth.jpeg" className="job-img-item" /></a>

            </div>
            
            <p className="job-desc">
            I designed, developed, and maintain the website from front-end to deployment. 
            Originally I used Gatsby as front-end and Vultr as a VPS with nginx & jokerDNS for hosting.
            I remade the current site with nextjs for front-end and vercel & namecheap DNS for my hosting solution. I use github for version control and 
            also maintain an email service through namecheap.
            </p>
        </div>

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

        <div className="job">
            <h2>5th Grade Soccer coach and league areferee</h2>
            <p>Graphic Designer, Khoury College of Computer Science at Northeastern University</p>
            <p>January 2019-August 2019</p>
            <p>Some key takeaways</p>
            <ul>
              <li>Working collaboratively and bouncing ideas off of each other.</li>
            </ul>
        </div>

        <ul className="software-list">
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

          <li className="software-item">hover for more</li>
          <li className="software-item">AWS - RDS, S3</li>
          <li className="software-item">Heroku</li>
          <li className="software-item">Java</li>
          <li className="software-item">FL Studio - Rap & Game music production</li>

        </ul>

      </main>
      <style jsx global>{`
        @font-face {
          font-family: "Volkorn";
          src: url("Vollkorn-VariableFont_wght.ttf");
        }

        body {
          padding: 0;
          margin: 0;
          font-family: Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .background-rain {
          width: 100%;
          height: 100%;
          position: absolute;
          object-fit: cover;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }

        .background-cherry {
          width: 100%;
          height: 100%;
          object-fit: cover;
          // position: absolute;
          // top:0;
          position: fixed;
          top: 0;
        }

        .container {
          min-height: 100vh;
          padding: 0 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 12vw 8vw;
          width: 100%;
          height: auto;
          flex: 1;
          display: flex;
          flex-direction: column;
          // background-image: url('/cherryleaf.gif');
          // background-repeat: no-repeat;
          background-size: contain;
          color: #202020;
          position: relative;
        }

        a {
          color: inherit;
          text-decoration: none;

          animation-name: link-hover-out;
          animation-duration: .2s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        a:hover {
          color: #e0c56e;

          animation-name: link-hover;
          animation-duration: .2s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        @keyframes link-hover {
          from {color: inherit;}
          to {color: #e0c56e;}
        }

        @keyframes link-hover-out {
          from {color: #e0c56e;}
          to {opacity: inherit;}
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 8vw;
          font-family: "Volkorn";
        }

        .description {
          line-height: 1.5;
          font-size: 2vw;
        }

        .navbar {
          list-style: none;
          display: flex;
          flex-direction: column;
          padding: 0;
          font-weight: 300;
        }

        .navbar-item {
          font-size: 4vw;
        }

        .job-img-item {
          width: 12vw;
          padding: 2vw 1vw;
          object-fit: contain;
          max-height: 12rem;
          vertical-align: middle;
          animation-name: img-hover-out;
          animation-duration: .3s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        .job-img-item:hover {
          animation-name: img-hover;
          animation-duration: .3s;
          animation-fill-mode: forwards;
          animation-timing-function: ease-out;
        }

        @keyframes img-hover {
          from {opacity: 100%;}
          to {opacity: 70%;}
        }

        @keyframes img-hover-out {
          from {opacity: 70%;}
          to {opacity: 100%;}
        }

        .software-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .software-item {
          padding: 1rem 3rem;
          list-style-type: none;

        }
      `}</style>
    </div>
  )
}

