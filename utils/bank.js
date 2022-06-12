// Define modules
const moment = require("moment");
const dv = require("../utils/dv");

exports.getData = (data) => {
    try {
        let values = {};
        const group1 = data.slice(0, 10);
        const group2 = data.slice(10, 21);
        const group3 = data.slice(21, 32);
        const group4 = data.slice(32, 33);
        const group5 = data.slice(33, 47);

        values.barCode = group1.slice(0, 4) + group4 + group5 + group1.slice(4, 9) + group2.slice(0, 10) + group3.slice(0, 10);

        let datafactor = group5.slice(0, 4) - 1000;
        let database = "2000-07-03";
        values.expirationDate = moment(database).add(datafactor, "days").format("YYYY-MM-DD");
        values.amount = parseInt(group5.slice(4, 12)) + "." + group5.slice(12, 14);

        let group1DV = dv.validDVs(group1.slice(0, 9), 2);
        if (group1DV != group1.slice(9, 10)) {
            return {
                error: "dv_group1_invalid",
            };
        };

        let group2DV = dv.validDVs(group2.slice(0, 10), 1);
        if (group2DV != group2.slice(10, 11)) {
            return {
                error: "dv_group2_invalid",
            };
        };

        let group3DV = dv.validDVs(group3.slice(0, 10), 1);
        if (group3DV != group3.slice(10, 11)) {
            return {
                error: "dv_group3_invalid",
            };
        };

        return values;
    } catch (err) {
        throw err;
    };
};
