fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
})
    .then(function(response){
       return response.json()
    })
    .then(function(posts){
        let htmls = posts.map(function(post){
            return `<li>${post.title}</li>`
        })
        document.querySelector('#show_post>ul').innerHTML = htmls.join("")
    })