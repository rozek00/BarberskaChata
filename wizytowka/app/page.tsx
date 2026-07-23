import Image from "next/image";
import fs from "fs/promises";
import path from "path";

async function getData() {
  const filePath = path.join(process.cwd(), "data.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file) as Record<string, string>;
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <header className="hero">
        <div className="container hero-content">
          <div>
            <p className="eyebrow">Salon barberski</p>
            <h1>Barberska Chata</h1>
            <p className="hero-text">
              Profesjonalne strzyżenie i stylizacja brody w przyjaznej atmosferze.
              Podmień nazwę i dane, aby dopasować stronę do swojego salonu.
            </p>
            <div className="hero-buttons">
              <form
                action="https://barberskachata61.booksy.com/a/"
                method="get"
                target="_blank"
              >
                <button className="button button-primary" type="submit">
                  Zarezerwuj wizytę
                </button>
              </form>
              <a className="button button-secondary" href="#oferta">
                Zobacz ofertę
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-header">
              <span className="tag">Barber</span>
              <span className="tag">Stylizacja</span>
            </div>
            <div className="brand-logo">
              <Image src="/zdjecia/logo.png" alt="Barberska Chata logo" width={140} height={140} />
            </div>
            <div className="card-body">
              <p>
                Najlepsze strzyżenie w centrum. Komfortowy wystrój, szybka obsługa i
                przyjazna ekipa.
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/share/1BVMfetJXc/?mibextid=wwXIfr"
                  className="social-link social-link--facebook"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i className="fa fa-facebook-f"></i>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/barberskachata?igsh=MTJzdm85YzEzczIybQ%3D%3D&utm_source=qr"
                  className="social-link social-link--instagram"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image src="/zdjecia/instagram.png" alt="Instagram" width={24} height={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section about" id="o-nas">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">O nas</p>
              <h2>Nowoczesny salon dla mężczyzn</h2>
            </div>
            <p className="section-text">
              W Barberskiej Chacie stawiamy na dokładność i styl. Nasz zespół potrafi
              dobrać fryzurę i brodę do Twojego charakteru. Wygodne umówienie wizyty
              oraz szybka realizacja to nasz standard.
            </p>
          </div>
        </section>

        <section className="section team" id="barberzy">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Barberzy</p>
              <h2>Nasi mistrzowie nożyczek</h2>
            </div>
            <p className="section-text">
              Poznaj ekipę, która zadba o Twój styl i dopasuje fryzurę do Twojego
              charakteru. Zdjęcia możesz podmienić na prawdziwe kadry Karola, Oskara i
              Sebka.
            </p>
            <div className="grid team-grid">
              <article className="card team-card">
                <div className="team-photos">
                  <Image src="/zdjecia/sebek1.jpg" alt="Sebek" width={320} height={240} />
                  <Image src="/zdjecia/sebek2.jpg" alt="Sebek" width={320} height={240} />
                </div>
                <p className="team-name">Sebastian</p>
                <p className="team-role">Specjalista od klasycznych cięć</p>
              </article>

              <article className="card team-card">
                <div className="team-photos">
                  <Image src="/zdjecia/oskar1.jpg" alt="Oskar" width={320} height={240} />
                  <Image src="/zdjecia/oskar2.jpg" alt="Oskar" width={320} height={240} />
                </div>
                <p className="team-name">Oskar</p>
                <p className="team-role">Ekspert od modnych fade&apos;ów</p>
              </article>

              <article className="card team-card">
                <div className="team-photos">
                  <Image src="/zdjecia/karol1.jpg" alt="Karol" width={320} height={240} />
                  <Image src="/zdjecia/karol2.jpg" alt="Karol" width={320} height={240} />
                </div>
                <p className="team-name">Karol</p>
                <p className="team-role">Mistrz trymowania brody</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section gallery" id="galeria">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Galeria</p>
              <h2>Najlepsze kadry z salonu</h2>
            </div>
            <p className="section-text">
              Przykładowe realizacje i atmosfera z Barberskiej Chaty. Podmieniaj zdjęcia
              na swoje najlepsze ujęcia.
            </p>
            <div className="grid gallery-grid">
              <article className="gallery-card">
                <Image src="/zdjecia/salon.jpg" alt="Strzyżenie Karola" width={480} height={360} />
                <div className="gallery-caption">Strzyżenie z charakterem</div>
              </article>
              <article className="gallery-card">
                <Image src="/zdjecia/salon2.jpg" alt="Fade od Oskara" width={480} height={360} />
                <div className="gallery-caption">Precyzyjne fade&apos;y</div>
              </article>
              <article className="gallery-card">
                <Image src="/zdjecia/salon3.jpg" alt="Stylizacja Sebka" width={480} height={360} />
                <div className="gallery-caption">Stylizacje męskie</div>
              </article>
              <article className="gallery-card">
                <Image src="/zdjecia/karol2.jpg" alt="Broda Karola" width={480} height={360} />
                <div className="gallery-caption">Brody i trymowanie</div>
              </article>
              <article className="gallery-card">
                <Image src="/zdjecia/oskar2.jpg" alt="Detalowe cięcie" width={480} height={360} />
                <div className="gallery-caption">Detale i wykończenia</div>
              </article>
              <article className="gallery-card">
                <Image src="/zdjecia/sebek2.jpg" alt="Fryzura Sebka" width={480} height={360} />
                <div className="gallery-caption">Profesjonalne cięcia</div>
              </article>
            </div>
          </div>
        </section>

        <section className="section services" id="oferta">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Oferta</p>
              <h2 className="przerwa">Cennik usług barberskich</h2>
            </div>
            <div className="grid pricing-list">
              <article className="card pricing-card">
                <h3>Strzyżenie męskie</h3>
                <p>Dobór fryzury do kształtu twarzy</p>
                <div className="pricing-images">
                  <Image src="/zdjecia/meskie1.jpeg" alt="Strzyżenie męskie" width={480} height={360} />
                  <Image src="/zdjecia/meskie2.jpeg" alt="Strzyżenie męskie" width={480} height={360} />
                </div>
                <div className="price-list">
                  <div className="price-item">
                    <span>Sebastian</span>
                    <strong>{data.StrzyzenieSebastian} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Oskar</span>
                    <strong>{data.StrzyzenieOskar} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Karol</span>
                    <strong>{data.StrzyzenieKarol} zł</strong>
                  </div>
                </div>
              </article>

              <article className="card pricing-card">
                <h3>STRZYŻENIE CHŁOPCA</h3>
                <p>Strzyżenie chłopców do 12 roku życia</p>
                <div className="pricing-images">
                  <Image src="/zdjecia/chlopca.jpeg" alt="Strzyżenie chłopców" width={480} height={360} />
                  <Image src="/zdjecia/chlopca2.jpeg" alt="Strzyżenie chłopców" width={480} height={360} />
                </div>
                <div className="price-list">
                  <div className="price-item">
                    <span>Sebastian</span>
                    <strong>{data.StrzyzenieDzieciSebastian} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Oskar</span>
                    <strong>{data.StrzyzenieDzieciOskar} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Karol</span>
                    <strong>{data.StrzyzenieDzieciKarol} zł</strong>
                  </div>
                </div>
              </article>

              <article className="card pricing-card">
                <h3>Combo</h3>
                <p>Strzyżenie włosów i trymowanie brody</p>
                <div className="pricing-images">
                  <Image src="/zdjecia/combo.jpeg" alt="Combo strzyżenie i trymowanie brody" width={480} height={360} />
                </div>
                <div className="price-list">
                  <div className="price-item">
                    <span>Sebastian</span>
                    <strong>{data.ComboSebastian} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Oskar</span>
                    <strong>{data.ComboOskar} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Karol</span>
                    <strong>{data.ComboKarol} zł</strong>
                  </div>
                </div>
              </article>

              <article className="card pricing-card">
                <h3>TRYMOWANIE BRODY</h3>
                <p>Nadanie kształtu i skrócenie brody</p>
                <div className="pricing-images">
                  <Image src="/zdjecia/broda.jpeg" alt="Trymowanie brody" width={480} height={360} />
                </div>
                <div className="price-list">
                  <div className="price-item">
                    <span>Sebastian</span>
                    <strong>{data.StrzyzenieBrodySebastian} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Oskar</span>
                    <strong>{data.StrzyzenieBrodyOskar} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Karol</span>
                    <strong>{data.StrzyzenieBrodyKarol} zł</strong>
                  </div>
                </div>
              </article>

              <article className="card pricing-card">
                <h3>Tuszowanie siwizny</h3>
                <p>Tuszowanie włosów i brody</p>
                <div className="price-list">
                  <div className="price-item">
                    <span>Tuszowanie włosów</span>
                    <strong>{data.SiwiznaWlosy} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Tuszowanie brody</span>
                    <strong>{data.SiwiznaBrody} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Tuszowanie (włosy + broda)</span>
                    <strong>{data.SiwiznaOba} zł</strong>
                  </div>
                </div>
              </article>

              <article className="card pricing-card">
                <h3>Depilacja woskiem</h3>
                <p>Precyzyjne depilacje dla komfortu i gładkiej skóry</p>
                <div className="price-list">
                  <div className="price-item">
                    <span>Woskowanie uszu</span>
                    <strong>{data.DepilacjaUszy} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Woskowanie nosa</span>
                    <strong>{data.DepilacjaNos} zł</strong>
                  </div>
                  <div className="price-item">
                    <span>Woskowanie (uszy + nos)</span>
                    <strong>{data.DepilacjaOba} zł</strong>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section contact" id="kontakt">
          <div className="container grid contact-grid">
            <div>
              <div className="section-header">
                <p className="eyebrow">Kontakt</p>
                <h2>Skontaktuj się z nami</h2>
              </div>
              <p>
                Zadzwoń, napisz lub odwiedź nas w salonie. Z przyjemnością doradzimy i
                umówimy dogodny termin.
              </p>
              <div className="contact-card">
                <p>
                  <strong>Adres:</strong> ul. Olsztyńska 1A, U1, 15-870, Białystok
                </p>
                <p>
                  <strong>Telefon:</strong> +48 123 456 789
                </p>
                <p>
                  <strong>Email:</strong> kontakt.barberskachata@gmail.com
                </p>
                <p>
                  <strong>Godziny:</strong> Pon-Pt 9:00-21:00, Sob 10:00-16:00
                </p>
              </div>
            </div>
            <div className="map-card">
              <h3>Znajdź nas</h3>
              <div className="map-placeholder">
                <iframe
                  className="map-frame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.834316390548!2d23.148280176957822!3d53.149067989465756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffd0eb0b1eba7%3A0x63b76be8f11f9222!2sBarberska%20Chata%20Karol%20Klich!5e0!3m2!1spl!2spl!4v1784226751430!5m2!1spl!2spl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <p>Tu możesz dodać mapę Google lub zdjęcie lokalu.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Barberska Chata. Wszystkie prawa zastrzeżone.</p>
          <p>
            Podmień nazwę, adres i godziny, aby dopasować stronę do swojego salonu.
          </p>
        </div>
      </footer>
    </>
  );
}
