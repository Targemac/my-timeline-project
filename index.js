const usersDB = [
  {
    id: 1,
    name: "Mathias",
    time: "12:45pm",
    comment: "Hello friends, i just arrived from lagos, can we meet up ?",
  },
  {
    id: 2,
    name: "Kabala",
    time: "12:40pm",
    comment: "my first experience at torbita",
  },
  {
    id: 3,
    name: "Chinedu",
    time: "06:48am",
    comment: "Good morning everybody",
  },
  {
    id: 4,
    name: "Ofega",
    time: "04:30am",
    comment: "Coding is awesome",
  },
  {
    id: 5,
    name: "Musa",
    time: "04:00am",
    comment: "Lets have fun",
  },
  {
    id: 6,
    name: "Gustavo",
    time: "03:59am",
    comment: "No sleep for the weekend",
  },
  {
    id: 7,
    name: "Salihu",
    time: "03:30am",
    comment: "I'm good to go!",
  },
  {
    id: 8,
    name: "Fuje",
    time: "03:15am",
    comment: "How are you doing?",
  },
  {
    id: 9,
    name: "Columbus",
    time: "0:55am",
    comment: "How are you doing today?",
  },
];

const displayFeed = document.getElementById("displayFeed");

let html = "";

usersDB.map((user, index, aray) => {
  html =
    html +
    `<div class="my-timeline-feed-grp">
        <div class="my-timeline-feed-grp-col-1">
        <img src="./char1.png" alt="" />
        </div>
        <div class="my-timeline-feed-grp-col-2">
        <div class="my-timeline-feed-grp-col-2-row-1">${user.name}</div>
        <div class="my-timeline-feed-grp-col-2-row-2">${user.time}</div>
        <div class="my-timeline-feed-grp-col-2-row-3">${user.comment}</div>
        </div>
     </div>`;
});

displayFeed.innerHTML = html;
