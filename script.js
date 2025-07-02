const data = [
  {
    image: '<img src="/images/television.svg"> ',
    heading: "Digital Products",
    desc: "Sell any and every kind of digital product, from content packs to designs to bundles and more without stress.",
  },
  {
    image: '<img src="/images/ebook.svg"> ',
    heading: "Ebooks",
    desc: "Selar is the best platform to sell your ebooks both downloadable and non-downloadable in any format.",
  },
  {
    image: '<img src="/images/courses.svg"> ',
    heading: "Courses and Membership",
    desc: "You can host your courses & membership sites with unlimited videos & files, unlimited storage, and have unlimited students, plus you get content security to prevent theft.",
  },
  {
    image: '<img src="/images/ticket.svg"> ',
    heading: "Event Tickets and Training",
    desc: "Sell tickets for all kinds of events and access to masterclasses, events, workshops, training, webinars, and even more.",
  },
  {
    image: '<img src="/images/services.svg"> ',
    heading: "Services",
    desc: "Sell any kind of service, from coaching services to consultations to counseling sessions to design services and more.",
  },
  {
    image: '<img src="/images/goods.svg"> ',
    heading: "Physical Goods",
    desc: "You can also use Selar to sell your physical product from clothing to books to electronics and appliances and more.",
  },
];

let products = data 
.map(
    (item) => `
    <div>
        <p>${item.image}</P>
        <h3>${item.heading}</h3>
        <p>${item.desc}</p>
    
    </div>
    `
)
.join("");
document.getElementById("demo").innerHTML = products;

const words = ["audiences", "fans", "followers" ,"supporters"];
const wordSpan = document.getElementById("word");

let word = 0; 
let letter = 0; 
let deleting = false;

function type() {
  let currentWord = words[word];

  if (deleting) {
    letter--; 
  } else {
    letter++; 
  }

  wordSpan.textContent = currentWord.slice(0, letter);

  if (!deleting && letter === currentWord.length) {
    deleting = true;
    setTimeout(type, 1000); 
    return;
  }

  if (deleting && letter === 0) {
    deleting = false;
    word++;
    if (word === words.length) {
      word = 0; // go back to first word
    }
  }

  let speed = deleting ? 50 : 100;
  setTimeout(type, speed);
}

type();

const tool = [
  {
    image: '<img src="/images/affilate.svg" alt=""> ',
    heading: "Affiliates",
    desc: "Set up your own affiliate marketing system, and give a commission for anyone that facilitates a sale for your store.",
    link: '<a href="#" >Learn More</a>',
  },

  {
    image: '<img src="/images/page.svg" alt=""> ',
    heading: "Sales Page",
    desc: "Create custom sales/landing pages for your products. Descriptive sales pages drive more conversions.",
    link: '<a href="#" >Learn More</a>',
  },

  {
    image: '<img src="/images/follow.svg" alt=""> ',
    heading: "Automated Follow-ups",
    desc: "Never miss a prospective buyer with Selar's automated follow ups. Proven to drive conversions by at least 30%.",
    link: '<a href="#" >Learn More</a>',
  },
];

let right = tool
  .map(
    (item) => `
  <div class="tools-class">
  
  <div class=item>
  <p>${item.image}</P>
  <h2>${item.heading}</h2>
  <p>${item.desc}</p>
  <p>${item.link}</p>
  </div>

`
  )
  .join("");
document.getElementById("tools").innerHTML = right;


let navlink = document.getElementById("navlink");
function show(){
  navlink.style.right = "0"

}
function hide() {
  navlink.style.right = "-200px";
}

const testimonials = [
  {
    text: "This site is amazing! I love the selection of free novels.",
    name: "Jane Doe",
    occupation: "Book Blogger",
    image: `<img src="/images/steve.PNG" alt="Jane Doe">`,
  },
  {
    text: "Fantastic user experience. Downloading novels has never been easier.",
    name: "John Smith",
    occupation: "Freelance Writer",
    image: `<img src="/images/tri.PNG" alt="John Smith">`,
  },
  {
    text: "Highly recommend this platform to all book lovers.",
    name: "Sarah Johnson",
    occupation: "Editor",
    image: `<img src="/images/steve.PNG" alt="Sarah Johnson">`,
  },
];

let index = 0;

const textEl = document.getElementById("testimonial-text");
const nameEl = document.getElementById("testimonial-name");
const occupationEl = document.getElementById("testimonial-occupation");
const imageEl = document.getElementById("testimonial-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const card = document.getElementById("testimonial-card");

function showTestimonial(i) {
  textEl.textContent = testimonials[i].text;
  nameEl.textContent = testimonials[i].name;
  occupationEl.textContent = testimonials[i].occupation;
  imageEl.innerHTML = testimonials[i].image;
}

showTestimonial(index);

function flip(direction) {
  // Add flip class
  if (direction === "next") {
    card.classList.add("flip-next");
  } else {
    card.classList.add("flip-prev");
  }

  // After animation, reset transform & show next testimonial
  setTimeout(() => {
    card.classList.remove("flip-next");
    card.classList.remove("flip-prev");

    showTestimonial(index);
  }, 700); // match transition time
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  flip("prev");
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  flip("next");
});
