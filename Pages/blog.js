const blogData = [
  {
    id: "1",
    date: "10/16/2022",
    title: "First JavaScript!",
    img: "../jsfirstcode.png",
    text: "Today I wrote my first lines of JavaScript code! This code specifically allows me to get the information needed for these blog posts!",
  },
  {
    id: "2",
    date: "10/17/2022",
    title: "Drop Down Menu!",
    img: "../menu.png",
    text: "Today I spend most of my time creating the site's navigation menu! It took me a while and I had to write some new JavaScript that implemented the drop down function.",
  },
];

blogData.forEach((blog) => {
  const singleBlog = document.getElementById("blog-card-container");
  const childDiv = document.createElement("div");
  childDiv.id = "js-card";

  childDiv.innerHTML = `
    <h4 id="blog-date">${blog.date}</h4>
    <h3 id="blog-title">${blog.title}</h3>
    <img id="blog-img" src="${blog.img}">
    <p id="blog-text">${blog.text}</p>
  `;

  singleBlog.appendChild(childDiv);
  // singleBlog.innerHTML = `
  //   <div id="js-card">
  //   <h4 id="blog-date">${blog.date}</h4>
  //   <h3 id="blog-title">${blog.title}</h3>
  //   <img id="blog-img" src="${blog.img}">
  //   <p id="blog-text">${blog.text}</p>
  //   </div>
  // `;
});
