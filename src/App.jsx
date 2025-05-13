import React, { useState } from "react";

export default function MRYA() {
  const [coin, setCoin] = useState("");
  const [amount, setAmount] = useState("");
  const [rekt, setRekt] = useState(null);
  const [gallery] = useState([
    "I bought the top... again.",
    "Lost 90%, gained experience.",
    "WAGMI turned into NAGMI.",
    "I sold my fridge for $PEPE."
  ]);

  const generateRekt = () => {
    const score = Math.floor(Math.random() * 1001);
    const messages = [
      "You deserve a digital hug.",
      "That was a brave move...",
      "GIGA REKT achieved.",
      "Welcome to the Rekt Club.",
      "Next time, DYOR. Or not."
    ];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setRekt({ score, msg });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans px-4 py-8">
      {/* HERO */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">$MRYA – Meme Rekt You Again</h1>
        <p className="text-xl mb-6">We got rekt. We meme back stronger.</p>
        <div className="space-x-4">
          <a href="https://pump.fun" target="_blank" className="bg-yellow-500 px-4 py-2 rounded">💰 Buy $MRYA</a>
          <a href="https://twitter.com/MRYAcoin" target="_blank" className="bg-blue-500 px-4 py-2 rounded">🐦 Twitter</a>
          <a href="#rekt" className="bg-red-600 px-4 py-2 rounded">🤖 Play REKT</a>
        </div>
      </section>

      {/* WHY MRYA */}
      <section className="text-center py-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why $MRYA?</h2>
        <p className="mb-2">No utility? No problem. We have pain.</p>
        <p>Crypto made us poor. Memes will make us legends.</p>
      </section>

      {/* TOKENOMICS */}
      <section className="bg-gray-900 text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div>🔥 Total Supply: 1,000,000,000</div>
          <div>🧠 Community: 69%</div>
          <div>🎁 Rewards: 15%</div>
          <div>🛠 Dev & LP: 10%</div>
          <div>🔒 Locked Liquidity: 6%</div>
        </div>
      </section>

      {/* REKT SCORE GAME */}
      <section id="rekt" className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Get Your REKT Score</h2>
        <input placeholder="Coin name..." onChange={e => setCoin(e.target.value)} className="text-black px-4 py-2 rounded mb-2"/>
        <br />
        <input placeholder="Amount lost..." onChange={e => setAmount(e.target.value)} className="text-black px-4 py-2 rounded mb-2"/>
        <br />
        <button onClick={generateRekt} className="bg-red-600 px-4 py-2 rounded">Calculate REKT</button>
        {rekt && (
          <div className="mt-4">
            <p className="text-2xl text-red-400 font-bold">{rekt.score}/1000 – REKT</p>
            <p>{rekt.msg}</p>
            <p className="text-sm">Lost ${amount} on <strong>{coin}</strong></p>
            <a target="_blank" href={`https://twitter.com/intent/tweet?text=I got REKT with ${coin} at ${rekt.score}/1000. ${rekt.msg} via $MRYA`} className="text-blue-400 underline mt-2 inline-block">Tweet my REKT</a>
          </div>
        )}
      </section>

      {/* CONFESSION */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Confess Your REKT</h2>
        <p className="mb-4 italic">“I bought $X thinking I'd be rich. Now I sleep in my car.”</p>
        <a href="https://twitter.com/intent/tweet?text=My REKT story: I lost everything on $MRYA. But now I meme harder than ever. Join the revenge." target="_blank" className="bg-purple-600 px-4 py-2 rounded">Confess on Twitter</a>
      </section>

      {/* GALLERY */}
      <section className="py-12 text-center bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">Top Meme Confessions</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {gallery.map((meme, i) => (
            <div key={i} className="bg-black border border-gray-700 p-4 rounded">{meme}</div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        &copy; 2025 Meme Rekt You Again. All pain reserved.
      </footer>
    </div>
  );
}