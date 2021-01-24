const { subordinates } = require("./helper");

exports.handler = async (id) => {
 
    const subsubordinates = subordinates(id);
    const response = {
        statusCode: 200,
        subsubordinates,

    };
    return response;
};
