const { mwst, brutto } = require("./mwst.js")

test("7% von 100 soll 7 sein", () => {
    expect(mwst(100, 0.07)).toBe(7)
})

test("19% von 200 soll 38 sein", () => {
    expect(mwst(200,)).toBe(38)
})

test("Wenn Betrag ist 0, Steuer ist auch 0", () => {
    expect(mwst(0)).toBe(0)
})

test("100 netto bei 19% Steuer soll 119 Brutto sein", () => {
    expect(brutto(100, 0.19)).toBe(119)
})

test("50 netto bei 7% Steuer soll 53,5 Brutto sein", () => {
    expect(brutto(50, 0.07)).toBe(53.5)
})


