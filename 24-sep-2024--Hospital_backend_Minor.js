const express = require("express");
const app = express();

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

// GET route to fetch kidney information
app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy === true) {
            numberOfHealthyKidneys += 1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

// POST route to add new kidney information
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;

    // Check if 'isHealthy' exists and is a boolean
    if (typeof isHealthy === 'boolean') {
        users[0].kidneys.push({
            healthy: isHealthy
        });

        res.json({
            msg: "Kidney status added successfully!"
        });
    } else {
        // Return an error if 'isHealthy' is missing or not a boolean
        res.status(400).json({
            msg: "'isHealthy' must be a boolean (true or false)."
        });
    }
});

// PUT route to update an existing kidney's status
app.put("/:index", function (req, res) {
    const index = parseInt(req.params.index);
    const isHealthy = req.body.isHealthy;

    // Validate that 'index' is a valid number and 'isHealthy' is a boolean
    if (index >= 0 && index < users[0].kidneys.length && typeof isHealthy === 'boolean') {
        users[0].kidneys[index].healthy = isHealthy;

        res.json({
            msg: `Kidney status at index ${index} updated successfully!`
        });
    } else {
        res.status(400).json({
            msg: "Invalid index or 'isHealthy' must be a boolean (true or false)."
        });
    }
});

// DELETE route to remove a kidney by index
app.delete("/:index", function (req, res) {
    const index = parseInt(req.params.index);

    // Check if the index is within the valid range
    if (index >= 0 && index < users[0].kidneys.length) {
        users[0].kidneys.splice(index, 1);

        res.json({
            msg: `Kidney at index ${index} removed successfully!`
        });
    } else {
        res.status(400).json({
            msg: "Invalid index. Unable to remove kidney."
        });
    }
});

// Start the server on port 3000
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
