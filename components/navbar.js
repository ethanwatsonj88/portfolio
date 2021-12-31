import Head from 'next/head'

export default function Navbar() {
  return (
    <div>
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
        
        .navbar {
          list-style: none;
          display: flex;
          flex-direction: column;
          padding: 0;
        }

        .navbar li {
          font-family: Univers;
        }

      `}</style>
    </div>
  )
}

