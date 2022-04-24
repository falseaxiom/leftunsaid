// automatic dialog
let suzy1a = [
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "SUZY:",
    "",
    "SUZY:"
]
let suzy1b = [
    "finally, we're here!!!",
    "you were driving like an old lady the whole way.",
    "i bet i could've gotten us here faster.",
    "CHOICE_you don't even have your license yet.^0_big talk for someone who can't reach the brake pedal.^0",
    "i still know more road rules than you, though.",
    "ate* KAT told me if a stop sign has a white border, it's optional.<br/><br/><br/><br/><em style='color:var(--d)'>(*\"ate\" is a filipino term for big sister, but is usually used to refer to any older girl.)</em>",
    "but you stopped at every single one of them!",
    "CHOICE_KAT failed her driver's test twice.^0_did she also tell you if all three traffic lights turn on at once, you get $10?^1",
    "well, i still trust her more than you.^3",
    "...",
    "well, that's just not true.",
    "but whatever.",
    "i thought having an older brother would mean i got to go to more parties. and a varsity athlete, no less!",
    "but nooo, all you do is stay at home and study. and crochet.",
    "***like an old lady.***",
    "and when you do go to parties, you don't bring me!",
    "now my first ever house party is your stupid swim team grad party. i'm not gonna know a single person there.",
    "CHOICE_like i said, you didn't have to come.^0",
    "oh, so i was supposed to pass up an opportunity to blackmail you?",
    "it's not every day we run into JAKE GIORDANO while buying craft yarn.",
    "\"uhh, i'm holding this for my sister!!\"",
    "\"my name is DREW REYES and i can't admit to having traditionally feminine hobbies in front of my guy friends!!\"",
    "i could've *destroyed* your social life right then and there.",
    "but i kept that secret for the rest of may, like the best baby sister ever, asking for nothing in return.",
    "CHOICE_except for a ride to JAKE's party.^0",
    "exactly. so let's get moving!!!"
]
let jake1a = [
    "JAKE:",
    "SUZY:",
    "",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "",
    "JAKE:",
    "JAKE:",
    "SUZY:",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "",
    "JAKE:",
    "",
    "JAKE:",
    "JAKE:",
    "JAKE:",
    "JAKE:"
]
let jake1b = [
    "well well well, if it isn't ANDY REYES in the flesh!",
    "(andy??)",
    "[ DREW is not short for ANDREW. it's not short for anything. JAKE knows this. ]",
    "so glad you could fit us into your busy schedule.",
    "y'know, everyone said you weren't gonna show, but i was like, \"hey, we're graduating! you think he'd pass up one last rager?\"",
    "and they were like, \"yeah, probably.\"",
    "but here you are, proving everyone wrong.",
    "AND you brought a girl! full of surprises, this guy.",
    "don't think we've met before. i'm JAKE.",
    "CHOICE_SUZY. my little sister.^0",
    "right! the knitting girl, with the yarn.",
    "sorry about that. ANDY doesn't talk about you much.",
    "i prefer it that way, actually. less association between us.",
    "haha, burn! i like you already.",
    "well, come on in, make yourself at home. there's pizza and booze.",
    "\"mi casa es tu casa\" and all that.",
    "[ SUZY walks in first, and you follow suit - but JAKE stops you. ]",
    "(your sister. is she single?)",
    "CHOICE_did you really just ask me that?^0_she's a freshman, creep.^1_what about ANGELA?^2",
    "(whaaat? it's just a joke!)^3",
    "(kidding! jeez. lighten up, reyes.^2",
    "(ah, we're on a break right now. you know how ANGIE is.)",
    "anyway. let's go to the LIVING ROOM first - everyone's gotta know you're alive."
]

// characters
let suzy2a = [
    "",
    "",
    "SUZY:",
    "",
    ""
]
let suzy2b = [
    "[ SUZY REYES, your little sister. ]",
    "CHOICE_TALK TO SUZY^0_yyASK TO SIGN YEARBOOK^1_DO NOTHING^3",
    "what are we still doing standing outside? there's a party waiting for us!!^3",
    "[ she literally lives in the same house as you. what would she even write? \"have a good summer\"? ]",
    "[ she'd probably make your summer worse just for asking her. ]"
]

// interactive items
let tesla1a = [
    "[ JAKE's TESLO MODEL W. he always parks it outside his garage, like an asshole. ]",
    "CHOICE_KEY JAKE'S CAR^0_BEGRUDGINGLY ADMIRE JAKE'S CAR^4_DO NOTHING^6",
    "[ the glossy, black finish beckons. your hand twitches at your KEYS. ]",
    "[ one little nick couldn't hurt... right...? ]",
    "[ ... ]",
    "[ nah. you shouldn't. ]^3",
    "[ oh, if only TESLOs weren't exclusively owned by rich jerks. ]",
    "[ although you guess it doesn't help that they were invented by a rich jerk. ]"
]
let toyota1a = [
    "[ your beat-up 2008 TOYOTO CAMRY. she's not the fastest, nor the most reliable, but she's all yours. ]",
    "CHOICE_DRIVE BACK HOME^0_KEY YOUR CAR^2_DO NOTHING^3",
    "[ honestly, not a bad idea. ]",
    "[ but with gas prices the way they are... yeah. nevermind. ]^2",
    "[ why would you do that. ]"
]
let bush1a = [
    "[ JAKE lives in the nicer part of town, which you can tell from this non-native, expensive-looking SHRUBBERY. ]",
    "[ it probably sucks up enough water to fill a swimming pool. ]",
    "CHOICE_PISS IN THEM^0_DO NOTHING^2",
    "[ what? no. you're not a degenerate. ]",
    "[ and NICK JEONG will probably do that later, anyway. ]"
]
let yearbook1a = [
    "[ someone left their YEARBOOK on the front lawn. don't these things cost $200? ]",
    "CHOICE_PICK UP^0_LEAVE IT^2",
    "[ guess it's yours now. ]",
    "PICKUP"
]
let frontdoor1a = [
    "[ the FRONT DOOR to JAKE's house. ]",
    "CHOICE_KNOCK ON FRONT DOOR^0_DO NOTHING^1",
    "KNOCKKNOCK"
]

// ui
let map1a = [
    "[ you've been to jake's house a couple times for the errant post-practice-turned-hangout. ]", 
    "[ and for the even more sporadic house-party-you-feel-somewhat-obligated-to-attend. ]",
    "[ you can't say you know its layout very well. ]"
]