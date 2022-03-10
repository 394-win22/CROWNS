const schema = {
    shortDescription: "straight",
    longDescription: "straight with little to no volume",
    exampleImage: "./images/test.png",
    code: "1A"
};


const type1a = {
    shortDescription: "fine",
    longDescription: "Type 1A is hair that has baby-fine, completely straight strands. This type is straight from root to tip. Typically, type 1A hair has little to no body and has a difficult time keeping a curl. This hair type is actually pretty rare.",
    exampleImage: "./images/hairTypes/1A.png",
    code: "1A"
};
const type1b = {
    shortDescription: "medium",
    longDescription: "Type 1B hair is straight, but has more volume than Type 1A. Its medium texture can generally hold curls giving the hair more texture and movement.",
    exampleImage: "./images/hairTypes/1B.jpeg",
    code: "1B"
};
const type1c = {
    shortDescription: "coarse",
    longDescription: "Type 1C hair is straight and is usually coarse and thick, which can result in frizzy hair depending on the environment or climate. When air-dried, this hair type can achieve a tousled look, while still lying flat on the scalp.",
    exampleImage: "./images/hairTypes/1C.jpeg",
    code: "1C"
};

const type2a = {
    shortDescription: "loose waves",
    longDescription: "2A hair is made up of very minimal waves that stay close to the head. 2A textures range from fine to coarse strands. This hair type is very easy to style and straighten, but can be prone to frizz. It also has limited body and volume. ",
    exampleImage: "./images/hairTypes/2A.png",
    code: "2A"
};
const type2b = {
    shortDescription: "defined waves",
    longDescription: "2B hair is made up of very loose, “S” shaped waves that stay close to the head. 2B textures range from fine to coarse strands. This hair type is very easy to style and straighten, but can be prone to frizziness. It may also have limited body and volume.",
    exampleImage: "./images/hairTypes/2B.png",
    code: "2B"
};
const type2c = {
    shortDescription: "wide waves",
    longDescription: "2C hair is made up of a mixture of both waves and curls - the best of both worlds! The texture of 2C hair is typically thick and coarse. This gorgeous hair type is unfortunately prone to dryness and frizzing.",
    exampleImage: "./images/hairTypes/2C.png",
    code: "2C"
};

const type3a = {
    shortDescription: "loose curl",
    longDescription: "3A hair is made up of well-defined and springy curls that have a loopy, “S” shaped pattern. Their circumference is the size of a piece of sidewalk chalk. 3A ringlets have a fine to medium texture. This curl type benefits from lots of body and movement, but is prone to frizzing and dryness.",
    exampleImage: "./images/hairTypes/3A.png",
    code: "3A"
};
const type3b = {
    shortDescription: "tight curls",
    longDescription: "3B hair is made up of well-defined, spiral curls that range from bouncy ringlets to tight corkscrews. Their circumference is the size of a large marker. 3B curls have a fine to medium texture. This curl type benefits from lots of body and movement but is prone to frizzing and dryness.",
    exampleImage: "./images/hairTypes/3B.png",
    code: "3B"
};
const type3c = {
    shortDescription: "corkscrews",
    longDescription: "3C hair is made up of well-defined, tight corkscrews or coils with lots of strands densely packed together. Their circumference is the size of a pencil or straw. 3C curls have a fine to medium texture. This curl type is prone to dryness, tangles, and lack of curl definition.",
    exampleImage: "./images/hairTypes/3C.png",
    code: "3C"
};


const type4a = {
    shortDescription: "defined coil",
    longDescription: "Type 4a hair has medium-sized, loosely packed curls. The curls have a springy S-shape and are about the size of a crochet needle. Each 4a strand independently curls or spirals away from other neighboring strands.",
    exampleImage: "./images/hairTypes/4A.png",
    code: "4A"
};
const type4b = {
    shortDescription: "z coil",
    longDescription: "4B hair is made up of very tightly coiled curls that have the circumference of a watch spring. Their texture can range from fine all the way to coarse. This curl type is prone to dryness, breakage, tangles, shrinkage, and lack of curl definition. It's also highly dense and wiry.",
    exampleImage: "./images/hairTypes/4B.png",
    code: "4B"
};
const type4c = {
    shortDescription: "tight coil",
    longDescription: "4c hair type has the tightest curl pattern of all the curly hair types. Strands are formed in tight, springy, ringlets. 4c hair tends to clump more at the ends and is even more prone to shrinkage. 4c hair can shrink up to 75% of its length!",
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