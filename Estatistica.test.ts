import { Estatistica } from "./Estatistica";

describe("Testes sobre a classe Estatistica", function () {
  test("deve calcular corretamente a média de um conjunto de números", function () {
    let estat = new Estatistica([10, 76, 23, 45, 12, 89, 21, 50, 8]);
    let media = estat.media();
    expect(media.toFixed(2)).toBe("37.11");

    estat = new Estatistica([
      -10, -30, 4, 5, -9, 109, 201, 303, -557, 1165, 13,
    ]);
    media = estat.media();
    expect(media.toFixed(2)).toBe("108.55");

    estat = new Estatistica([
      -9, -5, -12, -34, -100, -657, -321, -928, -77, -66,
    ]);
    media = estat.media();
    expect(media.toFixed(2)).toBe("-220.90");
  });

  test("deve encontrar corretamente a mediana de um conjunto de números", function () {
    let estat = new Estatistica([3, 5, 18, 90, 72, 45, 23, 54, 66, 102, 84]);
    let mediana = estat.mediana();
    expect(mediana).toBe(45);

    estat = new Estatistica([12, 32, 56, -9, -75, 87, 43, -5, 100, 58, -20, 0]);
    mediana = estat.mediana();
    expect(mediana).toBe(65);
  });

  test("deve encontrar corretamente a moda de um conjunto de números", function () {
    let estat = new Estatistica([
      8, 12, 3, 14, 56, 12, 88, 34, 14, 67, 12, 90, -4,
    ]);
    let moda = estat.moda();
    expect(moda).toBe(12);

    estat = new Estatistica([
      90, 67, 80, -7, 21, 95, 23, -7, 11, -4, 29, 120, 111,
    ]);
    moda = estat.moda();
    expect(moda).toBe(-7);
  });

  test("deve calcular corretamente a variância de um conjunto de números", function () {
    let estat = new Estatistica([
      12, 32, 56, -9, -75, 87, 43, -5, 100, 58, -20, 0,
    ]);
    let variancia = estat.variancia();
    expect(variancia.toFixed(2)).toBe("2430.02");

    estat = new Estatistica([3, 5, 18, 90, 72, 45, 23, 54, 66, 102, 84]);
    variancia = estat.variancia();
    expect(variancia.toFixed(2)).toBe("1221.49");
  });

  test("deve calcular corretamente o desvio padrão de um conjunto de números", function () {
    let estat = new Estatistica([10, 76, 23, 45, 12, 89, 21, 50, 8]);
    let desvioPadrao = estat.desvioPadrao();
    expect(desvioPadrao.toFixed(2)).toBe("29.80");

    estat = new Estatistica([
      -10, -30, 4, 5, -9, 109, 201, 303, -557, 1165, 13,
    ]);
    desvioPadrao = estat.desvioPadrao();
    expect(desvioPadrao.toFixed(2)).toBe("410.27");
  });

  test("deve calcular corretamente o coeficiente de variação de um conjunto de números", function () {
    let estat = new Estatistica([
      58, 12, 34, 289, 847, -294, 0, 22, 43, 293, 100,
    ]);
    let coeficienteDeVariacao = estat.coeficienteDeVariacao();
    expect(coeficienteDeVariacao.toFixed(2)).toBe("223.12");

    estat = new Estatistica([
      57, 1, 30, 12, 43, 29, 5, 8, 15, 19, 46, 42, 41, 54, 9, 6,
    ]);
    coeficienteDeVariacao = estat.coeficienteDeVariacao();
    expect(coeficienteDeVariacao.toFixed(2)).toBe("72.70");
  });
});
