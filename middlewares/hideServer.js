module.exports = (req, res, next) => {
    res.removeHeader("X-Powered-By");
    res.setHeader("X-API", "Private");

    next();
};
