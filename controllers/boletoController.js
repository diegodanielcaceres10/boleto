// Define modules
const moment = require("moment");
const bank = require("../utils/bank");
const payment = require("../utils/payment");

exports.validate = async (req, res) => {
    try {
        const { digitalline } = req.params;

        // Validate number
        if (isNaN(digitalline)) {
            console.error(moment().format(), "invalid parameters");
            return res.status(400).send("invalid parameters");
        };

        // Validate type
        let type = "";
        if (digitalline.length == 47) type = "bank";
        else if (digitalline.length == 48) type = "payment";
        else {
            console.error(moment().format(), "invalid parameters");
            console.log(digitalline.length);
            return res.status(400).send("invalid parameters");
        };

        let data;
        if (type == "bank") {
            data = await bank.getData(digitalline);
        } else {
            data = await payment.getData(digitalline);
        };

        if (data && data.error) {
            console.error(moment().format(), "invalid digital line");
            console.log(data.error);
            return res.status(400).send("invalid digital line");
        };

        // Define response
        return res.status(200).send({ ...data });
    } catch (err) {
        console.error(moment().format(), err);
        return res.status(500).send(err);
    };
};
