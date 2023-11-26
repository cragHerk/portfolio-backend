const generateEmail = (appointment) => {
  const { name, email, message } = appointment;

  const subject = "Wiadomość z crahHerkDev";
  const html = `
    <h2>Wiadomość</h2>
   <p>Imię:${name}</p>
<p>Email:${email}</p>
<p>Wiadomość:${message}</p>   
`;

  return { subject: subject, html: html };
};

module.exports = {
  generateEmail,
};
