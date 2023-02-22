const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const os = require('os');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;

function generateApiKey() {
    // Generate a random 32-character string
    const apiKey = [...Array(32)]
        .map(() => Math.floor(Math.random() * 36).toString(36))
        .join('');

    return apiKey;
}

function addApiKey(apiKey) {
    // Append the new API key to the end of the file
    const keyString = apiKey + os.EOL;
    fs.appendFileSync(VALID_KEYS_PATH, keyString);
} 

module.exports = (req, res) => {
    const apiKey = generateApiKey();
    addApiKey(apiKey);

    res.status(201).json({ apiKey });
};


