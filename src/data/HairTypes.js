const schema = {
    shortDescription: "straight",
    longDescription: "straight with little to no volume",
    exampleImage: "./images/test.png"
};


const type1a = {
    shortDescription: "fine",
    longDescription: "Very soft, shiny, hard to hold a curl, hair tends to be oily, hard to damage.",
    exampleImage: "./images/test.png"
};
const type1b = {
    shortDescription: "medium",
    longDescription: "Has much body. (i.e. more volume, more full).",
    exampleImage: "./images/test.png"
};
const type1c = {
    shortDescription: "coarse",
    longDescription: "Hard to curl (i.e. bone straight).",
    exampleImage: "./images/test.png"
};

const type2a = {
    shortDescription: "loose waves",
    longDescription: "Can accomplish various styles. Loose \"S\" pattern. Hair sticks close to the head.",
    exampleImage: "./images/hairTypes/2A.jpeg"
};
const type2b = {
    shortDescription: "defined waves",
    longDescription: "A bit resistant to styling. Hair has more of a defined \"S\" pattern. Hair tends to be frizzy.",
    exampleImage: "./images/hairTypes/2B.jpeg"
};
const type2c = {
    shortDescription: "wide waves",
    longDescription: "Hair has wider waves. Resistant to styling. Hair tends to be frizzy.",
    exampleImage: "./images/hairTypes/2C.jpeg"
};

const type3a = {
    shortDescription: "loose curl",
    longDescription: "Thick and full with much body. Definite curl pattern. Hair tends to be frizzy. Can have a combination texture.",
    exampleImage: "./images/hairTypes/3A.jpeg"
};
const type3b = {
    shortDescription: "tight curls",
    longDescription: "Medium amount of space of the curls. Can have a combined texture.",
    exampleImage: "./images/hairTypes/3B.jpeg"
};
const type3c = {
    shortDescription: "corkscrews",
    longDescription: "Tight curls in corkscrews. The curls are very tightly curled.",
    exampleImage: "./images/hairTypes/3C.jpeg"
};


const type4a = {
    shortDescription: "defined coil",
    longDescription: "Tightly coiled. Has a very defined \"o\"-shaped pattern.",
    exampleImage: "./images/hairTypes/4A.png"
};
const type4b = {
    shortDescription: "z coil",
    longDescription: "Tightly coiled. Little less defined kink pattern. Has more of a \"Z\"-shaped pattern.",
    exampleImage: "./images/hairTypes/4B.jpeg"
};
const type4c = {
    shortDescription: "tight coil",
    longDescription: "Tightly coiled. Almost no visible defined kink pattern, unless seen from up close. Has more of a very tight \"o\"-shaped pattern.",
    exampleImage: "./images/hairTypes/4C.png"
};

const type1 = {
    categoryDescription: "straight",
    subtypes: [type1a, type1b, type1c]
};
const type2 = {
    categoryDescription: "wavy",
    subtypes: [type2a, type2b, type2c]
};
const type3 = {
    categoryDescription: "curly",
    subtypes: [type3a, type3b, type3c]
};
const type4 = {
    categoryDescription: "kinky",
    subtypes: [type4a, type4b, type4c]
};


const all_types = [type1, type2, type3, type4];

export { all_types };