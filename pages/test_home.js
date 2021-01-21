import Head from 'next/head'
import Link from 'next/link'
import  Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Page Title! (Update me...)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 className="title">
          Welcome to this fancy new site!!
        </h1>

        <p className="description">
          This doesn't have a real purpose yet, but the learning process is worth it...
        </p>

        <div className="bodyText">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed tempor augue, mollis condimentum dui. 
            Curabitur at ultricies turpis, id facilisis elit. Cras volutpat felis eu tellus consequat, nec gravida mi efficitur. 
            Sed est tellus, hendrerit at mollis sit amet, rhoncus vel diam. Vestibulum placerat non mauris eget volutpat. 
            Donec eget ornare lectus. Nullam imperdiet sapien pellentesque libero accumsan vehicula. Donec vulputate dapibus 
            dolor ut posuere. Mauris sagittis eros ut nisi scelerisque, ut imperdiet orci suscipit. Sed rutrum aliquet mauris, 
            et scelerisque odio fringilla nec. Nam consectetur cursus diam, eget viverra est interdum ut. Quisque ornare faucibus 
            ante, dignissim consequat sem vulputate ac. Donec vulputate mauris sit amet tempus tincidunt.
            <br></br>
            <br></br>
            Suspendisse aliquet tortor tortor, eu pulvinar nulla tempor sit amet. Morbi ornare malesuada 
            nunc in tempus. Morbi quis odio diam. Aliquam euismod auctor dolor, vulputate euismod massa egestas in. 
            Nulla finibus ex in ex imperdiet bibendum. Suspendisse ac quam nisl. Maecenas quis sapien eu sapien condimentum 
            bibendum eu nec massa. Nam commodo diam sit amet erat eleifend pulvinar non at purus. Donec a pretium purus, a 
            facilisis est. Aliquam nisl nisi, pulvinar et aliquet non, bibendum sed mauris. Nulla scelerisque volutpat turpis 
            non sagittis.

            </p>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
       Some footer text to be replaced with something useful... circa 2021
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .bodyText {
            line-height: 1.5;
            margin-top: 3rem;
            font-size: 1 rem;
            max-width: 1000px;
          }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 900px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
