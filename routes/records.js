const express = require('express');
const recordRouter = express.Router()

const { createRecord } = require('../sfopertions')


// api/records
recordRouter.route('/').post(async (request, response) => {
    const record = { ...request.body };
    const responseObject = await createRecord(record);

    return response.status(200).send(responseObject)
})

module.exports = recordRouter