// ---- Write code below ---- \\
function dinner(){
    let food = prompt("Name a food");
    let smthStrange = prompt("Name something strange");
    let adj = prompt("Name an adjective");
    let animal = prompt("Name an animal");
    let verb = prompt("Name a verb");
    let obj = prompt("Name a object");
    let funnyQuote = prompt("Name a funny quote");
    let funnyQuote2 = prompt("Name a funny quote");
    document.getElementById("output").innerHTML = `
    <p>The dinner party started with a dish of ${food} that smelled like ${smthStrange}. 
    Suddenly, a ${adj} ${animal} appeared and started ${verb}ing on the table! 
    The host grabbed a ${obj} and yelled "${funnyQuote}!" 
    We all laughed and said "${funnyQuote2}." It was unforgettable!</p>
    `;
}

function mystery(){
    let adj = prompt("Name an adjective");
    let place = prompt("Name a place");
    let sound = prompt("Name a sound");
    let sName1 = prompt("Name a Silly Name");
    let obj = prompt("Name an object");
    let noun = prompt("Name a Noun");
    let name = prompt("Name a Name");
    let jobTitle = prompt("Name a Job Title");
    let verb = prompt("Name a Verb");
    let subst = prompt("Name a Substance");
    let food = prompt("Name a Food");
    document.getElementById("output").innerHTML = `
    <p>On a(n) ${adj} night in the grand ${place}, a loud ${sound} revealed Lord ${sName1} lying beside a ${obj}, muttering, "It was the ${noun}!"
    Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction. 
    It turns out Lord ${sName1} had slipped on ${subst} while trying to steal a plate of ${food}.
    Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
    `;
}

function travel(){
    let hF = prompt("Name a historical figure");
    let place = prompt("Name a place");
    let obj = prompt("Name an object");
    let pNoun = prompt("Name a plural noun");
    let adj1 = prompt("Name an adjective");
    let verb = prompt("Name a verb");
    let eInTime = prompt("Name a historical event");
    let sName = prompt("Name a silly name");
    let adj2 = prompt("Name an adjective");
    document.getElementById("output").innerHTML = `
  <p>Your time machine malfunctions, and a ${hF} steals your homework escaping to ${place}!
  Armed with a ${obj}, you chase them through time, dodging ${pNoun} and a ${adj1} dinosaur trying to ${verb} you.
  You finally catch the thief at the ${eInTime} and grab your homework just time.
  Back in class, your teacher, ${sName}, says, "That's the most ${adj2} excuse ever!" But hey, you got an A!</p>
  `;
}
