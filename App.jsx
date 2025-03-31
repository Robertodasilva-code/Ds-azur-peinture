import React from "react";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Bienvenue chez DS Azur Peinture</h1>
      <p>Travaux de peinture - devis rapide et gratuit</p>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p><input type="text" name="nom" placeholder="Nom" required /></p>
        <p><input type="email" name="email" placeholder="Email" required /></p>
        <p><textarea name="message" placeholder="Votre message..." required></textarea></p>
        <p><button type="submit">Envoyer</button></p>
      </form>
    </div>
  );
}
