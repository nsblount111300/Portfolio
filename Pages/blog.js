const blogData = [
  {
    id: "1",
    date: "10/16/2022",
    title: "First JavaScript!",
    img: "../Images/jsfirstcode.png",
    text: "Today I wrote my first lines of JavaScript code! This code specifically allows me to get the information needed for these blog posts!",
  },
  {
    id: "2",
    date: "10/17/2022",
    title: "Drop Down Menu!",
    img: "../Images/menu.png",
    text: "Today I spent most of my time creating the site's navigation menu! It took me a while and I had to write some new JavaScript that implemented the drop down function.",
  },
  {
    id: "3",
    date: "10/18/2022",
    title: "Weather App!",
    img: "../Images/weather-app.png",
    text: "My first project! I worked on a weather app today which involved setting up a search function to get data from an API to display on a card.",
  },
  {
    id: "4",
    date: "10/20/2022",
    title: "Song Lyrics Finder!",
    img: "../Images/song-lyrics-app.png",
    text: "I've made a song lyric finder app! This uses an api that gets the lyrics to a song if the user provides a band name and song title. It was really fun to make and will be pretty useful personally since I do a lot of song lyric searching.",
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
