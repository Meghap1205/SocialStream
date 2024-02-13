document.addEventListener('DOMContentLoaded', fetchPosts)

// Without USING ASYNC/AWAIT
function fetchPosts () {
  fetch('https://dummyjson.com/posts')
    .then((res) => res.json())
    .then((data) => renderPosts(data.posts))
}

// USING ASYNC/AWAIT
// async function fetchPosts() {
//     const posts = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//     ).then((res) => res.json())
//     renderPosts(posts)
// }

// Manually creating UI elements
// function renderPosts(posts) {
//     const feeds = document.querySelector(".feeds")
//     posts.forEach((post) => {
//         const p = document.createElement("p")
//         p.innerText = post.body

//         feeds.appendChild(p)
//     })
// }

// elements Using Template
function renderPosts (posts) {
  const feeds = document.querySelector('.feeds')
  const feedTemplate = document.querySelector('#feed-template')

  posts.forEach((post) => {
    const feed = feedTemplate.content.cloneNode(true)
    feed.querySelector('.feed-template a').href = `userPosts/userPosts.html?userId=${post.userId}`;

    feed.querySelector('.feed-template h6').innerText = post.userId
    feed.querySelector('.feed-template b').innerText = post.title
    feed.querySelector('.feed-template p').innerText = post.body

    feeds.appendChild(feed)
  })
}
