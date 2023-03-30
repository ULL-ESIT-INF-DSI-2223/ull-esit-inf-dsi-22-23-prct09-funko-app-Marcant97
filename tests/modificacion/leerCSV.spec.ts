import "mocha";
import { expect } from "chai";
import { LeerCSV } from "../../src/modificacion/leerCSV.js";

describe("Tests leerCSV", () => {
  it("run", () => {
    expect(aux1.run()).to.eql({ beneficios: [ 20, 30, 40, 5, 4 ], pesos: [ 10, 10, 5, 14, 33 ] });
  });
});

const aux1 = new LeerCSV();

