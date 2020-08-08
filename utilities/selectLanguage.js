const selectNodes = (parent, type) => {
    const keys = Object.keys(parent);
    const newObj = {};
    if (keys.includes(type) && (typeof parent[type] === 'string' || Array.isArray(parent[type]))) {
        newObj[type] = parent[type];
    } else {
        if (typeof parent === 'object') {
            keys.forEach(key => {
                newObj[key] = selectNodes(parent[key], type);
            });
        }
    }
    return newObj;
}

module.exports = selectLanguage = (textObj, language) => {
    const langObject = selectNodes(textObj, language);
    return langObject;
};