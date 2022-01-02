import Head from 'next/head'
import Navbar from '../components/navbar';
import Title from '../components/title';

export default function Contact() {
  return (
    <div className="container">
        <Head>
          <title>Ethan Watson</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/ntt5nzc.css"/>

        </Head>

        <main>

          <p className="disclaimer"><em><span style={{color: '#6EB7F5'}}>*</span>inspired by digital brutalism.</em></p>

          <Navbar />

          <Title />

          <p className="description">
          901-609-9865
          </p>

          <p className="description">
          ethanwatsonj88@gmail.com
          </p>

          <p className="description">
          watson.et@northeastern.edu
          </p>

        </main>
        
      </div>
  )
}