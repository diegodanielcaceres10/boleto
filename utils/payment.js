// Define modules
const dv = require("../utils/dv");

exports.getData = async (data) => {
    try {
        let values = {};
        const group1 = data.slice(0, 12);
        const group2 = data.slice(12, 24);
        const group3 = data.slice(24, 36);
        const group4 = data.slice(36, 48);

        values.barCode = group1.slice(0, 11) + group2.slice(0, 11) + group3.slice(0, 11) + group4.slice(0, 11);

        values.amount = parseInt(values.barCode.slice(4, 13)) + "." + values.barCode.slice(13, 15);
        values.expirationDate = "20" + values.barCode.slice(21, 23) + "-" + values.barCode.slice(23, 25) + "-" + values.barCode.slice(25, 27);

        let group1DV = dv.validDVs(group1.slice(0, 11), 2);
        if (group1DV != group1.slice(11, 12)) {
            return {
                error: "dv_group1_invalid",
            };
        };

        let group2DV = dv.validDVs(group2.slice(0, 11), 2);
        if (group2DV != group2.slice(11, 12)) {
            return {
                error: "dv_group2_invalid",
            };
        };

        let group3DV = dv.validDVs(group3.slice(0, 11), 2);
        if (group3DV != group3.slice(11, 12)) {
            return {
                error: "dv_group3_invalid",
            };
        };

        let group4DV = dv.validDVs(group4.slice(0, 11), 2);
        if (group4DV != group4.slice(11, 12)) {
            return {
                error: "dv_group4_invalid",
            };
        };

        return values;
    } catch (err) {
        throw err;
    };
};
