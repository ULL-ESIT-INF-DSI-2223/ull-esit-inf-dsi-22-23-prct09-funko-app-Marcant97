import "mocha";
import { expect } from "chai";
import { LeerJSON } from "../../src/modificacion/leerJSON.js";

describe("Tests leerJson", () => {
  it("run", () => {
    expect(aux1.run()).to.eql({ beneficios: [ 10, 20, 30, 40, 50 ], pesos: [ 10, 20, 30, 40, 50 ] });
  });
});

const aux1 = new LeerJSON();
