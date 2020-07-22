import Head from 'next/head'

export default function Title() {
  return (
    <div>
        <h1 className="title">
          <a href="/">Ethan Watson</a>
        </h1>

      <style jsx>{`
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
          background-image: url('/homebackground.png');
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
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

        .job-desc {
          font-size: 5rem;
          color: black;
        }
      `}</style>

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
      `}</style>
    </div>
  )
}

