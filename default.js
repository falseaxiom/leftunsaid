/* frontyard, goinghome, AND credits ARE NOT CONNECTED TO THIS PAGE.
REMEMBER TO UPDATE THOSE FILES TOO IF NEEDED */

/*** VARIABLES ***/
// dialog generic
let dark = document.getElementById("dark");
let textbox = document.getElementById("textbox");
let text = document.getElementById("text");
let charname = document.getElementById("charname");
let dialog = document.getElementById("dialog");
let usuzy = document.getElementById("usuzy");
// choices
let dark2 = document.getElementById("dark2");
let choicebox = document.getElementById("choicebox");
let choicehelper = document.getElementById("choicehelper");
let choice0 = document.getElementById("choice0");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
// yearbook
let dark3 = document.getElementById("dark3");
let page = document.getElementById("page");
// keep track of what dialog ur on
let currentDialog = ["", 0];

/*** SETUP ***/
// if yearbook picked up, display in inventory
if (localStorage.getItem("y") == 1) {
    unhide(document.getElementById("uyearbook"));
}
// display return item based on branch
if (localStorage.getItem("talk1") == 0) {
    switch (localStorage.getItem("branch1")) {
        case "anvi":
            unhide(document.getElementById("ubracelet"));
            break;
        case "ryan":
            unhide(document.getElementById("uscrunchie"));
            break;
        case "lisa":
            unhide(document.getElementById("ulighter"));
            break;
        default:
            break;
    }
}    
// show trash if some picked up
if (localStorage.getItem("trash") != "") unhide(document.getElementById("utrash"));
// hide suzy if she's missing
if (localStorage.getItem("suzy") != 0) {
    console.log("suzy is missing!!!");
    hide(document.getElementById("usuzy"));
    unhide(document.getElementById("unosuzy"));
}

/*** GENERAL FUNCTIONS ***/
// borrowed from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
// hide/unhide items
function hide(div) { div.classList.add("hidden"); }
function unhide(div) { div.classList.remove("hidden"); }
// check if div is hidden
function isHidden(div) { return div.classList.contains("hidden"); }
// hide/unhide dialog
function toggleDialog() {
    console.log("toggling dialog...")
    if (isHidden(dark)) {
        console.log("dialog is hidden")
        unhide(dark);
        unhide(textbox);
        unhide(text);
        hide(usuzy);
        hide(unosuzy);
    }
    else {
        console.log("dialog is not hidden")
        hide(dark);
        hide(textbox);
        hide(text);
        if (localStorage.getItem("suzy") == 0) unhide(usuzy);
        else unhide(unosuzy);
    }
}
// show/hide choicebox
function toggleChoices() {
    if (isHidden(dark2)) { unhide(dark2); unhide(choicebox); }
    else {
        hide(dark2);
        hide(choicebox);
        if (!isHidden(choice0)) hide(choice0);
        if (!isHidden(choice1)) hide(choice1);
        if (!isHidden(choice2)) hide(choice2);
    }
}
// extract choices
function getChoices(str, name="") {
    toggleChoices();
    console.log("making a choice...");
    let choices = str.split("_");
    console.log(choices);
    choices.shift();

    if (localStorage.getItem("y") == 0) { // if yearbook not picked up
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].substring(0,2) != "yy") continue;
            choices.splice(i,1);
            break;
        }
    }
    else { // if yearbook picked up and speaker already signed
        let sigs = localStorage.getItem("sigs").split("_");
        sigs.shift();
        if (sigs.includes(name)) {
            for (let i = 0; i < choices.length; i++) {
            if (choices[i].substring(0,2) != "yy") continue;
            choices.splice(i,1);
            break;
        }
        }
    }
    if (localStorage.getItem("suzy") == 2) { // if suzy's missing
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].substring(0,2) != "gg") continue;
            choices.splice(i,1);
            break;
        }
    }
    else { // if suzy's not missing yet
        for (let i = 0; i < choices.length; i++) {
            if (choices[i].substring(0,2) != "ss") continue;
            choices.splice(i,1);
            break;
        }
    }
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].substring(0,2) == "yy") choices[i] = choices[i].replace("yy","");
        if (choices[i].substring(0,2) == "gg") choices[i] = choices[i].replace("gg","");
        if (choices[i].substring(0,2) == "ss") choices[i] = choices[i].replace("ss","");
        choices[i] = choices[i].split("^");
        let cbox = document.getElementById("choice"+i);
        unhide(cbox);
        cbox.innerHTML = choices[i][0];
        cbox.title = choices[i][1];
    }
}
// hide/unhide yearbook
function toggleYearbook() {
    isHidden(dark3) ? unhide(dark3) : hide(dark3);

    // if no signatures, simply hide/unhide blank page
    if (!localStorage.getItem("sigs")) {
        isHidden(page) ? unhide(page) : hide(page);
        return;
    }

    // hide/unhide sigs according to who's already signed
    let sigs = localStorage.getItem("sigs").split("_");
    sigs.shift();
    if (isHidden(page)) {
        unhide(page);
        for (let i = 0; i < sigs.length; i++) {
            unhide(document.getElementById("y"+sigs[i]));
        }
    }
    else {
        hide(page);
        for (let i = 0; i < sigs.length; i++) {
            hide(document.getElementById("y"+sigs[i]));
        }
    }
}
// go home
function home() {
    location.href = "./index2.html";
}
// reset game
function reset() {
    if (confirm("Are you sure? Resetting will erase all progress.")) {
        localStorage.clear();
        location.href="./index2.html";
    }
}

/*** GENERAL FUNCTIONS ***/
// character dialog
function katrina1(n) {
    console.log("katrina1 dialog:", n);
    if (n == 0) currentDialog[0] = "katrina1"; // dialog start
    if (n == katrina1a.length) { // dialog finish
        if (!isHidden(dark2)) toggleChoices();
        hide(dkatrina);
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    katrina1a[n] == "KAT:" ? unhide(dkatrina) : hide(dkatrina); // show kat's sprite when she's talking
    if (katrina1b[n].substring(0,6) == "CHOICE") { // choice
        charname.innerHTML = "";
        dialog.innerHTML = "";
        getChoices(katrina1b[n], "katrina");
        currentDialog[1]++;
    }
    else if (katrina1b[n].substring(0,4) == "SIGN") { // sign
        if (!isHidden(dark2)) toggleChoices();
        hide(dkatrina);
        localStorage.setItem("sigs", localStorage.getItem("sigs") + "_katrina") // add kat's signature
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    else { // mid-dialog
        if (!isHidden(dark2)) toggleChoices();
        if (katrina1b[n].includes("^")) {
            let dgs = katrina1b[n].split("^");
            charname.innerHTML = katrina1a[n];
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            charname.innerHTML = katrina1a[n];
            dialog.innerHTML = katrina1b[n];
            currentDialog[1]++;
        }
    }
}
function katrina2(n) {
    console.log("katrina2 dialog:", n);
    if (n == 0) currentDialog[0] = "katrina2"; // dialog start
    if (n == katrina2a.length) { // dialog finish
        if (!isHidden(dark2)) toggleChoices();
        hide(dkatrina);
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    katrina2a[n] == "KAT:" ? unhide(dkatrina) : hide(dkatrina); // show kat's sprite when she's talking
    if (katrina2b[n].substring(0,6) == "CHOICE") { // choice
        charname.innerHTML = "";
        dialog.innerHTML = "";
        getChoices(katrina2b[n], "katrina");
        currentDialog[1]++;
    }
    else if (katrina2b[n].substring(0,4) == "SIGN") { // sign
        if (!isHidden(dark2)) toggleChoices();
        hide(dkatrina);
        localStorage.setItem("sigs", localStorage.getItem("sigs") + "_katrina") // add kat's signature
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    else { // mid-dialog
        if (!isHidden(dark2)) toggleChoices();
        if (katrina2b[n].includes("^")) {
            let dgs = katrina2b[n].split("^");
            charname.innerHTML = katrina2a[n];
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            charname.innerHTML = katrina2a[n];
            dialog.innerHTML = katrina2b[n];
            currentDialog[1]++;
        }
    }
}
function katrina3(n) {
    console.log("katrina3 dialog:", n);
    if (n == 0) currentDialog[0] = "katrina3"; // dialog start
    if (n == katrina3a.length) { // dialog finish
        if (!isHidden(dark2)) toggleChoices();
        hide(dkatrina);
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    katrina3a[n] == "KAT:" ? unhide(dkatrina) : hide(dkatrina); // show kat's sprite when she's talking
    if (katrina3b[n].substring(0,6) == "CHOICE") { // choice
        charname.innerHTML = "";
        dialog.innerHTML = "";
        getChoices(katrina3b[n], "katrina");
        currentDialog[1]++;
    }
    else if (katrina3b[n].substring(0,4) == "SIGN") { // sign
        if (!isHidden(dark2)) toggleChoices();
        hide(dkatrina);
        localStorage.setItem("sigs", localStorage.getItem("sigs") + "_katrina") // add kat's signature
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    else { // mid-dialog
        if (!isHidden(dark2)) toggleChoices();
        if (katrina3b[n].includes("^")) {
            let dgs = katrina3b[n].split("^");
            charname.innerHTML = katrina3a[n];
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            charname.innerHTML = katrina3a[n];
            dialog.innerHTML = katrina3b[n];
            currentDialog[1]++;
        }
    }
}
// ui dialog
function map(n) {
    console.log("map dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "map";
    if (n == map1a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (map1a[n] == "MAP") {
        unhide(dmap);
        unhide(rooms);
        dialog.innerHTML = "(click a room to go there. click anywhere else to exit.)";
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (map1a[n].includes("^")) {
            let dgs = map2a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            dialog.innerHTML = map1a[n];
            currentDialog[1]++;
        }
    } 
}
function map2(n) {
    console.log("map2 dialog:", n);
    charname.innerHTML = "";
    if (n == 0) {
        currentDialog[0] = "map2";
        dialog.innerHTML = "[ something doesn't feel right... ]"
        currentDialog[1]++;
    }
    if (n == 1) {
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
}
function phone(n) {
    console.log("phone dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "phone";
    if (n == phone1a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (phone1a[n].substring(0,6) == "CHOICE") {
        dialog.innerHTML = "";
        getChoices(phone1a[n]);
        currentDialog[1]++;
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (phone1a[n].includes("^")) {
            let dgs = phone1a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            dialog.innerHTML = phone1a[n];
            currentDialog[1]++;
        }
    } 
}
function yearbook(n) {
    console.log("yearbook dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "yearbook";
    if (n == yearbook2a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (yearbook2a[n].substring(0,6) == "CHOICE") {
        dialog.innerHTML = "";
        getChoices(yearbook2a[n]);
        currentDialog[1]++;
    }
    else if (yearbook2a[n].substring(0,4) == "SIGS") {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        toggleYearbook();
        currentDialog = ["", 0];
        return;
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (yearbook2a[n].includes("^")) {
            let dgs = yearbook2a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            dialog.innerHTML = yearbook2a[n];
            currentDialog[1]++;
        }
    } 
}
function bracelet(n) {
    console.log("bracelet dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "bracelet";
    if (n == bracelet1a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (bracelet1a[n].substring(0,6) == "CHOICE") {
        dialog.innerHTML = "";
        getChoices(bracelet1a[n]);
        currentDialog[1]++;
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (bracelet1a[n].includes("^")) {
            let dgs = bracelet1a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            dialog.innerHTML = bracelet1a[n];
            currentDialog[1]++;
        }
    } 
}
function scrunchie(n) {
    console.log("scrunchie dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "scrunchie";
    if (n == scrunchie1a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (scrunchie1a[n].substring(0,6) == "CHOICE") {
        dialog.innerHTML = "";
        getChoices(scrunchie1a[n]);
        currentDialog[1]++;
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (scrunchie1a[n].includes("^")) {
            let dgs = scrunchie1a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            dialog.innerHTML = scrunchie1a[n];
            currentDialog[1]++;
        }
    } 
}
function lighter(n) {
    console.log("lighter dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "lighter";
    if (n == lighter1a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (lighter1a[n].substring(0,6) == "CHOICE") {
        dialog.innerHTML = "";
        getChoices(lighter1a[n]);
        currentDialog[1]++;
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (lighter1a[n].includes("^")) {
            let dgs = lighter1a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            dialog.innerHTML = lighter1a[n];
            currentDialog[1]++;
        }
    } 
}
function trash(n) {
    console.log("trash dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "trash";
    if (n == trash1a.length) {
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    if (trash1a[n].substring(0,6) == "CHOICE") {
        dialog.innerHTML = "";
        getChoices(trash1a[n]);
        currentDialog[1]++;
    }
    else {
        if (!isHidden(dark2)) toggleChoices();
        if (trash1a[n].includes("^")) {
            let dgs = trash1a[n].split("^");
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            let dg = trash1a[n];
            if (dg.includes("###")) {
                let trash = localStorage.getItem("trash").split("_");
                let amt = trash.length-1;
                dg = dg.replace("###", amt);
            }
            dialog.innerHTML = dg;
            currentDialog[1]++;
        }
    } 
}
function suzy1(n) {
    console.log("suzy1 dialog:", n);
    if (n == 0) currentDialog[0] = "suzy"; // dialog start
    if (n == suzy1a.length) { // dialog finish
        if (!isHidden(dark2)) toggleChoices();
        hide(choicehelper);
        hide(dsuzy);
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    suzy1a[n] == "SUZY:" ? unhide(dsuzy) : hide(dsuzy); // show suzy's sprite when she's talking
    if (suzy1b[n].substring(0,6) == "CHOICE") { // choice
        charname.innerHTML = "";
        dialog.innerHTML = "";
        getChoices(suzy1b[n]);
        currentDialog[1]++;
    }
    else { // mid-dialog
        if (!isHidden(dark2)) toggleChoices();
        if (suzy1b[n].includes("^")) {
            let dgs = suzy1b[n].split("^");
            charname.innerHTML = suzy1a[n];
            dialog.innerHTML = dgs[0];
            currentDialog[1] += parseInt(dgs[1]);
        }
        else {
            charname.innerHTML = suzy1a[n];
            dialog.innerHTML = suzy1b[n];
            currentDialog[1]++;
        }
    }
}
function nosuzy1(n) {
    console.log("nosuzy1 dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "nosuzy1"; // dialog start
    if (n == nosuzy1a.length) { // dialog finish
        localStorage.setItem("suzy", 2);

        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    else { // mid-dialog
        dialog.innerHTML = nosuzy1a[n];
        currentDialog[1]++;
    }
}
function nosuzy2(n) {
    console.log("nosuzy2 dialog:", n);
    charname.innerHTML = "";
    if (n == 0) currentDialog[0] = "nosuzy2"; // dialog start
    if (n == nosuzy2a.length) { // dialog finish
        if (!isHidden(dark2)) toggleChoices();
        toggleDialog();
        currentDialog = ["", 0];
        return;
    }
    else { // mid-dialog
        dialog.innerHTML = nosuzy2a[n];
        currentDialog[1]++;
    }
}

/*** KATRINA DIALOG ***/
// katrina
let katrina1a = [
    "",
    "",
    "KAT:",
    "",
    ""

]
let katrina1b = [
    "[ KATRINA \"KAT\" GONZALEZ, your family friend. ]",
    "CHOICE_TALK TO KAT^0_yyASK TO SIGN YEARBOOK^1_DO NOTHING^3",
    "DREW. you mother fucker, come here. mano po.^3",
    "[ KATRINA signs your YEARBOOK. ]",
    "SIGN"
]
let katrina2a = [
    "",
    "",
    "KAT:",
    "",
    ""

]
let katrina2b = [
    "[ KATRINA \"KAT\" GONZALEZ, your family friend. ]",
    "CHOICE_WEREN'T YOU IN THE OTHER ROOM?^0_yyASK TO SIGN YEARBOOK^1_DO NOTHING^3",
    "weren't YOU in the other room?^3",
    "[ KATRINA signs your YEARBOOK. ]",
    "SIGN"
]
let katrina3a = [
    "",
    "",
    "KAT:",
    "",
    ""

]
let katrina3b = [
    "[ KATRINA \"KAT\" GONZALEZ, your family friend. ]",
    "CHOICE_YOU AGAIN.^0_yyASK TO SIGN YEARBOOK^1_DO NOTHING^3",
    "i'm everywhere bitch. you can't get rid of me.^3",
    "[ KATRINA signs your YEARBOOK. ]",
    "SIGN"
]