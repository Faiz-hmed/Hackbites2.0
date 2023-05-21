const { JSDOM } = require('jsdom');
const fs = require('fs');
const htmlFile = fs.readFileSync('./index.html')

test('document title should be "My Website"', () => {
  const dom = new JSDOM(htmlFile);
  expect(dom.window.document.title).toBe('Hackbites2.0');
});

