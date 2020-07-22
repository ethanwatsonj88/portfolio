import Head from 'next/head'
import Navbar from '../components/navbar';
import Title from '../components/title';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Title />

        <p className="description">
          I am a Junior Front-end Web Designer & Full Stack Developer who is comfortable adapting to new technology, supporting a senior developer, and improving my effectiveness for customers as well as the company.
        </p>

        <div>
          <div className="job">
            <h2>Imprivata</h2>
            <p className="job-position">Web Developer & Designer, Imprivata</p>
            <p>January 2020-September 2020</p>
            <div className="job-img-list">
              <a href="/vercel.svg"><img src="/vercel.svg" className="job-img-item" /></a>
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
          // background-image: url('/homebackground.png');
          background-repeat: no-repeat;
          background-size: cover;
          color: #202020;
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
          border-bottom: 3px solid #e0c56e;
          padding: 2vw 1vw;
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
      `}</style>
    </div>
  )
}

