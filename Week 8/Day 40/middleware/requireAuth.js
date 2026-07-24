const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization; // "Bearer eyJhbGci..."

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // strip the "Bearer " prefix

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET); // throws if invalid/expired/tampered
        req.user = payload; // attach decoded user info for downstream handlers
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

module.exports = requireAuth;