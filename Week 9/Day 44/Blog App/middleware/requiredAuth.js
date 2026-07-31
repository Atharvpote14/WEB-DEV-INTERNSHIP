const jwt = require('jsonwebtoken');
function requireAuth(req, res, next) {
const token = req.cookies.token; // cookie-parser makes this available
    if (!token) {
    }
    return res.status(401).json({ error: 'Not logged in' });
    try {
    const payload = jwt.verify (token, process.env.JWT_SECRET);
    req.user = payload; // { id: '...'} available to every downstream handler
    next();
    } catch (err) {
    res.status(401).json({ error: 'Invalid or expired session' });
    }
}
module.exports = requireAuth;