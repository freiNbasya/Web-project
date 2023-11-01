const { showCategory } = require('./models'); 
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body><div class="container mt-5 home"></div></body></html>`);
global.document = dom.window.document;

describe('showCategory function', () => {
  let originalHTML; 

  beforeEach(() => {

    originalHTML = document.querySelector('.home').innerHTML;
  });

  afterEach(() => {

    document.querySelector('.home').innerHTML = originalHTML;
  });

  it('TV category', () => {
    showCategory('TVs');

 
    expect(document.querySelector('.home').innerHTML).to.contain('TV Models');
  });

  it('Smartphone category', () => {
    showCategory('Smartphones');


    expect(document.querySelector('.home').innerHTML).to.contain('Smartphone Models');
  });
  it('Tablets category', () => {
    showCategory('Tablets');


    expect(document.querySelector('.home').innerHTML).to.contain('Tablet Models');
  });
  it('Laptops category', () => {
    showCategory('Laptops');


    expect(document.querySelector('.home').innerHTML).to.contain('Laptop Models');
  });
  it('Monitor category', () => {
    showCategory('Monitors');


    expect(document.querySelector('.home').innerHTML).to.contain('Monitor Models');
  });
  it('Earphones category', () => {
    showCategory('Earphones');


    expect(document.querySelector('.home').innerHTML).to.contain('Earphones Models');
  });

});
