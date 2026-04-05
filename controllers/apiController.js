const service = require("../services/externalService");

exports.getData = async (req, res) => {
    const uid = req.query.uid;

    if (!uid) {
        return res.status(400).json({
            status: false,
            message: "UID required"
        });
    }

    try {
        const result = await service.fetch(uid);

        res.json({
            status: true,
            data: result
        });

    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Failed"
        });
    }
};
