const {
  isHot,
  helloThere,
  goodbyeYou,
} = require('./main.js')

describe('isHot', () => {
  it("returns `Yes, it is indeed hot.` if passed a temperature above 80.", () => {
    expect(isHot(81)).toBe('Yes, it is indeed hot.');
  })

  it("returns `Yes, it is indeed hot.` if passed a temperature of 80.", () => {
    expect(isHot(80)).toBe('Yes, it is indeed hot.');
  })
  
  it("returns `No, it is not hot.` if passed a temperature below 80.", () => {
    expect(isHot(79)).toBe(`No, it is not hot.`);
  })

  describe('helloThere', () => {
    it("given a name shorter than 6 characters, returns a longer greeting", () => {
      const name = 'Colin';
      expect(helloThere(name)).toBe('Hello, Colin')
    })
    
    it("given a name of at least 6 characters, returns a shorter greeting", () => {
      const name = 'Mesuara';
      expect(helloThere(name)).toBe('Hi, Mesuara')
    })
  })

  describe('goodbyeYou', () => {
    it("given a name, returns a goodbye", () => {
      const name = 'Colin';
      expect(goodbyeYou(name)).toBe('Goodbye, Colin')
    })
    
    it("given no name, returns a generic goodbye", () => {
      expect(goodbyeYou()).toBe('Goodbye, stranger')
    })
  })
})