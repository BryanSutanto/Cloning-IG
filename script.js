const photoContainer = document.getElementById("photo-container");
fetch('https://pixabay.com/api/?key=27288807-7c18b43e45aba5d7e6b6f5102&q=yellow+flowers&image_type=photo')
.then(res => res.json())
.then(data => data.hits.forEach(element => {
    const divImg = document.createElement("div")
    divImg.setAttribute("class", "img-wrapper")
    const newImg = document.createElement("img")
    newImg.src = element.webformatURL
    divImg.append(newImg)
    photoContainer.append(divImg)
    console.log(element);

    const divInfo = document.createElement("div")
    divInfo.setAttribute("class", "img-info-wrapper")

    const divLike = document.createElement("div")
    divLike.setAttribute("class", "like-wrapper")
    const divComment = document.createElement("div")
    divComment.setAttribute("class", "comment-wrapper")

    const divLikeImg = document.createElement("div")
    divLikeImg.setAttribute("class", "like-image-wrapper")
    const divCommentImg = document.createElement("div")
    divCommentImg.setAttribute("class", "comment-image-wrapper")

    const newLike = document.createElement("img")
    const newComment = document.createElement("img")
    const newLikeText = document.createElement("span")
    const newCommentText = document.createElement("span")
    
    
    newLike.src = "./assets/png/like.png"
    newComment.src = "./assets/png/comment.png"
    newCommentText.innerHTML = element.comments
    newLikeText.innerHTML = element.likes

    divLikeImg.append(newLike)
    divLike.append(divLikeImg)
    divLike.append(newLikeText)
    divInfo.append(divLike)
    divCommentImg.append(newComment)
    divComment.append(divCommentImg)
    divComment.append(newCommentText)
    divInfo.append(divComment)
    divImg.append(divInfo)
    
    divInfo.addEventListener("mouseenter", (e) => {
        e.target.classList.add("visible")
    })
    
    divInfo.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("visible")
    })
}))


// fetch(
//   "https://pixabay.com/api/?key=27288807-7c18b43e45aba5d7e6b6f5102&q=yellow+flowers&image_type=photo"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     const imagesEl = data.hits.map((img) => {
//       const newImg = document.createElement("img");
//       newImg.src = img.webformatURL;
//       return newImg;
//     });

//     console.log('imagesEl', imagesEl)
//     photoContainer.appendChildren(imagesEl)
//   });
