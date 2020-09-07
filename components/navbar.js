import Head from 'next/head'

export default function Navbar() {
  return (
    <div>
      <img className="favicon" src="/favicon.ico"></img>
      <ul className="navbar">
          <li className="navbar-item"><a href="/resume-ethan-watson.pdf">Resume</a></li>
          <li className="navbar-item"><a href="/contact">Contact</a></li>
        </ul>

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
          padding: 0.5rem 0;
        }
      `}</style>
    </div>
  )
}

