'use client';
import Image from "next/image";

// Component ConfettiCSS
function ConfettiCSS() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            background: `hsl(${Math.random() * 360}, 90%, 60%)`,
          }}
        />
      ))}
      <style jsx>{`
        .confetti-piece {
          position: absolute;
          top: -40px;
          width: 12px;
          height: 24px;
          border-radius: 3px;
          opacity: 0.7;
          animation: confetti-fall 2.8s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes confetti-fall {
          to {
            top: 100vh;
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-100 to-white relative">
      <ConfettiCSS />
      {/* Alerta informativa */}
      <div className="w-full bg-yellow-400 text-yellow-900 font-semibold text-center py-3 px-2 shadow-md text-lg flex flex-col md:flex-row items-center justify-center gap-2">
        <span className="flex items-center gap-2"><span className="text-xl">🗓️</span> Diumenge 11 de maig de 2025</span>
        <span className="hidden md:inline mx-2">·</span>
        <span className="flex items-center gap-2"><span className="text-xl">📍</span> Ecocentre Les Obagues, 25430 Juneda, Lleida</span>
      </div>
      {/* Header amb imatge de la padrina */}
      <section className="relative h-[520px] flex flex-col md:flex-row items-center justify-between bg-yellow-50 overflow-hidden">
        {/* Fons: Miralcamp */}
        <Image
          src="/img/miralcamp-1.jpg"
          alt="Miralcamp, Lleida"
          title="Miralcamp, Lleida"
          fill
          className="object-cover z-0"
          style={{ filter: 'brightness(0.7)' }}
          priority
        />
        {/* Degradat per llegibilitat */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/90 via-white/80 to-transparent z-10" />
        {/* Text principal */}
        <div className="relative z-20 flex-1 flex flex-col justify-center items-start h-full px-6 py-8 md:pl-16 md:py-0 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-800 drop-shadow-lg mb-4">
            🎉 Celebrem els 90 anys de la <span className="underline decoration-yellow-400 font-bold">Leocàdia Tristany</span> (Alias: Padrina/è o Mamè)!
          </h1>
          <p className="text-lg md:text-2xl text-gray-900 mb-4 drop-shadow max-w-xl">Ens trobem tots a Les Obagues (Juneda) per un dia ple d'alegria, records i molta familia.</p>
        </div>
        {/* Imatge de la padrina */}
        <div className="relative z-20 flex-shrink-0 flex justify-center items-end md:items-center w-full md:w-auto md:pr-16 pb-4 md:pb-0 mt-4 md:mt-0">
          <Image
            src="/img/padrina-top.jpg"
            alt="La padrina elegant"
            width={420}
            height={420}
            className="h-[220px] md:h-[420px] w-auto rounded-2xl shadow-2xl object-contain cursor-pointer transition-transform duration-700 ease-in-out hover:scale-105"
            style={{ transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' }}
            onClick={e => {
              e.currentTarget.style.transform += ' rotate(360deg)';
              setTimeout(() => { e.currentTarget.style.transform = ''; }, 700);
            }}
            priority
          />
        </div>
      </section>

      {/* Introducció */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          La nostra padrina fa anys... i ens fa molta il·lusió compartir aquest dia tan especial amb tota la família!
          Hi haurà menjar, música, fotos, abraçades i, sobretot, molt d'amor.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center mt-4">
          Vine i ajuda'ns a fer d'aquest diumenge un dia inoblidable!
        </p>
      </section>

      {/* Ubicació */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">📍 Com arribar-hi</h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            Ens reunirem a Les Obagues, un espai envoltat de natura, tranquil·litat i molta història familiar. Les Obagues no només és el lloc de la celebració, sinó també l'escenari de molts records d'infància dels cosins: tardes de jocs, aventures pel bosc i dinars a l'aire lliure. Tornar-hi és retrobar-nos amb aquells moments que ens han unit tant.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/img/Obagues 1.png"
                alt="Record especial 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
          <Image
                src="/img/Obagues 2.jpeg"
                alt="Record especial 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
          </div>
          <div className="text-center">
            <a 
              href="https://www.google.com/maps/place/Ecocentre+Les+obagues/@41.5586738,0.8323222,17z/data=!3m1!4b1!4m6!3m5!1s0x12a6c1820ab2dc25:0xe0bba9be9affcfc!8m2!3d41.5586738!4d0.8349025!16s%2Fg%2F11bc739xq2?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              🔗 Obrir ubicació a Google Maps
            </a>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155718872!2d0.8323222!3d41.5586738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6c1820ab2dc25%3A0xe0bba9be9affcfc!2sEcocentre%20Les%20obagues!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-4 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Programa */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-600 tracking-tight">🎉 Una Diada Inoblidable en Família</h2>
          <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white/90">
            <table className="min-w-full divide-y divide-yellow-200">
              <tbody className="text-lg">
                {/* Benvinguda */}
                <tr className="hover:bg-yellow-50 transition-colors duration-300">
                  <td className="py-8 px-4 align-top w-20 text-4xl">🕛</td>
                  <td className="py-8 px-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md p-4 mb-2 flex items-center gap-3">
                      <span className="font-bold text-yellow-700 text-xl">Benvinguda amb sabor i alegria</span>
                      <span className="bg-yellow-400/80 text-yellow-900 font-bold px-3 py-1 rounded-full text-sm shadow">12:00h</span>
                    </div>
                    <span className="text-gray-700">Ens retrobem entre rialles, amb una taula exterior plena de vida: aperitius deliciosos, còctel de benvinguda i música que marca el ritme del dia.<br/><span className="italic text-yellow-600">Un espai per començar a crear records... i abraçades!</span></span>
                  </td>
                </tr>
                {/* Creativitat */}
                <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors duration-300">
                  <td className="py-8 px-4 align-top w-20 text-4xl">🎨</td>
                  <td className="py-8 px-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md p-4 mb-2">
                      <span className="font-bold text-yellow-700 text-xl">Creativitat compartida: personalitza la teva tote bag</span>
                    </div>
                    <span className="text-gray-700">Un racó creatiu on podràs dissenyar la teva pròpia tote bag. <span className="underline decoration-yellow-500 font-semibold">Un petit taller fet amb molt d&apos;amor</span> per deixar-hi empremta… i endur-te un record únic.</span>
                  </td>
                </tr>
                {/* Dinar */}
                <tr className="hover:bg-yellow-50 transition-colors duration-300">
                  <td className="py-8 px-4 align-top w-20 text-4xl">🍽️</td>
                  <td className="py-8 px-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md p-4 mb-2 flex items-center gap-3">
                      <span className="font-bold text-yellow-700 text-xl">Dinar amb gust de casa</span>
                      <span className="bg-yellow-400/80 text-yellow-900 font-bold px-3 py-1 rounded-full text-sm shadow">14:00h</span>
                    </div>
                    <span className="text-gray-700">Prepareu el paladar perquè el menú que ens espera és per llepar-se els dits:</span>
                    <ul className="list-disc list-inside ml-4 mt-2 text-yellow-700">
                      <li><span className="font-semibold underline decoration-yellow-500">Entrants per compartir (cada 4 persones):</span> Croquetes artesanes, calamars cruixents, carxofes tendres, ibèrics seleccionats i coques de recapte.</li>
                      <li><span className="font-semibold">Plat principal:</span> Paella de marisc, cuinada amb passió i producte fresc.</li>
                      <li><span className="font-semibold">Postres:</span> Crema catalana d&apos;Obagues i pastís de xocolata de TinyTasty.</li>
                      <li><span className="font-semibold">Begudes:</span> Aigua, refrescos i opcions sense alcohol.</li>
                    </ul>
                  </td>
                </tr>
                {/* Records */}
                <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors duration-300">
                  <td className="py-8 px-4 align-top w-20 text-4xl">📸</td>
                  <td className="py-8 px-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md p-4 mb-2">
                      <span className="font-bold text-yellow-700 text-xl">Moments que es converteixen en records</span>
                    </div>
                    <span className="text-gray-700">Una càmera Polaroid capturarà les instantànies més tendres i divertides. Les col·locarem en un àlbum especial perquè el dia viscut no s&apos;esborri mai.<br/><span className="italic text-yellow-600">A més... hi haurà una <span className="underline decoration-yellow-500 font-semibold">sorpresa visual</span> que no deixarà ningú indiferent 😉</span></span>
                  </td>
                </tr>
                {/* Tarda de sorpreses */}
                <tr className="hover:bg-yellow-50 transition-colors duration-300">
                  <td className="py-8 px-4 align-top w-20 text-4xl">🎁</td>
                  <td className="py-8 px-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md p-4 mb-2">
                      <span className="font-bold text-yellow-700 text-xl">Tarda plena de sorpreses i emocions</span>
                    </div>
                    <ul className="list-disc list-inside ml-4 mt-2 text-yellow-700">
                      <li><span className="font-semibold">🎲 Detallets de la padrina:</span> La padrina ha preparat un detallet fet a mà per a cadascun. Es rifaran durant la tarda perquè tothom tingui una sorpresa especial!</li>
                      <li><span className="font-semibold">🎶 Concert en directe:</span> El ritme continuarà amb un concert íntim i animat per continuar celebrant plegats.</li>
                      <li><span className="font-semibold">⚽ Partit de futbol: The Cousins vs ???</span> Els campions es decideixen al camp! <span className="underline decoration-yellow-500 font-semibold">No oblidis portar la samarreta vermella</span> per jugar o animar amb estil.</li>
                    </ul>
                  </td>
                </tr>
                {/* Final */}
                <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors duration-300">
                  <td className="py-8 px-4 align-top w-20 text-4xl">💫</td>
                  <td className="py-8 px-4">
                    <div className="bg-yellow-100 border border-yellow-300 rounded-xl shadow-md p-4 mb-2">
                      <span className="font-bold text-yellow-700 text-xl">Una festa construïda entre tots</span>
                    </div>
                    <span className="text-gray-700">Tot ha estat pensat, cuidat i preparat perquè sigui una jornada màgica. Cada detall, cada plat, cada cançó… ha estat triat amb el cor.<br/><span className="italic text-yellow-600">Una diada que celebra qui som, d&apos;on venim i, sobretot, el fet més bonic: que ens tenim els uns als altres.</span></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Música */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">🎵 Llista de reproducció molt especial</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Amb les cançons que fan bategar el cor de la padrina, de la mà d&apos;en Luca, que ens les tocarà en directe. 🎹✨<br/>
            Vinga, tots a aprendre-se-les i a cantar ben fort! Que sigui una festa inoblidable! 💃🎤💕
          </p>
          <div className="w-full max-w-xl mx-auto flex justify-center">
            <iframe 
              src="https://open.spotify.com/embed/playlist/184h1dwUnc9Qo4nCQHj7bX?utm_source=generator&theme=0" 
              className="w-full h-[352px] rounded-lg shadow-lg"
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              aria-label="Llista de reproducció Spotify"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Galeria */}
      {/* [Elimino completament la secció de galeria de records] */}

      {/* Confirmació */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-yellow-500">Vens a celebrar-ho amb nosaltres?</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Si vols venir, només cal que ens ho diguis! Fes clic al botó i confirma la teva assistència per WhatsApp.
          </p>
          <div className="flex justify-center mb-8">
            <Image
              src="/img/familia.png"
              alt="Foto de família"
              width={400}
              height={300}
              className="rounded-2xl shadow-xl max-h-72 object-cover border-4 border-yellow-200"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://wa.me/34656548596?text=Hola!%20M'apunto%20a%20la%20festa%20de%20la%20padrina!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-colors flex items-center gap-2"
              aria-label="Confirmar assistència per WhatsApp"
            >
              <span>📲</span> Confirmar per WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-100 py-8">
        <div className="text-center text-gray-700">
          <p className="text-lg">Amb molta estima,</p>
          <p className="text-xl font-semibold">la família Claramunt Tristany 💛</p>
        </div>
      </footer>
      {/* Estelada subtil */}
      <Image
        src="/img/estelada.png"
        alt="Estelada catalana"
        width={64}
        height={48}
        className="fixed bottom-4 right-4 w-16 h-12 opacity-60 drop-shadow-lg z-50 select-none pointer-events-none"
        style={{ borderRadius: '6px' }}
      />
    </main>
  );
}
