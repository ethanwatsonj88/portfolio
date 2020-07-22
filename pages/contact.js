import Head from 'next/head'
import Navbar from '../components/navbar';
import Title from '../components/title';

export default function Contact() {
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
        901-609-9865<br />
        ethanwatsonj88@gmail.com<br />
        watson.et@northeastern.edu<br />
        </p>

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
        }

        a:hover {
          color: #e0c56e;
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
      `}</style>
    </div>
  )
}