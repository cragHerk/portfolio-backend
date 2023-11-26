const express = require("express");
const router = express.Router();
const { sendEmail } = require("./emailsender.js");
const { generateEmail } = require("./emailtemplate.js");
app.use(express.json());
router.post("/sendEmail", async (req, res) => {
  const { name, email, message } = req.body;

  const newMessage = {
    name,
    email,
    message,
  };

  try {
    const emailInfo = generateEmail(newMessage);
    await sendEmail(emailInfo);
  } catch (emailError) {
    return res.status(500).json({ message: "Błąd podczas wysyłania e-maila." });
  }

  res.status(200).json({ message: "E-mail został wysłany pomyślnie." });
});

module.exports = router;
