import { Storage } from "./../Utilities";

const getUser = () => {
  // Get user string
  let user = Storage.get("connuser", true);

  if (!user) {
    // No user id, so create one
    const id = `${Adj[Math.floor(Math.random() * Adj.length)]}-${
      Noun[Math.floor(Math.random() * Noun.length)]
    }`;
    user = id;
    Storage.set("connuser", id);
  }

  return user;
};

const log = (Area: string, Event: string, Override = false) => {
  // Do the thing
  if (Area && Event) {
    const user = getUser();
    fetch("/api/log", {
      method: "post",
      body: JSON.stringify({
        User: user,
        Area,
        Event,
        Override,
      }),
    }).catch(console.error);
  }
};

export const Logging = () => ({
  // Do the things
  log,
  forceLog: (Area: string, Event: string) => log(Area, Event, true),
});

const Adj = [
  "delirious",
  "grave",
  "orderly",
  "round",
  "funny",
  "better",
  "lovely",
  "paltry",
  "shoddy",
  "vigilant",
  "frosty",
  "absolute",
  "quiet",
  "questionable",
  "apt",
  "aggressive",
  "colorless",
  "feisty",
  "scrawny",
  "sentimental",
  "dopey",
  "tubby",
  "easy-going",
  "far-off",
  "personal",
  "sweltering",
  "luminous",
  "right",
  "punctual",
  "lucky",
  "happy-go-lucky",
  "curvy",
  "well-documented",
  "yearly",
  "sure-footed",
  "jolly",
  "pale",
  "responsible",
  "showy",
  "stunning",
  "delectable",
  "enraged",
  "indolent",
  "striking",
  "prime",
  "dual",
  "graceful",
  "woozy",
  "unselfish",
  "salty",
  "pure",
  "partial",
  "true",
  "nifty",
  "jumpy",
  "bustling",
  "tangible",
  "stale",
  "instructive",
  "secondary",
  "bad",
  "medium",
  "second",
  "near",
  "mean",
  "trustworthy",
  "compassionate",
  "harmless",
  "variable",
  "lighthearted",
  "exalted",
  "unfortunate",
  "taut",
  "agile",
  "lined",
  "exotic",
  "passionate",
  "petty",
  "elastic",
  "impeccable",
  "old-fashioned",
  "purple",
  "overjoyed",
  "definitive",
  "worldly",
  "ideal",
  "blissful",
  "precious",
  "tired",
  "watery",
  "assured",
  "haunting",
  "adolescent",
  "strong",
  "acidic",
  "whispered",
  "lost",
  "dramatic",
  "able",
  "buzzing",
  "productive",
  "ashamed",
  "repentant",
  "rough",
  "some",
  "careful",
  "superb",
  "false",
  "bright",
  "shiny",
  "grateful",
  "untidy",
  "bulky",
  "lawful",
  "puzzling",
  "juvenile",
  "regular",
  "well-to-do",
  "reasonable",
  "warmhearted",
  "giving",
  "stormy",
  "thick",
  "functional",
  "worthless",
  "pessimistic",
  "untrue",
  "immediate",
  "fine",
  "gleaming",
  "altruistic",
  "unlucky",
  "watchful",
  "tidy",
  "elated",
  "warped",
  "trusty",
  "genuine",
  "unhealthy",
  "blank",
  "suburban",
  "constant",
  "quaint",
  "wooden",
  "bowed",
  "dutiful",
  "nasty",
  "left",
  "muffled",
  "speedy",
  "capital",
  "sparse",
  "this",
  "unwilling",
  "smug",
  "snoopy",
  "blushing",
  "shy",
  "lonely",
  "outlying",
  "icky",
  "wealthy",
  "periodic",
  "pointed",
  "little",
  "tough",
  "tattered",
  "horrible",
  "attentive",
  "fearful",
  "weary",
  "brisk",
  "plump",
  "selfish",
  "humble",
  "forked",
  "yellowish",
  "weak",
  "unsteady",
  "colorful",
  "oblong",
  "visible",
  "expert",
  "scientific",
  "leading",
  "crowded",
  "boring",
  "annual",
  "measly",
  "qualified",
  "far",
  "zealous",
  "infamous",
  "closed",
  "bite-sized",
  "lavish",
  "robust",
  "flashy",
  "quintessential",
  "itchy",
  "nippy",
  "ethical",
  "imperfect",
  "happy",
  "calculating",
  "inferior",
  "dreary",
  "rural",
  "our",
  "fabulous",
  "wry",
  "general",
  "wobbly",
  "subdued",
  "potable",
  "ripe",
  "total",
  "costly",
  "silver",
  "apprehensive",
  "green",
  "well-groomed",
  "untimely",
  "zesty",
  "extra-small",
  "greedy",
  "anxious",
  "dapper",
  "cloudy",
  "profuse",
  "irresponsible",
  "fatal",
  "muted",
  "honored",
  "clueless",
  "sticky",
  "white",
  "worthy",
  "evil",
  "weepy",
  "mealy",
  "soggy",
  "unusual",
  "Spanish",
  "amusing",
  "hard-to-find",
  "rigid",
  "corrupt",
  "private",
  "juicy",
  "loathsome",
  "international",
  "cavernous",
  "plush",
  "svelte",
  "safe",
  "grown",
  "violent",
  "confused",
  "webbed",
];

const Noun = [
  "attack",
  "person",
  "tower",
  "anywhere",
  "meal",
  "tea",
  "promise",
  "edge",
  "fat",
  "slip",
  "paint",
  "employer",
  "word",
  "working",
  "affect",
  "organization",
  "energy",
  "mistake",
  "cancer",
  "mouse",
  "native",
  "move",
  "junior",
  "task",
  "king",
  "office",
  "reference",
  "claim",
  "chest",
  "mention",
  "branch",
  "passenger",
  "recognition",
  "setting",
  "original",
  "obligation",
  "mark",
  "purchase",
  "screw",
  "theory",
  "skill",
  "file",
  "annual",
  "death",
  "math",
  "manner",
  "map",
  "hit",
  "requirement",
  "location",
  "rough",
  "minimum",
  "bid",
  "choice",
  "somewhere",
  "eye",
  "sign",
  "farm",
  "piano",
  "nerve",
  "preparation",
  "depression",
  "library",
  "march",
  "stroke",
  "consideration",
  "put",
  "guess",
  "height",
  "note",
  "dream",
  "ask",
  "respect",
  "constant",
  "stock",
  "measurement",
  "spiritual",
  "dress",
  "tradition",
  "royal",
  "example",
  "safety",
  "character",
  "singer",
  "technology",
  "association",
  "maximum",
  "police",
  "country",
  "most",
  "position",
  "management",
  "role",
  "heat",
  "politics",
  "software",
  "outside",
  "line",
  "mud",
  "parking",
  "shirt",
  "burn",
  "news",
  "button",
  "permit",
  "calm",
  "comfortable",
  "tonight",
  "feature",
  "mountain",
  "model",
  "blood",
  "pen",
  "increase",
  "string",
  "steak",
  "department",
  "partner",
  "male",
  "evening",
  "share",
  "grandmother",
  "hook",
  "information",
  "cold",
  "debt",
  "main",
  "arrival",
  "keep",
  "shake",
  "vacation",
  "apple",
  "swimming",
  "lab",
  "history",
  "lead",
  "apartment",
  "competition",
  "current",
  "return",
  "farmer",
  "guidance",
  "hang",
  "mail",
  "district",
  "boot",
  "glass",
  "following",
  "log",
  "opportunity",
  "term",
  "status",
  "failure",
  "hall",
  "smoke",
  "photo",
  "investment",
  "internal",
  "grab",
  "wave",
  "buy",
  "platform",
  "dad",
  "expression",
  "present",
  "nature",
  "arm",
  "memory",
  "dealer",
  "sugar",
  "potential",
  "ease",
  "wash",
  "rock",
  "chance",
  "pound",
  "gear",
  "instance",
  "hospital",
  "grandfather",
  "consequence",
  "second",
  "run",
  "student",
  "cat",
  "cross",
  "rent",
  "gate",
  "debate",
  "candidate",
  "blank",
  "south",
  "long",
  "bedroom",
  "necessary",
  "statement",
  "boyfriend",
  "press",
  "baseball",
  "housing",
  "cash",
  "wheel",
  "win",
  "regular",
  "joint",
  "worker",
  "seat",
  "incident",
  "bit",
  "display",
  "cut",
  "laugh",
  "future",
  "host",
  "employ",
  "impression",
  "blame",
  "extreme",
  "childhood",
  "great",
  "reach",
  "pension",
  "temporary",
  "make",
  "quote",
  "passage",
  "standard",
  "associate",
  "card",
  "actor",
  "mixture",
  "beginning",
  "bet",
  "feed",
  "pizza",
  "historian",
  "give",
  "kid",
  "brave",
  "save",
  "tough",
  "delay",
  "quit",
  "scene",
  "editor",
  "sentence",
  "committee",
  "manufacturer",
  "consist",
  "young",
  "winter",
  "phone",
  "son",
  "refrigerator",
  "savings",
  "candle",
  "path",
  "serve",
  "performance",
  "queen",
];
