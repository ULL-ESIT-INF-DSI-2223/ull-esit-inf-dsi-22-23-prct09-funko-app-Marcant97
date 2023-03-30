import "mocha";
import { expect } from "chai";
import { LeerCSV } from "../../src/modificacion/leerCSV.js";
import { LeerJSON } from "../../src/modificacion/leerJSON.js";
import { clientCode} from "../../src/modificacion/cliente.js"

describe("Tests cliente", () => {
  it("clientCode", () => {
    expect(clientCode(new LeerCSV())).to.eql({ beneficios: [ 20, 30, 40, 5, 4 ], pesos: [ 10, 10, 5, 14, 33 ] });
    expect(clientCode(new LeerJSON())).to.eql({ beneficios: [ 10, 20, 30, 40, 50 ], pesos: [ 10, 20, 30, 40, 50 ] });
  });
});
