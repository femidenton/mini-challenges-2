function isolateDuplicates(text) {
    let isolatedStr = "";
    let mapper = {};
    let counter = 0;

    if (typeof text !== "string") {
        throw new Error("Please enter a valid strings")
    } else {
        const str = text.toUpperCase();

        for (let i = 0; i < text.length; i++) {
            if (str[i].repeat(2) === str[i - 2] + str[i - 1]) {

                if (!mapper[str[i]]) {
                    mapper[str[i]] = text[i];
                } else {
                    mapper[str[i]] += text[i]
                }

                if (str[i] !== str[i + 1]) {
                    isolatedStr += "[" + mapper[str[i]] + "]";
                    counter += 1;
                    mapper = {};
                }
            } else { isolatedStr += text[i]; }
        }
        return [isolatedStr, counter]
    }
}
module.exports = isolateDuplicates;