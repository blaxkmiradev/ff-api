exports.success = (res, data) => {
    return res.json({ status: true, data });
};

exports.error = (res, message) => {
    return res.status(500).json({ status: false, message });
};
