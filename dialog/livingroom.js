// automatic dialog
autoa = [
    "ANGELA:",
    "ELLIE:",
    "BRAD:",
    "JAKE:",
    "JAKE:",
    "ANGELA:",
    "SUZY:",
    "",
    "ELLIE:",
    "SUZY:",
    "ELLIE:",
    "BRAD:",
    "",
    "ELLIE:",
    "BRAD:",
    "SUZY:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "ANGELA:",
    "BRAD:",
    "BRAD:"
]
autob = [
    "oh my gosh, hi DREW!!",
    "DREW REYES, as i live and breathe.",
    "yooo andy, what up! feels like ages since you last partied with us.",
    "see? told you guys he was coming.",
    "and he brought his little sister, too.",
    "aww, she looks just like you :)",
    "that's the worst thing anyone's ever said about me.",
    "[ EVERYONE laughs. ]",
    "what year are you?",
    "freshman.",
    "you thinking of doing swim next year?",
    "dub's losing their best flyer, after all!",
    "[ BRAD pats your back a little too hard. you try to suppress a cough. ]",
    "she wouldn't be on the men's team, idiot.",
    "she could do mixed medley, though!",
    "i'm not really a sports person.",
    "right on. you seem like you're too cool for swim, anyway.",
    "well, hey - enjoy the party!",
    "and if you ever need a little something, you can always ask your uncle BRAD.",
    "please don't give weed to freshmen, BRAD.",
    "i think she's old enough to make her own decisions.",
    "you, too, ANDY - you've gotta try it at least once before we go!"
]

// characters
let ellie1a = [
    "",
    "",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "",
    "ELLIE:",
    "ELLIE:",
    ""
]
let ellie1b = [
    "[ ELLIE MACLEAN, a front crawler on WBHS VARSITY WOMEN'S SWIM. ]",
    "CHOICE_TALK TO ELLIE^0_yyASK TO SIGN YEARBOOK^18_DO NOTHING^20",
    "DREW. good to see you.",
    "...",
    "so, uh. kinda thought you wouldn't be here, so i invited ANVI. sorry about that.",
    "you probably won't run into her, though.",
    "i mean, how many varsity seniors are there? 15? 20?",
    "don't think you've talked to that many people in your life.",
    "CHOICE_ANVI's here?^0_ha-ha. you're one to talk.^1",
    "oh, right.^2",
    "heh, kidding.",
    "so i actually have a favor to ask you.",
    "i mean it doesn't have to be you but you're already here, so.",
    "can you give this BRACELET back to ANVI?",
    "i borrowed it for prom and keep forgetting to return it.",
    "i know you guys ended kinda messy, but the thing is...",
    "i actually don't care.",
    "anyway here you go.",
    "[ ELLIE gives you ANVI'S BRACELET. ]",
    "she's probably in the DINING ROOM right now.^3",
    "...",
    "[ ELLIE signs your YEARBOOK. ]",
]
let angela1a = [
    "",
    "",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "ANGELA:",
    "",
    "ANGELA:",
    "",
    "ANGELA:",
    "ANGELA:",
    ""
]
let angela1b = [
    "[ ANGELA YAO, a backstroker for WBHS VARSITY WOMEN'S SWIM. ]",
    "CHOICE_TALK TO ANGELA^0_yyASK TO SIGN YEARBOOK^20_DO NOTHING^22",
    "drew!! it's so nice to see you again.",
    "sooo, slight mishap...",
    "i thought you might not come, so i sorta invited RYAN. i hope that's ok?",
    "actually, i think it could be really good for you two to talk!",
    "we on't have so many days left together, after all... </3",
    "CHOICE_RYAN's here?^0_why would i care that he's here?^4",
    "it's totally possible to avoid him too!",
    "i mean he is friends with everyone so it might be hard but as long as you stay in one spot?",
    "and i have a feeling he won't try to talk to you, either. :')",
    "(but i still think it'd be good for you guys to patch things up...)^3",
    ".............",
    "no reason.",
    "y'know what, actually -",
    "i do have a teeny tiny little favor to ask you.",
    "i borrowed this SCRUNCHIE from RYAN a long time ago and keep forgetting to give it back - could you do it for me instead?",
    "i'd go find him myself, but i don't really want to get up, is the thing.",
    "FAKECHOICE_no._no way in hell._go fuck yourself.",
    "yay amazing!!! thanks so much <3 <3 <3",
    "[ ANGELA gives you RYAN'S SCRUNCHIE. ]",
    "last i saw him, he was in the KITCHEN.^3",
    "omg of course i'll sign your yearbook!!!",
    "[ ANGELA signs your YEARBOOK. ]",
]
let brad1a = [
    "",
    "",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "",
    "BRAD:",
    "",
    "BRAD:",
    ""
]
let brad1b = [
    "[ BRAD SZYMANSKI, a breaststroker for WBHS VARSITY MEN'S SWIM. ]",
    "CHOICE_TALK TO BRAD^0_yyASK TO SIGN YEARBOOK^23_DO NOTHING^25",
    "ANDY, my main man!",
    "can i hit you up with anything? vodka? beer? white talon?",
    "just kidding - i know you don't drink, haha.",
    "but like i said earlier, if you want a hit, BRADDY's got you covered.",
    "just head out back and tell LISA i sent you, yeah? she's got blunts for days.",
    "CHOICE_LISA's here?^0_i don't smoke, either.^5",
    "oh shit, you know my girl?",
    "i mean she's not my GIRL, my girl. obviously.",
    "but you know what i mean.",
    "i know she doesn't go to dub, but like! can't have a dope party without a dope dealer!! amirite!!!",
    "(actually i have no idea if she deals dope. i think it's just weed.)^2",
    "riiight. and MR. HINTZ didn't fail me in precalc twice. wink wink",
    "actually, speaking of LISE -",
    "i borrowed this lighter from her earlier tonight, so i could hit the FATTEST blunt -",
    "I mean you shoulda SEEN this thing, REYES, it was like stuffed to the MAX, maybe as long as my ring finger -",
    "like, i could eat ten whole bags of roditos right now. family-size. dead serious.",
    "[ BRAD trails off. he seems entranced by the idea of eating a family-size bag of roditos. ]",
    "oh, damn. i'm getting off track. anyway.",
    "give her back this LIGHTER for me, yeah? you'd be my hero.",
    "because if i'm being honest, i can't even stand up right now.",
    "[ BRAD gives you LISA'S LIGHTER. ]",
    "she's defo somewhere out in the BACKYARD.",
    "[ before you can even protest, BRAD has already checked out of the conversation, demolishing a family-size pack of roditos he has somehow materialized. ]^3",
    "hell yeah, dude! i'll sign your yearbook.",
    "[ BRAD signs your YEARBOOK. ]"
]
let jake1a = [
    "",
    "",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "SUZY:",
    "JAKE:",
    "",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    ""
]
let jake1b = [
    "[ JAKE GIORDANO, a fellow butterflyer and the captain of WBHS MEN'S VARSITY SWIM. ]",
    "CHOICE_TALK TO JAKE^0_yyASK TO SIGN YEARBOOK^8_DO NOTHING^11",
    "ANDY, ANDY, ANDY.",
    "i expect you to get wild tonight, okay? none of that vanilla shit.",
    "down a whole bottle of svedko and go apeshit. smash our pool table or something. you have my blessing.",
    "and your sister, too. SALLY?",
    "SUZY.",
    "BELLA, yeah. if she ever wants, like, a cocktail or anything, i'm your guy.",
    "CHOICE_***come up with something funny later^0",
    "but for real. you guys need anything, come find me. i'll be around.^4",
    "awwww, ANDY, you're adorable.",
    "sure, why not? i'll sign it.",
    "[ JAKE signs your YEARBOOK. ]"
]
let ellie2a = [
]
let ellie2b = [
]
let angela2a = [
]
let angela2b = [
]
let brad2a = [
]
let brad2b = [
]
let jake2a = [
]
let jake2b = [
]

// interactive items
let tv1a = [
    "[  ]"
]
let ps51a = [
    "[  ]"
]
let recordplayer1a = [
    "[  ]"
]
let recordbox1a = [
    "[  ]"
]
let couch1a = [
    "[  ]"
]
let lamp1a = [
    "[  ]"
]

// ui
let map2a = [
    "[ now that you're actually in the house, you're starting to remember it a little better. ]", 
    "MAP"
]
let suzy1a = [
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:"
]
let suzy1b = [
    "WOW!!! that was super embarrassing.",
    "for you, not for me. just to be clear.",
    "i honestly thought you'd be cooler around your friends.",
    "and that, y'know, they'd talk to you like you're their equal.",
    "guess that was asking for too much?"   
]