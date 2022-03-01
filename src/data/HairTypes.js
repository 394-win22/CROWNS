const schema = {
    shortDescription: "straight",
    longDescription: "straight with little to no volume",
    exampleImage: "./images/test.png",
    code: "1A"
};


const type1a = {
    shortDescription: "fine",
    longDescription: "Very soft, shiny, hard to hold a curl, hair tends to be oily, hard to damage.",
    exampleImage: "./images/test.png",
    code: "1A"
};
const type1b = {
    shortDescription: "medium",
    longDescription: "Has much body. (i.e. more volume, more full).",
    exampleImage: "./images/test.png",
    code: "1B"
};
const type1c = {
    shortDescription: "coarse",
    longDescription: "Hard to curl (i.e. bone straight).",
    exampleImage: "./images/test.png",
    code: "1C"
};

const type2a = {
    shortDescription: "loose waves",
    longDescription: "Can accomplish various styles. Loose \"S\" pattern. Hair sticks close to the head.",
    exampleImage: "./images/hairTypes/2A.jpeg",
    code: "2A"
};
const type2b = {
    shortDescription: "defined waves",
    longDescription: "A bit resistant to styling. Hair has more of a defined \"S\" pattern. Hair tends to be frizzy.",
    exampleImage: "./images/hairTypes/2B.jpeg",
    code: "2B"
};
const type2c = {
    shortDescription: "wide waves",
    longDescription: "Hair has wider waves. Resistant to styling. Hair tends to be frizzy.",
    exampleImage: "./images/hairTypes/2C.jpeg",
    code: "2C"
};

const type3a = {
    shortDescription: "loose curl",
    longDescription: "Thick and full with much body. Definite curl pattern. Hair tends to be frizzy. Can have a combination texture.",
    exampleImage: "./images/hairTypes/3A.jpeg",
    code: "3A"
};
const type3b = {
    shortDescription: "tight curls",
    longDescription: "Medium amount of space of the curls. Can have a combined texture.",
    exampleImage: "./images/hairTypes/3B.jpeg",
    code: "3B"
};
const type3c = {
    shortDescription: "corkscrews",
    longDescription: "Tight curls in corkscrews. The curls are very tightly curled.",
    exampleImage: "./images/hairTypes/3C.jpeg",
    code: "3C"
};


const type4a = {
    shortDescription: "defined coil",
    longDescription: "Tightly coiled. Has a very defined \"o\"-shaped pattern.",
    exampleImage: "./images/hairTypes/4A.png",
    code: "4A"
};
const type4b = {
    shortDescription: "z coil",
    longDescription: "Tightly coiled. Little less defined kink pattern. Has more of a \"Z\"-shaped pattern.",
    exampleImage: "./images/hairTypes/4B.jpeg",
    code: "4B"
};
const type4c = {
    shortDescription: "tight coil",
    longDescription: "From kinks to coils, 4C hair is versatile and can be shaped into almost any style. Your strands are tightly coiled. Almost no visible defined kink pattern, unless seen from up close.",
    exampleImage: "./images/hairTypes/4C.png",
    code: "4C"
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

const type_mapping = {
    _1A: all_types[0].subtypes[0],
    _1B: all_types[0].subtypes[1],
    _1C: all_types[0].subtypes[2],
    _2A: all_types[1].subtypes[0],
    _2B: all_types[1].subtypes[1],
    _2C: all_types[1].subtypes[2],
    _3A: all_types[2].subtypes[0],
    _3B: all_types[2].subtypes[1],
    _3C: all_types[2].subtypes[2],
    _4A: all_types[3].subtypes[0],
    _4B: all_types[3].subtypes[1],
    _4C: all_types[3].subtypes[2],
}

export { all_types, type_mapping };