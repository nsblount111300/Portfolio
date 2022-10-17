import blogData from "./blogs.json" assert { type: "json" };
// const blogContainer = document.getElementById("blog-card-container");

blogData.forEach((blog) => {
  const singleBlog = document.getElementById("blog-card-container");
  const blogDiv = document.createElement("div");
  blogDiv.setAttribute("id", "js-card");

  const blogDate = document.createElement("h4");
  blogDate.setAttribute("id", "blog-date");
  blogDate.innerText = `${blog.date}`;

  const blogTitle = document.createElement("h3");
  blogTitle.setAttribute("id", "blog-title");
  blogTitle.innerText = blog.title;

  const blogText = document.createElement("p");
  blogText.setAttribute("id", "blog-text");
  blogText.innerText = blog.text;

  const blogImg = document.createElement("img");
  blogImg.setAttribute("id", "blog-img");
  blogImg.src = blog.img;

  singleBlog.appendChild(blogDiv);
  blogDiv.appendChild(blogDate);
  blogDiv.appendChild(blogTitle);
  blogDiv.appendChild(blogImg);
  blogDiv.appendChild(blogText);
  // singleBlog.innerHTML = `
  //   <div id="js-card">
  //   <h4 id="blog-date">${blog.date}</h4>
  //   <h3 id="blog-title">${blog.title}</h3>
  //   <img id="blog-img" src="${blog.img}">
  //   <p id="blog-text">${blog.text}</p>
  //   </div>
  // `;
  // blogContainer.appendChild(singleBlog);
});
