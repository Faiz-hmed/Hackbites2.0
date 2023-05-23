const { JSDOM } = require('jsdom');
const fs = require('fs');
const htmlFile = fs.readFileSync('./index.html')

test('document title should be "My Website"', () => {
  const dom = new JSDOM(htmlFile);
  expect(dom.window.document.title).toBe('Hackbites2.0');
});

describe('Hero section', () => {
  dom = new JSDOM(htmlFile);
  global.document = dom.window.document;
  window = dom.window;

  it('Social media section icons', () => {
    const socialButtons = document.querySelector('.social');

    const children = Array.from(socialButtons.children);
    const noOfChildren = children.length;
   
    expect(noOfChildren).toBe(4);
  });
})
