/**
 * Extract the 'key' attribute from the object 'jsonObj'
 * @param {json} jsonObj 
 * @param {text} key 
 */
const selectNodes = (jsonObj, key) => {
    const keys = Object.keys(jsonObj);
    const newObj = {};
    if (keys.includes(key) && (typeof jsonObj[key] === 'string' || Array.isArray(jsonObj[key]))) {
        newObj[key] = jsonObj[key];
    } else {
        if (typeof jsonObj === 'object') {
            keys.forEach(k => {
                newObj[k] = selectNodes(jsonObj[k], key);
            });
        }
    }
    return newObj;
}

/**
 * Extract only one language from a json object containing many languages
 * @param {json} textObj 
 * @param {string} language 
 */
const selectLanguage = (textObj, language) => {
    if (textObj === null) {
        return null;
    }
    return selectNodes(textObj, language);
};

module.exports = selectLanguage;