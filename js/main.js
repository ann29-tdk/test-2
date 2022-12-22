let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, mera naam Medico hai", "My name is Meidco", "I am Medico"];
let help = ["Kaisi madad chahiye aapko"];
let appointment = ["Doctor book ke liye login karo", "What speciality doctor do you want"];
let doctor = ["Doctor is available", "Sorry no doctor is available right now", "Doctor will be available soon"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is test message";
    if (message.includes('who are you')) {
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if (message.includes('help')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if (message.includes('appointment')) {
        let finalresult = appointment[Math.floor(Math.random() * appointment.length)];
        speech.text = finalresult;
    }
    if (message.includes('doctor')) {
        let finalresult = doctor[Math.floor(Math.random() * doctor.length)];
        speech.text = finalresult;
    }

    // if (message.includes('tell me something about you' || 'tell me something about your hobbies')) {
    //     let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
    //     speech.text = finalresult;
    // }
    // if (message.includes('pizza')) {
    //     let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
    //     speech.text = finalresult;
    // }
    // if (message.includes('thank you' || 'thank you so much')) {
    //     let finalresult = thank[Math.floor(Math.random() * thank.length)];
    //     speech.text = finalresult;
    // }
    // if (message.includes('talk to you' || 'talk')) {
    //     let finalresult = closing[Math.floor(Math.random() * closing.length)];
    //     speech.text = finalresult;
    // }
    // if (message.includes('book an appointment' || 'look for a doctor')) {
    //     let finalresult = doctor[Math.floor(Math.random() * doctor.length)];
    //     speech.text = finalresult;
    // }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend = function () {
    mic.style.background = "#ff3b3b";
}
mic.addEventListener("click", function () {
    mic.style.background = '#39c81f';
    recognition.start();
    console.log("Activated");
})
