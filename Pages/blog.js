import blogData from "./blogs.json" assert { type: "json" };
const blogContainer = document.getElementById("blog-card-container");

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
  blogContainer.appendChild(singleBlog);
});
