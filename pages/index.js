import Head from 'next/head'

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        <h1>Кодим с Reactcoder-ом</h1>
        <p>Канал представляет собой коротенькие видеоролики для обучения разработке на React.js и Node.js.</p>
        <ul>
          <li><a href="#">VK</a></li>
          <li><a href="#">FB</a></li>
          <li><a href="#">YT</a></li>
        </ul>
      </div>

      <style jsx>{`
        .app {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
        }
        h1 {
          text-align: center;
        }
        p {
          text-align: center;
        }
        ul {
          list-style-type: none;
          display: flex;
          justify-content: center;
          padding-top: 3rem;
        }
        li {
          margin: 5px;
          width: 40px;
          height: 40px;
          display: flex;
          background-color: rgba(255,255,255, .3);
          border: 1px solid #fff;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          cursor: pointer;
        }
        li:hover {
          background-color: rgba(255,255,255, .6);
        }
        a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>

      <style jsx global>{`
        *, *:before, *:after {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: #001970;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  )
}
