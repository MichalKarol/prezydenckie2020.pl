import React from "react";
import style from "./MainView.module.css";
import { Timer } from "../components/Timer/Timer";
import { FakeButton } from "../components/FakeButton/FakeButton";
import { Links } from "../common/links";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function MainView() {
  return (
    <div className={style.MainView}>
      <section id="timer">
        <Timer date="2020-05-10T05:00:00.000Z" />
      </section>
      <section id="candidates">Sylwetki</section>
      <section id="dates">
        <h2>Ważne terminy</h2>
        Na podstawie:&nbsp;&shy;
        <a
          href={Links.zarzadzenie_w_sprawie_wyborow.href}
          target="blank"
          rel="noreferer noopener"
          aria-label={Links.zarzadzenie_w_sprawie_wyborow.aria}
        >
          [Dz.U.&nbsp;2020&nbsp;poz.&nbsp;184]
          <FontAwesomeIcon icon={faExternalLinkAlt} className={style.icon} />
        </a>
        <ul>
          <li>
            <h3>Głosowanie korespondencyjne</h3>
            <span className={style.textImportant}>
              Termin:&nbsp;Do&nbsp;<time>25 kwietnia 2020</time>
            </span>
            <FakeButton
              href={Links.zgloszenie_o_glosowaniu_korespondencyjnym.href}
              target="blank"
              rel="noreferer noopener"
              aria-label={Links.zgloszenie_o_glosowaniu_korespondencyjnym.aria}
            >
              {Links.zgloszenie_o_glosowaniu_korespondencyjnym.name}
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={style.icon}
              />
            </FakeButton>
          </li>
          <li>
            <h3>Poza miejscem zameldowania</h3>
            <span className={style.textImportant}>
              Termin:&nbsp;Do&nbsp;<time>5 maja 2020</time>&nbsp;(
              <time>7 maja 2020</time> gdy poza granicami kraju lub na statkach
              morskich)
            </span>
            <ol>
              <li>
                <h4>
                  Dopisanie do rejestru wyborców gminy&nbsp;&shy;
                  <a
                    href={Links.kodeks_wyborczy.href}
                    target="blank"
                    rel="noreferer noopener"
                    aria-label={Links.kodeks_wyborczy.aria}
                    className={style.noWrap}
                  >
                    [Art.&nbsp;19.&nbsp;§1&nbsp;Kodeksu&nbsp;wyborczego]
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className={style.icon}
                    />
                  </a>
                </h4>
                <p>
                  Gdy mieszkasz na stałe w gminie, ale nie jesteś w niej
                  zameldowany ta opcja pozwala na stałe dopisanie do rejestru
                  wyborców, obejmując taką decyzją również następne wybory i
                  refrenda.
                </p>
                <FakeButton
                  href={Links.wniosek_o_dopisanie_do_rejestru.href}
                  target="blank"
                  rel="noreferer noopener"
                  aria-label={Links.wniosek_o_dopisanie_do_rejestru.aria}
                >
                  {Links.wniosek_o_dopisanie_do_rejestru.name}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className={style.icon}
                  />
                </FakeButton>
              </li>
              <li>
                <h4>
                  Dopisanie do spisu wyborców gminy&nbsp;&shy;
                  <a
                    href={Links.kodeks_wyborczy.href}
                    target="blank"
                    rel="noreferer noopener"
                    aria-label={Links.kodeks_wyborczy.aria}
                    className={style.noWrap}
                  >
                    [Art.&nbsp;28.&nbsp;§1&nbsp;Kodeksu&nbsp;wyborczego]
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className={style.icon}
                    />
                  </a>
                </h4>
                <p>
                  Gdy mieszkasz na tymczasowo w gminie, ale nie jesteś w niej
                  zameldowany ta opcja pozwala na jednorazowe dopisanie do spisu
                  wyborców. Przy następnych wyborach/referendach procedurę
                  należy powtórzyć.
                </p>
                <FakeButton
                  href={Links.wniosek_o_dopisanie_do_spisu.href}
                  target="blank"
                  rel="noreferer noopener"
                  aria-label={Links.wniosek_o_dopisanie_do_spisu.aria}
                >
                  {Links.wniosek_o_dopisanie_do_spisu.name}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className={style.icon}
                  />
                </FakeButton>
              </li>
              <li>
                <h4>
                  Zaświadczenie o prawie do głosowania z urzędu gminy&nbsp;
                  &shy;
                  <a
                    href={Links.kodeks_wyborczy.href}
                    target="blank"
                    rel="noreferer noopener"
                    aria-label={Links.kodeks_wyborczy.aria}
                    className={style.noWrap}
                  >
                    [Art.&nbsp;32.&nbsp;§1&nbsp;Kodeksu&nbsp;wyborczego]
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className={style.icon}
                    />
                  </a>
                </h4>
                W przypadku gdy nie wiesz w jakiej gminie będziesz głosować,
                zaświadczenie z urzędu gminy pozwala na głosowanie w miejscu
                pobytu.
              </li>
            </ol>
          </li>
        </ul>
      </section>
      <section id="who_can">
        <h2>Kto może głosować</h2>
        Na podstawie:&nbsp;&shy;
        <a
          href={Links.kodeks_wyborczy.href}
          target="blank"
          rel="noreferer noopener"
          aria-label={Links.kodeks_wyborczy.aria}
        >
          [Art.&nbsp;10.&nbsp;Kodeksu&nbsp;wyborczego]
          <FontAwesomeIcon icon={faExternalLinkAlt} className={style.icon} />
        </a>
        <ul>
          <li>
            <h3>Prawo wybierana ma :</h3>
            obywatel polski, który najpóźniej w dniu głosowania kończy 18 lat
          </li>

          <li>
            <h3>Nie ma prawa wybierania osoba:</h3>
            <ul>
              <li>pozbawiona praw publicznych prawomocnym orzeczeniem sądu</li>
              <li>
                pozbawiona praw wyborczych prawomocnym orzeczeniem Trybunału
                Stanu
              </li>
              <li>ubezwłasnowolniona prawomocnym orzeczeniem sądu</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="links">
        <h2>Linki</h2>
        <ul>
          {Object.entries(Links).map(([id, link]) => (
            <li key={id}>
              <a
                href={link.href}
                target="blank"
                rel="noreferer noopener"
                id={id}
                aria-label={link.aria}
                className={style.noWrap}
              >
                {link.name}
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className={style.icon}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
