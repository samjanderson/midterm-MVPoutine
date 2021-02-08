/**
 * The following route gets all values from the orders table given a user ID in POSTGRES-SQL and returns them as a
 * JSON when the user navigates to /api/order.
**/

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    // const ownerId = req.session.userID
    const ownerID = 1
    // console.log(ownerId)
    db.query(`SELECT * FROM orders WHERE owner_id = '${ownerID}';`)
      .then(data => {
        // console.log(data)
        const orders = data.rows;
        res.json({ orders });
        // console.log(orders)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.post("/:id", (req, res) => {
    console.log(req.params.id);
  })
  return router;
};

