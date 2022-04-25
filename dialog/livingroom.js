// automatic dialog
autoa = [
    "",
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
    "[ upon entering the LIVING ROOM, you're bombarded with greetings from JAKE's posse. ]",
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
    "",
    "ELLIE:",
    "",
    ""
]
let ellie1b = [
    "[ ELLIE MACLEAN, a front crawler on WBHS VARSITY WOMEN'S SWIM. ]",
    "CHOICE_TALK TO ELLIE^0_yyASK TO SIGN YEARBOOK^19_DO NOTHING^22",
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
    "she's probably in the DINING ROOM right now.",
    "BRANCH^4",
    "...",
    "[ ELLIE signs your YEARBOOK. ]",
    "SIGN"
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
    "",
    "ANGELA:",
    "",
    ""
]
let angela1b = [
    "[ ANGELA YAO, a backstroker for WBHS VARSITY WOMEN'S SWIM. ]",
    "CHOICE_TALK TO ANGELA^0_yyASK TO SIGN YEARBOOK^21_DO NOTHING^24",
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
    "last i saw him, he was in the KITCHEN.",
    "BRANCH^4",
    "omg of course i'll sign your yearbook!!!",
    "[ ANGELA signs your YEARBOOK. ]",
    "SIGN"
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
    "",
    "BRAD:",
    "",
    ""
]
let brad1b = [
    "[ BRAD SZYMANSKI, a breaststroker for WBHS VARSITY MEN'S SWIM. ]",
    "CHOICE_TALK TO BRAD^0_yyASK TO SIGN YEARBOOK^24_DO NOTHING^27",
    "ANDYYYY, my main man!",
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
    "i borrowed this LIGHTER from her earlier tonight, so i could hit the FATTEST blunt -",
    "I mean you shoulda SEEN this thing, REYES, it was like stuffed to the MAX, maybe as long as my ring finger -",
    "like, i could eat ten whole bags of roditos right now. family-size. dead serious.",
    "[ BRAD trails off. he seems entranced by the idea of eating a family-size bag of roditos. ]",
    "oh, damn. i'm getting off track. anyway.",
    "give her back this LIGHTER for me, yeah? you'd be my hero.",
    "because if i'm being honest, i can't even stand up right now.",
    "[ BRAD gives you LISA'S LIGHTER. ]",
    "she's defo somewhere out in the BACKYARD.",
    "[ before you can even protest, BRAD has already checked out of the conversation, demolishing a family-size pack of roditos he has somehow materialized. ]",
    "BRANCH^4",
    "hell yeah, dude! i'll sign your yearbook.",
    "[ BRAD signs your YEARBOOK. ]",
    "SIGN"
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
    "",
    ""
]
let jake1b = [
    "[ JAKE GIORDANO, a fellow butterflyer and the captain of WBHS MEN'S VARSITY SWIM. ]",
    "CHOICE_TALK TO JAKE^0_yyASK TO SIGN YEARBOOK^7_DO NOTHING^11",
    "ANDY, ANDY, ANDY.",
    "i expect you to get wild tonight, okay? none of that vanilla shit.",
    "down a whole bottle of svedko and go apeshit. smash our pool table or something. you have my blessing.",
    "and your sister, too. SALLY?",
    "SUZY.",
    "BELLA, yeah. if she ever wants, like, a cocktail or anything, i'm your guy.",
    "BRANCH^5",
    "awwww, ANDY, you're adorable.",
    "sure, why not? i'll sign it.",
    "[ JAKE signs your YEARBOOK. ]",
    "SIGN"
]
let ellie2a = [
    "",
    "",
    "ELLIE:",
    "",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "ELLIE:",
    "",
    ""
]
let ellie2b = [
    "[ ELLIE MACLEAN, a front crawler on WBHS VARSITY WOMEN'S SWIM. ]",
    "CHOICE_TALK TO ELLIE^0_yyASK TO SIGN YEARBOOK^7_DO NOTHING^10",
    "nice to see you one last time. where are you going in the fall again?",
    "CHOICE_georgia tech.^0_out of state.^1_you first.^2",
    "sweet. good luck out there, man.^8",
    "i mean, obviously. who'd want to stay in this dump?^7",
    "oberlin.",
    "to be honest... i'm kind of excited for college.",
    "gonna miss the shit out of ANGIE, though.^4",
    "...",
    "[ ELLIE signs your YEARBOOK. ]",
    "SIGN"
]
let angela2a = [
    "",
    "",
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
    "",
    ""
]
let angela2b = [
    "[ ANGELA YAO, a backstroker for WBHS VARSITY WOMEN'S SWIM. ]",
    "CHOICE_TALK TO ANGELA^0_yyASK TO SIGN YEARBOOK^9_DO NOTHING^12",
    "i'm gonna miss you a whole lot, REYES.",
    "(and i know JAKE will, too - don't mind his ribbing.)",
    "CHOICE_i'll miss you too, ANGIE.^0_i'm sure he'll miss calling me ANDY.^1_ah, stern'll keep you plenty busy.^3",
    "awwww!! <3^9",
    "aw, you know he doesn't mean any harm. it's like a cute little inside joke!",
    "BRAD, though... i don't think he knows that's not your name...^7",
    "oh, don't even say it! stern's gonna be real killer.",
    "i'm excited to live in the city, though. and flying out to see JAKE in cali will be fun.",
    "i'm just gonna miss ELLIE...^4",
    "omg of course i'll sign your yearbook!!!",
    "[ ANGELA signs your YEARBOOK. ]",
    "SIGN"
]
let brad2a = [
    "",
    "",
    "BRAD:",
    "BRAD:",
    "",
    "",
    "BRAD:",
    "BRAD:",
    "ELLIE:",
    "BRAD:",
    "BRAD:",
    "BRAD:",
    "",
    "BRAD:",
    "",
    ""
]
let brad2b = [
    "[ BRAD SZYMANSKI, a breaststroker for WBHS VARSITY MEN'S SWIM. ]",
    "CHOICE_TALK TO BRAD^0_yyASK TO SIGN YEARBOOK^11_DO NOTHING^14",
    "aw, dude. not to get all sappy on you, but i'm gonna miss dub swim so much.",
    "honestly think i might drive down from NJIT just to check on the newbies.",
    "[ BRAD actually does look a little weepy. you think he might start crying. ]",
    "CHOICE_how much did you drink?^0_how much did you smoke?^4_[ offer a friendly FIST BUMP. ]^6",
    "ummmmm... i haven't really been keeping track.",
    "yo, ELLE! you been counting?",
    "at least six shots of flameball.",
    "at least six shots of flameball.^7",
    "a whole blunt. all by myself.",
    "are you proud of me?^5",
    "[ BRAD takes you up on that FIST BUMP, grinning wide. ]^4",
    "hell yeah, dude! i'll sign your yearbook.",
    "[ BRAD signs your YEARBOOK. ]",
    "SIGN"
]
let jake2a = [
    "",
    "",
    "JAKE:",
    "JAKE:",
    "",
    "JAKE:",
    "SUZY:",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "",
    "JAKE:",
    "JAKE:",
    "",
    "JAKE:",
    "JAKE:",
    "",
    ""
]
let jake2b = [
    "[ JAKE GIORDANO, a fellow butterflyer and the captain of WBHS MEN'S VARSITY SWIM. ]",
    "CHOICE_TALK TO JAKE^0_yyASK TO SIGN YEARBOOK^12_DO NOTHING^16",
    "y'know, ANDY, i'm kinda gonna miss you next year.",
    "i mean, who am i supposed to pal around with at berkeley?",
    "CHOICE_would you call what we do 'paling around'?^0_i'm sure you'll find someone else to laugh at. with.^4_[ polite SHRUG. ]^8",
    "course i do! you're my AMIGO, dude. my COMPADRE. dare i say, my HER-MAN-O.",
    "(does he know we're not latino...?)",
    "i have nothing but love for you in my heart.",
    "though i'll always wish your fly time wasn't better than mine. god damn.^10",
    "ohoho, sharp tongue, this guy.",
    "[ JAKE puts an arm around you and jostles you rather aggressively. ]",
    "he's just bitter 'cause i used to tease him for his form.",
    "if you want to be the best flyer in georgia, you gotta get those arms UP!^6",
    "[ JAKE just laughs. ]^5",
    "awwww, ANDY, you're adorable.",
    "sure, why not? i'll sign it.",
    "[ JAKE signs your YEARBOOK. ]",
    "SIGN"
]

// interactive items
let tv1a = [
    "[ the TV is playing MONDAY NIGHT FOOTBALL. ]",
    "[ who's even watching this? everyone here is on the swim team. ]",
    "[ and it's a friday. ]",
    "CHOICE_CHANGE THE CHANNEL^0_DO NOTHING^1",
    "[ you would... if you could only find the remote. ]"
]
let ps51a = [
    "[ of course, JAKE has a GAMESTATION 5. ]",
    "CHOICE_PLAY A GAME^0_STEAL IT^4_DO NOTHING^5",
    "[ you sort through his collection of GS5 games. ]",
    "[ CALL OF ACTION: GREY OPS, CLOUDRIM, GRAND LARCENY AUTO, TRUE BLUE REDEMPTION... ]",
    "[ ...ANIMAL JUNCTION: NEW VISTAS... ]",
    "[ you wonder what his island looks like. ]^2",
    "[ you don't think you could fit this in your pockets. ]"
]
let recordplayer1a = [
    "[ a fancy RECORD PLAYER. ]",
    "[ right now, it's playing the latest album from that rapper JAKE is always raving about during practice. ]",
    "[ it's fine, you guess. but ever since he entered his weird religious phase, it's been hard to listen to him. ]",
    "CHOICE_CHANGE RECORDS^0_DO NOTHING^1",
    "[ you have a feeling you'll be met with widespread disappointment if you turn this off, so you leave it be. ]"
]
let recordbox1a = [
    "[ a BOX chock-full of VINYL RECORDS. ]",
    "CHOICE_LOOK THROUGH RECORDS^0_DO NOTHING^4",
    "[ it's about what you'd expect from a white suburban household: ]",
    "[ old movie soundtracks (probably his mom's), classic rock (his dad's)... ]",
    "[ and a whooooole lot of shitty rap. ]",
    "[ seriously, who still listens to LIL BOATY and HAY-Z? ]"
]
let couch1a = [
    "[ a nice green COUCH. nothing wrong with that. ]",
    "CHOICE_SIT DOWN^0_DO NOTHING^2",
    "[ to be honest, the idea of squeezing in-between so many people... is not appealing. ]",
    "[ and there's probably not enough room for you, anyway. ]"

]
let lamp1a = [
    "[ a modern-looking LAMP. it is currently turned off. ]",
    "CHOICE_TURN IT ON^0_DO NOTHING^2",
    "[ you try to turn it on, but it doesn't work. ]",
    "[ when you follow the cord, it seems to not be plugged in... because someone is charging their VAPE at the outlet. ]"
]

// ui
let map2a = [
    "[ even though you're now in the house, you still don't really remember how to get anywhere. ]"
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