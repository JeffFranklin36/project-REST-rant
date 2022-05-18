const React = require('react')
const Def = require('./default')

function home () {
 return (
  <Def>
    <main>
      <h1>HOME</h1>
      <div>
        <img src="/images/lobster-img.avif" alt="steamed red lobster" />
        <div>
          Photo by <a href="https://unsplash.com/@davidtoddmccarty">David Todd McCarty</a> on <a href="https://unsplash.com/photos/OrTjocYe1b4">Unsplash</a>
        </div>
      </div>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  </Def>
 )
}

module.exports = home