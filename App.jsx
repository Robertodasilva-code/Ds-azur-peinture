import React from "react";

export default function App() {
  return (
    <div className="p-6 space-y-10">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">DS Azur Peinture</h1>
        <p>Travaux de peinture intérieure et extérieure - devis rapide et gratuit</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Pièces à rénover</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Salon", "Chambre", "Cuisine", "Salle de bain", "Toilettes", "Entrée"].map(piece => (
            <div key={piece} className="border rounded-xl p-4 text-center hover:shadow">
              {piece}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Demander un devis</h2>
        <form name="contact" method="POST" data-netlify="true" className="space-y-4 max-w-md">
          <input type="hidden" name="form-name" value="contact" />
          <input name="nom" type="text" placeholder="Nom" required className="w-full border p-2 rounded" />
          <input name="email" type="email" placeholder="Email" required className="w-full border p-2 rounded" />
          <input name="telephone" type="tel" placeholder="Téléphone" required className="w-full border p-2 rounded" />
          <textarea name="message" placeholder="Décrivez votre projet..." rows="4" className="w-full border p-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
        </form>
      </section>
    </div>
  );
}
