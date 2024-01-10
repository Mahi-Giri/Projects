//Complete this JS file to render the post1 on the screen with all the specified tags.
let post1 = {
    id: 1,
    author: 'John',
    content: 'My first Post!',
    likes: 10,
    comments: ['Great post!', 'Nice photo!'],
    image: 'https://files.codingninjas.in/image2-28694.jpg'
};

function renderPost() {
    const { comments } = post1;

    const posts = document.querySelector('#posts');

    const post = document.createElement('div');
    post.classList.add('post');
    posts.appendChild(post);

    const h3 = document.createElement('h3');
    h3.textContent = post1.author;
    post.appendChild(h3);

    const img = document.createElement('img');
    img.src = post1.image;
    post.appendChild(img);

    const para1 = document.createElement('p');
    para1.textContent = post1.content;
    post.appendChild(para1);

    const btn1 = document.createElement('button');
    btn1.textContent = 'Like';
    post.appendChild(btn1);

    const input = document.createElement('input');
    input.placeholder = 'Write a comment...';
    post.appendChild(input);

    const btn2 = document.createElement('button');
    btn2.textContent = 'Comment';
    btn2.classList.add('comment-btn');
    post.appendChild(btn2);

    const post_footer = document.createElement('div');
    post_footer.classList.add('post-footer');
    post_footer.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`
    post.appendChild(post_footer);

    const comment_container = document.createElement('div');
    comment_container.classList.add('comments-container')
    post.appendChild(comment_container);
    comment_container.style.display = 'none';

    comments.forEach(comment => {
        const para2 = document.createElement('p');
        para2.textContent = comment;
        comment_container.appendChild(para2);
    });

    const comment_btn = document.querySelector('.comment-btn');
    comment_btn.addEventListener('click', () => {
        comment_container.style.display = 'block';
    });
}

renderPost();