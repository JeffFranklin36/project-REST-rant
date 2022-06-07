const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>Located in { data.place.city }, { data.place.state } and serving { data.place.cuisines }</p>
            <h2>Comments</h2>
            <div className="row">
              {comments}
            </div>
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div>
                <div>
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content"></textarea>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author"/>
                </div>
                <div>
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>
                </div>
                <div>
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant"/>
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"><i class="fa-solid fa-pencil"></i> Edit</a> 
            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
             <button type ='submit' className='btn btn-danger'><i class="fa-solid fa-trash-can"></i> Delete
             </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
