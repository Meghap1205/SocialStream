document.addEventListener('DOMContentLoaded', getUserPosts);

function getUserPosts() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (!userId) {
        console.error('User ID not provided.');
        return;
    }

    fetch(`https://dummyjson.com/posts/${userId}`)
        .then(response => response.json())
        .then(userPost => renderUserPost(userPost))
        .catch(error => console.error('Error fetching user post:', error));
}

function renderUserPost(userPost) {
    const userPostsContainer = document.querySelector('.user-posts');

    const userPostHTML = `
        <div class="user-post">
            <b>${userPost.title}</b><br></br>
            <p>${userPost.body}</p>
            <p>Tags: ${userPost.tags.join(', ')}</p>
            <p>Reactions: ${userPost.reactions}</p>
        </div>
    `;

    userPostsContainer.innerHTML = userPostHTML;
}
