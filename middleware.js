const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
    const apiKey = req.get('X-API-Key');
    if (!apiKey) {
        res.status(401).send('No API key provided');
        return;
    }

    const validKeys = fs.readFileSync(VALID_KEYS_PATH, 'utf8').split(os.EOL);
    if (!validKeys.includes(apiKey)) {
        res.status(401).send('INVALID_KEY');
        return;
    }

    next();
};
