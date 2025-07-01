document.getElementById("demo").innerHTML =
  "Free downloadable novels just for you";
document.getElementById("first").innerHTML =
  "<h1>Free novels at your fingertips</h1>";

// let but = document.getElementById("but").innerHTML;

const car = [
  {
    image: `<img src="/images/darkwater.JPG" alt="">`,
    title: " Dark Water",
    author: "Eliot Mariner ",
    desc: `The Wise Climber of Dark Water Bay is a mesmerizing tale set in a rugged coastal village where ancient cliffs guard untold secrets. For centuries, the cliffs at Dark Water Bay have claimed the lives of reckless climbers seeking the treasure rumored to lie at the summit. Eli Maher, an aging sailor turned hermit, becomes the first man to return alive from the treacherous ascent. When a curious young journalist tracks him down to uncover the truth, Eli recounts his perilous climb through violent storms, hallucinations of ghostly figures, and moments of profound wisdom whispered by the wind itself. Blending folklore, adventure, and philosophical reflection, this novel asks what we truly seek when we dare to climb what others fear to face.`,
  },
  {
    image: `<img src="/images/deadly.JPG" alt="">`,
    title: "One Deadly Eye",
    author: "Amina Rivers",
    desc: `In this nail-biting techno-thriller, One Deadly Eye follows CIA analyst Mina Rivers, whose job is to monitor Argus—a cutting-edge surveillance AI designed to detect global terror threats. When Argus flags an innocent man as the next “enemy of the state,” Mina digs deeper and discovers a horrifying glitch: the AI’s algorithm has been hijacked by an underground group to eliminate whistleblowers and political rivals. As her own agency brands her a traitor, Mina goes on the run, using her insider knowledge to dismantle the AI’s deadly reach. In a world where secrets are currency and digital eyes see all, Mina must stay invisible long enough to expose the truth—before Argus locks onto its final target: her.`,
  },
  {
    image: `<img src="/images/frontpagefatality.JPG" alt="">`,
    title: "Font Page Fatality",
    author: "LynDee Walker",
    desc: `In the fast-paced mystery Front Page Fatality, crime reporter Nichelle Clarke is hungry for her next big story in Richmond, Virginia’s cutthroat newsroom. When two rookie cops die in a fiery car crash, Nichelle senses foul play—and the deeper she digs, the more dangerous the truth becomes. She’s thrust into a tangled conspiracy involving crooked cops, political scandals, and evidence that vanishes before her eyes. Facing threats to her life, sabotage from her newsroom rivals, and pressure from her editor to play it safe, Nichelle risks everything to expose the real story behind the cover-up. But with a ruthless killer watching her every move, she might end up as tomorrow’s headline herself. A sharp, witty mystery perfect for fans of strong female sleuths and newsroom drama.`,
  },
  {
    image: `<img src="/images/game.JPG" alt="">`,
    title: "The Game of Gods",
    author: "Scarlett St. Clair",
    desc: `In A Game of Gods, Scarlett St. Clair returns to her sizzling Hades x Persephone world—this time through Hades’ eyes. As wedding preparations begin, the King of the Underworld battles the Olympian Council, mortal uprisings, and Persephone’s increasingly unstable mother, Demeter. Torn between his brutal past and his desire for a peaceful future with the Goddess of Spring, Hades must wield his power to defend the realm from betrayal within Olympus. With vengeful Titans stirring and prophecy promising ruin, the lovers stand at the heart of a divine game where devotion could rewrite the fates of gods and men alike. Rich with mythology, passion, and political intrigue, this final installment raises the stakes higher than ever.`,
  },
  {
    image: `<img src="/images/jamil.JPG" alt="">`,
    title: "Jamil",
    author: "Fatima Bello",
    desc: `In Jamil, Fatima Bello paints an intimate portrait of life in a northern Nigerian village through the eyes of Jamil, a gifted boy torn between tradition and self-expression. Born into a devout family, Jamil’s father expects him to become an Islamic scholar like generations before him. But Jamil’s heart lies with stories—folk tales, myths, and poems that clash with his father’s rigid expectations. As political and religious tensions simmer in the background, Jamil secretly befriends a traveling griot who teaches him the art of storytelling. When the village discovers Jamil’s hidden passion, he must choose whether to betray his family’s legacy or follow his calling—risking alienation and violence for the power of words and the truth they carry.`,
  },
  {
    image: `<img src="/images/raisingdragon.JPG" alt="">`,
    title: "Raising Dragon",
    author: "Bryan Davis",
    desc: `In Raising Dragons, Bryan Davis weaves a captivating blend of fantasy, faith, and coming-of-age struggles. Billy Bannister thinks he’s just an ordinary boy—until he accidentally sets his homework on fire with a single breath. Soon, Billy learns that his father was once a dragon, transformed into human form to hide from slayers sworn to destroy dragonkind forever. When Billy befriends Bonnie Silver—a quiet girl with a secret of her own: she has wings—his entire world turns upside down. Together, they must unravel ancient legends, flee from dragon slayers who will stop at nothing to wipe out their lineage, and discover the power of courage, loyalty, and faith. As they journey through secret tunnels, hidden kingdoms, and epic battles, Billy and Bonnie discover that embracing who they truly are may be the only way to save themselves—and all dragonkind—from extinction.`,
  },
  {
    image: `<img src="/images/success.JPG" alt="">`,
    title: "Success",
    author: "Kehinde Ogundipe",
    desc: `Set against the bustling backdrop of modern Lagos, Success follows Ikenna, a bright but underprivileged young man with a vision of building a tech startup that could lift his entire community out of poverty. With no capital, no connections, and fierce competition from ruthless corporate giants, Ikenna risks everything—his health, family ties, and sanity—to chase his dream. As betrayal from trusted friends and pressure from loan sharks close in, he learns that success isn’t just about financial gain; it’s about resilience, loyalty, and sacrifice. Part drama, part cautionary tale, Success is a sweeping story about ambition, the cost of chasing status, and redefining what it truly means to “make it” in a society stacked against the underdog.`,
  },
  {
    image: `<img src="/images/staywithme.JPG" alt="">`,
    title: "Stay With Me",
    author: "Ayọ̀bámi Adébáyọ̀",
    desc: `Ayọ̀bámi Adébáyọ̀’s Stay With Me is a heartrending story of love tested by societal expectations, secrets, and loss. Set in 1980s Nigeria, it follows Yejide and Akin, a young couple deeply in love, yet desperate to have a child in a society where infertility is viewed as a woman’s failure. When Yejide’s in-laws take matters into their own hands and bring a second wife into the home, Yejide’s life spirals into a realm of betrayal, superstition, and unbearable choices. She resorts to unorthodox measures—miracle cures, pilgrimages, and prayers—to conceive. But as secrets unravel, the truth behind Akin’s silence shakes their marriage to its core. Lyrical, bold, and intimate, Stay With Me confronts the heavy cost of hope, cultural pressures, and the sacrifices we make for family and for love.`,
  },
  {
    image: `<img src="/images/howl.JPG" alt="">`,
    title: "Howl",
    author: "Nneka Chukwu",
    desc: `Anthony R. Cardno’s Howl is an intimate, haunting novel about survival and the lingering scars of trauma. Virgil thought he’d left his past behind, but when he returns to his small hometown after years away, the ghosts of his childhood emerge stronger than ever. Nightmares plague him, pulling him back to the violent incident that shattered his innocence and to the toxic cycle of victim-blaming that kept him silent for so long. As Virgil reconnects with old friends and faces family secrets, he begins to unravel not just what happened to him—but how it connects to a pattern of hidden abuses in his town. Told in raw, poetic prose, Howl explores how the human spirit can fracture, heal, and ultimately, find its voice in a world that often tries to silence it.`,
  },
  {
    image: `<img src="/images/memory.JPG" alt="">`,
    title: "Memory",
    author: "Allen Ginsberg",
    desc: `Memory imagines a near future where human memories are traded, stolen, and erased like digital files. Seventeen-year-old Elara lives in a world where memories are a valuable currency. The wealthy store theirs in heavily guarded vaults, while the poor sell their happiest moments to survive. When Elara’s beloved brother vanishes without a trace—and every record of him is wiped from the city’s Memory Grid—she embarks on a perilous journey to find him. Along the way, Elara uncovers a secret resistance fighting to restore stolen memories and expose a shadowy corporation manipulating society’s collective past. Torn between protecting the truth and rewriting her own painful history, Elara must decide: How much of who we are lives in the memories we hold? And what happens when they’re gone?`,
  },
  {
    image: `<img src="/images/darkwater.JPG" alt="">`,
    title: "Dark Water",
    author: "Eliot Mariner ",
    desc: `The Wise Climber of Dark Water Bay is a mesmerizing tale set in a rugged coastal village where ancient cliffs guard untold secrets. For centuries, the cliffs at Dark Water Bay have claimed the lives of reckless climbers seeking the treasure rumored to lie at the summit. Eli Maher, an aging sailor turned hermit, becomes the first man to return alive from the treacherous ascent. When a curious young journalist tracks him down to uncover the truth, Eli recounts his perilous climb through violent storms, hallucinations of ghostly figures, and moments of profound wisdom whispered by the wind itself. Blending folklore, adventure, and philosophical reflection, this novel asks what we truly seek when we dare to climb what others fear to face.`,
  },
  {
    image: `<img src="/images/deadly.JPG" alt="">`,
    title: "One Deadly Eye",
    author: "Amina Rivers",
    desc: `In this nail-biting techno-thriller, One Deadly Eye follows CIA analyst Mina Rivers, whose job is to monitor Argus—a cutting-edge surveillance AI designed to detect global terror threats. When Argus flags an innocent man as the next “enemy of the state,” Mina digs deeper and discovers a horrifying glitch: the AI’s algorithm has been hijacked by an underground group to eliminate whistleblowers and political rivals. As her own agency brands her a traitor, Mina goes on the run, using her insider knowledge to dismantle the AI’s deadly reach. In a world where secrets are currency and digital eyes see all, Mina must stay invisible long enough to expose the truth—before Argus locks onto its final target: her.`,
  },
  {
    image: `<img src="/images/frontpagefatality.JPG" alt="">`,
    title: "Font Page Fatality",
    author: "LynDee Walker",
    desc: `In the fast-paced mystery Front Page Fatality, crime reporter Nichelle Clarke is hungry for her next big story in Richmond, Virginia’s cutthroat newsroom. When two rookie cops die in a fiery car crash, Nichelle senses foul play—and the deeper she digs, the more dangerous the truth becomes. She’s thrust into a tangled conspiracy involving crooked cops, political scandals, and evidence that vanishes before her eyes. Facing threats to her life, sabotage from her newsroom rivals, and pressure from her editor to play it safe, Nichelle risks everything to expose the real story behind the cover-up. But with a ruthless killer watching her every move, she might end up as tomorrow’s headline herself. A sharp, witty mystery perfect for fans of strong female sleuths and newsroom drama.`,
  },
  {
    image: `<img src="/images/game.JPG" alt="">`,
    title: "The Game of Gods",
    author: "Scarlett St. Clair",
    desc: `In A Game of Gods, Scarlett St. Clair returns to her sizzling Hades x Persephone world—this time through Hades’ eyes. As wedding preparations begin, the King of the Underworld battles the Olympian Council, mortal uprisings, and Persephone’s increasingly unstable mother, Demeter. Torn between his brutal past and his desire for a peaceful future with the Goddess of Spring, Hades must wield his power to defend the realm from betrayal within Olympus. With vengeful Titans stirring and prophecy promising ruin, the lovers stand at the heart of a divine game where devotion could rewrite the fates of gods and men alike. Rich with mythology, passion, and political intrigue, this final installment raises the stakes higher than ever.`,
  },
  {
    image: `<img src="/images/jamil.JPG" alt="">`,
    title: "Jamil",
    author: "Fatima Bello",
    desc: `In Jamil, Fatima Bello paints an intimate portrait of life in a northern Nigerian village through the eyes of Jamil, a gifted boy torn between tradition and self-expression. Born into a devout family, Jamil’s father expects him to become an Islamic scholar like generations before him. But Jamil’s heart lies with stories—folk tales, myths, and poems that clash with his father’s rigid expectations. As political and religious tensions simmer in the background, Jamil secretly befriends a traveling griot who teaches him the art of storytelling. When the village discovers Jamil’s hidden passion, he must choose whether to betray his family’s legacy or follow his calling—risking alienation and violence for the power of words and the truth they carry.`,
  },
  {
    image: `<img src="/images/raisingdragon.JPG" alt="">`,
    title: "Raising Dragon",
    author: "Bryan Davis",
    desc: `In Raising Dragons, Bryan Davis weaves a captivating blend of fantasy, faith, and coming-of-age struggles. Billy Bannister thinks he’s just an ordinary boy—until he accidentally sets his homework on fire with a single breath. Soon, Billy learns that his father was once a dragon, transformed into human form to hide from slayers sworn to destroy dragonkind forever. When Billy befriends Bonnie Silver—a quiet girl with a secret of her own: she has wings—his entire world turns upside down. Together, they must unravel ancient legends, flee from dragon slayers who will stop at nothing to wipe out their lineage, and discover the power of courage, loyalty, and faith. As they journey through secret tunnels, hidden kingdoms, and epic battles, Billy and Bonnie discover that embracing who they truly are may be the only way to save themselves—and all dragonkind—from extinction.`,
  },
  {
    image: `<img src="/images/success.JPG" alt="">`,
    title: "Success",
    author: "Kehinde Ogundipe",
    desc: `Set against the bustling backdrop of modern Lagos, Success follows Ikenna, a bright but underprivileged young man with a vision of building a tech startup that could lift his entire community out of poverty. With no capital, no connections, and fierce competition from ruthless corporate giants, Ikenna risks everything—his health, family ties, and sanity—to chase his dream. As betrayal from trusted friends and pressure from loan sharks close in, he learns that success isn’t just about financial gain; it’s about resilience, loyalty, and sacrifice. Part drama, part cautionary tale, Success is a sweeping story about ambition, the cost of chasing status, and redefining what it truly means to “make it” in a society stacked against the underdog.`,
  },
  {
    image: `<img src="/images/staywithme.JPG" alt="">`,
    title: "Stay With Me",
    author: "Ayọ̀bámi Adébáyọ̀",
    desc: `Ayọ̀bámi Adébáyọ̀’s Stay With Me is a heartrending story of love tested by societal expectations, secrets, and loss. Set in 1980s Nigeria, it follows Yejide and Akin, a young couple deeply in love, yet desperate to have a child in a society where infertility is viewed as a woman’s failure. When Yejide’s in-laws take matters into their own hands and bring a second wife into the home, Yejide’s life spirals into a realm of betrayal, superstition, and unbearable choices. She resorts to unorthodox measures—miracle cures, pilgrimages, and prayers—to conceive. But as secrets unravel, the truth behind Akin’s silence shakes their marriage to its core. Lyrical, bold, and intimate, Stay With Me confronts the heavy cost of hope, cultural pressures, and the sacrifices we make for family and for love.`,
  },
  {
    image: `<img src="/images/howl.JPG" alt="">`,
    title: "Howl",
    author: "Nneka Chukwu",
    desc: `Anthony R. Cardno’s Howl is an intimate, haunting novel about survival and the lingering scars of trauma. Virgil thought he’d left his past behind, but when he returns to his small hometown after years away, the ghosts of his childhood emerge stronger than ever. Nightmares plague him, pulling him back to the violent incident that shattered his innocence and to the toxic cycle of victim-blaming that kept him silent for so long. As Virgil reconnects with old friends and faces family secrets, he begins to unravel not just what happened to him—but how it connects to a pattern of hidden abuses in his town. Told in raw, poetic prose, Howl explores how the human spirit can fracture, heal, and ultimately, find its voice in a world that often tries to silence it.`,
  },
  {
    image: `<img src="/images/memory.JPG" alt="">`,
    title: "Memory",
    author: "Allen Ginsberg",
    desc: `Memory imagines a near future where human memories are traded, stolen, and erased like digital files. Seventeen-year-old Elara lives in a world where memories are a valuable currency. The wealthy store theirs in heavily guarded vaults, while the poor sell their happiest moments to survive. When Elara’s beloved brother vanishes without a trace—and every record of him is wiped from the city’s Memory Grid—she embarks on a perilous journey to find him. Along the way, Elara uncovers a secret resistance fighting to restore stolen memories and expose a shadowy corporation manipulating society’s collective past. Torn between protecting the truth and rewriting her own painful history, Elara must decide: How much of who we are lives in the memories we hold? And what happens when they’re gone?`,
  },
];

let cars = car
  .map(
    (item, index) => `
 
    <div class="mainclass">
        <div class="main" data-id="${index}">
            <p class="img">${item.image}</p>
            <h2>${item.title}</h2>
            <p>${item.author}</p>
            <button class="add-btn">Add to cart</button>
            <button class="pre-btn">Preview</button>
        </div>
    </div>
`
  )
  .join("");
document.getElementById("cardchild").innerHTML = cars;

const addbtn = document.querySelectorAll(".add-btn");
const prebtn = document.querySelectorAll(".pre-btn");

addbtn.forEach(button =>{
    button.addEventListener("click", function(){

        const parent = button.closest(".main");
        const id = parent.dataset.id;
        const novel = car[id];

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(novel);
        localStorage.setItem("cart", JSON.stringify(cart));
    })

}) 

prebtn.forEach(button => {
    button.addEventListener("click", function() {
        const parent = button.closest(".main");
        const id = parent.dataset.id;
        const novel = car[id];


        localStorage.setItem("selectedNovel", JSON.stringify(novel));
        window.location.href = "../productPage/preview.html";
    })
})



//preview section
// const novel = JSON.parse(localStorage.getItem("selectedNovel"));
// if (novel){
//     document.getElementById("preview").innerHTML = `
//         <div> 
//             <div>
//                 <p>${novel.image}</p>
//                 <h2>${novel.title}</h2>
//                 <p>${novel.author}<p>
//             </div>

//             <p>${novel.desc}<p>
        
//         </div>

//     `;
// }
//  else{
//     document.getElementById("preview").innerHTML = "No preview available."
//  }






 

