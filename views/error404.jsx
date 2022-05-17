const React = require('react')
const Def = require('./default')


function error404 () {
 return (
  <Def>
   <main>
     <h1>404: PAGE NOT FOUND</h1>
     <p>Oops, sorry, we can't find this page!</p>
     <div>
        <img src="/images/rotten-food-img.avif" alt="assorted rotten fruits" />
        <div>
          Photo by <a href="https://unsplash.com/@dslr_newb">Anita Jankovic</a> on <a href="https://unsplash.com/photos/Hv5s_VoIRJU">Unsplash</a>
        </div>
      </div>
   </main>
  </Def>
 )
}

module.exports = error404