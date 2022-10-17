const blogData = [
  {
    id: "1",
    date: "10/16/2022",
    title: "First JavaScript!",
    img: "../first-javascript.png",
    text: "Today I wrote my first lines of JavaScript code! This code specifically allows me to get the information needed for these blog posts!",
  },
];

blogData.forEach((blog) => {
  const singleBlog = document.getElementById("blog-card-container");

  singleBlog.innerHTML = `
    <div id="js-card">
    <h4 id="blog-date">${blog.date}</h4>
    <h3 id="blog-title">${blog.title}</h3>
    <img id="blog-img" src="${blog.img}">
    <p id="blog-text">${blog.text}</p>
    </div>
  `;
});
