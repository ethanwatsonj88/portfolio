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
    </div>
  )
}