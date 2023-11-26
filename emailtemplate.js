const generateEmail = (appointment) => {
  const { yourName, yourEmail, yourMessage } = appointment;

  const subject = "Wiadomość z crahHerkDev";
  const html = `
    <h2>Wiadomość</h2>
   <p>Imię:${yourName}</p>
<p>Email:${yourEmail}</p>
<p>Wiadomość:${yourMessage}</p>   
`;

  return { subject: subject, html: html };
};

module.exports = {
  generateEmail,
};
