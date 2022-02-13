const schema = {
    shortDescription: "straight",
    longDescription: "straight with little to no volume",
    exampleImage: "./images/test.png"
};


const type1a = {
    shortDescription: "completely straight",
    longDescription: "completely straight, no waves or kinks, low volume"
};
const type1b = {
    shortDescription: "straight & full",
    longDescription: "striaght with more body and volume"
};
const type1c = {
    shortDescription: "straight & coarse",
    longDescription: "bone-straight, hard to curl"
};


const type1 = {
    categoryDescription: "straight",
    subtypes: [type1a, type1b, type1c]
};
const type2 = {
    categoryDescription: "straight2",
    subtypes: [type1a, type1b, type1c]
};
const type3 = {
    categoryDescription: "straight3",
    subtypes: [type1a, type1b, type1c]
};
const type4 = {
    categoryDescription: "straight4",
    subtypes: [type1a, type1b, type1c]
};


const all_types = [type1, type2, type3, type4];

export { all_types };