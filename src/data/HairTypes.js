const schema = {
    shortDescription: "straight",
    longDescription: "straight with little to no volume",
    exampleImage: "./images/test.png"
};


const type1a = {
    shortDescription: "completely straight",
    longDescription: "completely straight, no waves or kinks, low volume",
    exampleImage: "./images/test.png"
};
const type1b = {
    shortDescription: "straight & full",
    longDescription: "straight with more body and volume",
    exampleImage: "./images/test.png"
};
const type1c = {
    shortDescription: "straight & coarse",
    longDescription: "bone-straight, hard to curl",
    exampleImage: "./images/test.png"
};

const type2a = {
    shortDescription: "loose waves",
    longDescription: "can accomplish various styles, loose 'S' pattern, hair sticks close to the head.",
    exampleImage: "./images/test.png"
};
const type2b = {
    shortDescription: "defined waves",
    longDescription: "a bit resistant to styling, more defined 'S' pattern",
    exampleImage: "./images/test.png"
};
const type2c = {
    shortDescription: "wide waves",
    longDescription: "wide waves, resistant to styling, tends to be frizzy",
    exampleImage: "./images/test.png"
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
    subtypes: [type1a, type1b, type1c]
};
const type4 = {
    categoryDescription: "kinky-coily",
    subtypes: [type1a, type1b, type1c]
};


const all_types = [type1, type2, type3, type4];

export { all_types };