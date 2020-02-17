interface LinkInfo {
  [key: string]: {
    href: string;
    name: string;
    aria: string;
  };
}
export const Links: LinkInfo = {
  zarzadzenie_w_sprawie_wyborow: {
    href:
      "http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20200000184/O/D20200184.pdf",
    name:
      "Postanowienie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lutego 2020 r. w sprawie zarządzenia wyborów Prezydenta Rzeczypospolitej Polskiej",
    aria:
      "Postanowienie Marszałka Sejmu Rzeczypospolitej Polskiej z dnia 5 lutego 2020 r. w sprawie zarządzenia wyborów Prezydenta Rzeczypospolitej Polskiej"
  },
  kodeks_wyborczy: {
    href:
      "http://prawo.sejm.gov.pl/isap.nsf/download.xsp/WDU20110210112/U/D20110112Lj.pdf",
    name: "Kodeks wyborczy",
    aria: "Link do kodeksu wyborczego"
  },
  wniosek_o_dopisanie_do_rejestru: {
    href: "https://www.gov.pl/web/gov/wpisz-sie-do-rejestru-wyborcow",
    name: "Złóż wniosek o wpisanie do rejestru wyborców",
    aria: "Link do wniosku o dopisanie do rejestru wyborców"
  },
  wniosek_o_dopisanie_do_spisu: {
    href: "https://www.gov.pl/web/gov/dopisz-sie-do-spisu-wyborcow",
    name: "Złóż wniosek o wpisanie do spisu wyborców",
    aria: "Link do wniosku o dopisanie do spisu wyborców"
  },
  zgloszenie_o_glosowaniu_korespondencyjnym: {
    href:
      "https://www.gov.pl/web/gov/zglos-zamiar-glosowania-korespondencyjnego",
    name: "Zgłoś zamiar głosowania koresponencyjnego",
    aria: "Zgłoś zamiar głosowania koresponencyjnego"
  }
};
