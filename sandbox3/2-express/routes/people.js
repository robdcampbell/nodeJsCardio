const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// OPTION 1
/*
  router.get("/", getPeople);
  router.post("/", createPerson);
  router.post("/postman", createPersonPostman);
  router.put("/:id", updatePerson);
  router.delete("/:id", deletePerson);
*/

// OPTION 2
router.route("/").get(getPeople).post(createPerson);
router.router("/postman").post(createPersonPostman);
router.router("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
