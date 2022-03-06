import Head from 'next/head'

export default function Title() {
  return (
    <div>
        {/* <h1 className="title">
          <a href="/">Ethan Watson</a>
        </h1> */}

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

      `}</style>


    </div>
  )
}

