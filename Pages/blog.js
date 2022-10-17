// import blogData from "./blogs.json" assert { type: "json" };
// const blogContainer = document.getElementById("blog-card-container");
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
  // const blogDiv = document.createElement("div");
  // blogDiv.setAttribute("id", "js-card");

  // const blogDate = document.createElement("h4");
  // blogDate.setAttribute("id", "blog-date");
  // blogDate.textContent = `${blog.date}`;

  // const blogTitle = document.createElement("h3");
  // blogTitle.setAttribute("id", "blog-title");
  // blogTitle.textContent = blog.title;

  // const blogText = document.createElement("p");
  // blogText.setAttribute("id", "blog-text");
  // blogText.textContent = blog.text;

  // const blogImg = document.createElement("img");
  // blogImg.setAttribute("id", "blog-img");
  // blogImg.src = blog.img;

  // singleBlog.appendChild(blogDiv);
  // blogDiv.appendChild(blogDate);
  // blogDiv.appendChild(blogTitle);
  // blogDiv.appendChild(blogImg);
  // blogDiv.appendChild(blogText);
  singleBlog.innerHTML = `
    <div id="js-card">
    <h4 id="blog-date">${blog.date}</h4>
    <h3 id="blog-title">${blog.title}</h3>
    <img id="blog-img" src="${blog.img}">
    <p id="blog-text">${blog.text}</p>
    </div>
  `;
  // blogContainer.appendChild(singleBlog);
});
