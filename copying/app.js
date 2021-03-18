// GETTING ALL VARRIABLES

var link = window.location.href;
var title = document.querySelector('#main .title');
var index = 0;
var next = document.getElementById('next-btn');
var content = document.querySelector('.content');
var txt = document.querySelector('.txt');

var form, box, popupCloseBtn, popupBtn, popupInput, proposeBtn;

form = document.querySelector('#popup-form');
box = document.querySelector('.popup-box');
popupInput = document.querySelector('.popup-input');
popupCloseBtn = document.querySelector('.popup-close');
popupBtn = document.querySelector('.popup-btn');
proposeBtn = document.querySelector('#propose-btn');

// VERIFYING THE LINK
if (link.indexOf('#') != -1 && link.indexOf('#') != (link.length - 1)) {
    // HIDING HADER AND SHOWING THE MAIN SECTION
    document.getElementById('header').classList.add('hide');
    document.getElementById('footer').classList.add('hide');
    document.getElementById('main').classList.remove('hide');
    // GETTING THE TITLE FROM LINK
    link = link.slice(link.indexOf('#') + 1);
    title.innerHTML = link;
}

// LINES THAT ARE STORING IN A ARRAY
var lines = [
    "তুমি সত্যি অসাধারণ, প্রথম দর্শনে প্রেমে পড়ে গেছি",
    "can’t stop thinking about you",
    "Found the reason for my smile, the day I found you. Will you let me be the reason for your smile?",
    "In you, my life becomes whole, with you my days become bright. In your hands I would love to lay, this night and for the rest of my life!",
    "আমি তোমার আয়না হতে চাই , যাকে তুমি সকালে ঘুম থেক উঠে দেখবে, খুশি হলে বিভিন্ন ভঙ্গিতে তাকাবে, তোমার ভ্যানিটি ব্যাগ এ রেখে দিবে, আর আমি আমার বুকে তোমাকে ধারন করে তোমার সেই ভঙ্গিগুলো অপলক দৃষ্টিতে তাকিয়ে থাকবো!!",
    "It was love at first sight, at last sight, at ever and ever sight.",
    "You deserve the world and all the good things it has to offer. If I fail to find that world for you, I promise to give you mine!",
    "আমার ভিতর বাহিরে অন্তরে অন্তরে আছো তুমি হৃদয় জুড়ে",
    "When the rain is blowing in your face and the whole world is on your case, I could offer you a warm embrace to make you feel my love.",
    "Hold my hand tight as I want to grow old with you from this day forth.",
    "তোমাকে দেখলে বুকের ভেতর ক্যান্সার জেগে ওঠে!",
    "I Love You Damn",
    "শুনো, ভাল্লাগে তোমাকে!",
    "যাচ্ছি বলে পিছনে ফিরে তাকানোর নাম প্রেম!",
    " Like the stars in the sky, my heart twinkles when I look into your eyes",
    "আমি প্রতিদিন যখন তোমার ফেসবুক আইডিতে ভিজিট করি মনে হয় দুনিয়ার সবচেয়ে সুন্দর জায়গায় আমি আছি যেখানে এক পরীর রাজ্য",
    "তুমি দুনিয়ার সকল কেকে এর চেয়েও এতো মিষ্টি কেন?",
    "My breath was incomplete, heartbeat incomplete, incomplete was I. But now the moon is full, complete in the sky. And now with you complete am I",
    "May my life's breath refuge in your heart . destroyed in your love may my life depart",
    "Don't destroy me!!!"

]

// MAKING FUNCTIONS

function load() {
    //MAKING BASIC ANIMATION
    content.classList.add('content-anim');
    txt.innerHTML = lines[index];
    setTimeout(() => {
        content.classList.remove('content-anim');
    }, 500)

    // WHILE INDEX REACH THE MAXIMUM NUMBER OF LINE
    if (index == (lines.length - 1)) {
        // STOP INCREASING INDEX
        index = (lines.length - 1);
    } else {
        // OTHERWISE INCREASING IT
        index++;
    }
}

function generate() {
    // VALIDATING BUTTON FOR COPY LINK
    if (popupBtn.innerHTML == "Copy") {
        // SELECTING LINK
        popupInput.select();
        popupInput.setSelectionRange(0, 99999);
        // COPYING LINK
        document.execCommand('copy');

        // RESTORING ITEMS
        popupBtn.innerHTML = "Submit";
        popupClose()
        // ALEART FOR COPYING
        alert('Link Is Copied \n \nNow Send This To Your Valentine')
    } else {
        // VALIDATING INPUT VALUE
        if (popupInput.value.length != 0) {
            // CONCATING THE LINK WITH NAME
            var pageLink = window.location.href + "#" + popupInput.value;
            popupInput.value = pageLink;
            // CHANGING BUTTON TEXT FOR COPY
            popupBtn.innerHTML = "Copy";
        } else {
            // ALEART FOR INVALID INPUT
            alert('Please Insert A Valid Name')
        }
    }
}

function popupOpen() {
    // MAKING POPUP VISIBLE WITH BASIC ANIMATION
    form.classList.remove('hide');
    setTimeout(() => {
        box.classList.add('box-anim');
    }, 10);
    setTimeout(() => {
        box.classList.remove('box-anim');
    }, 500);
}

function popupClose() {
    form.classList.add('hide');
    popupInput.value = "";
}

// CALLING THIS FUNCTION

next.addEventListener('click', load);
proposeBtn.addEventListener('click', popupOpen);
popupCloseBtn.addEventListener('click', popupClose);
popupBtn.addEventListener('click', generate);