var count = 0;
// var countElement = document.querySelector("#count");
let likes = [0, 0, 0];

  function likePost(postIndex) {
    // Increase the like count for the respective post
    likes[postIndex]++;
  
    // Update the likes count text for the respective post element
    const likesCount = document.querySelectorAll('.likes-count')[postIndex];
    likesCount.textContent = likes[postIndex];
  }

  // const likeBtns = document.querySelectorAll('.like-btn');
// const posts = document.querySelectorAll('.post');

// likeBtns.forEach((btn, index) => {
//     btn.addEventListener('click', () => {
//       // Increase the like count for the respective post
//       likes[index]++;
      
//       // Update the likes count text for the respective post
//       const likesCount = post[index].querySelector('.likes-count');
//       likesCount.textContent = likes[index];
//     });
//   });