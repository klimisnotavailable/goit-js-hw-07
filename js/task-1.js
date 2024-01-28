'use strict'

const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.children.length}`);

const listItems = document.querySelectorAll('li.item');

const technologies = document.querySelectorAll('li.item > ul > li')

listItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.querySelectorAll('ul > li').length}`)
})