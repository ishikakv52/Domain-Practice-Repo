// Central place where every /api/* router gets mounted. Later phases
// (admissions, enquiries, notices, events, news, gallery, teachers,
// students, payments, auth, chat) each get their own routes/*.routes.js
// file and get added here — app.js only ever imports this one file.

const express = require("express");
const healthRoutes = require("./health.routes");

const router = express.Router();

router.use("/health", healthRoutes);

// Phase 2+ will add, e.g.:
// router.use("/admissions", require("./admissions.routes"));
// router.use("/enquiries", require("./enquiries.routes"));
// router.use("/auth", require("./auth.routes"));

module.exports = router;
