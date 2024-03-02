// ReferenceError: Blob is not defined in JavaScript

// EXAMPLE 1 - Import the Blob class before using it

import {Blob} from 'buffer';

const blob = new Blob(['hello world']);
console.log(blob); // 👉️ Blob { size: 11, type: '' }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Setting the Content-Type of the Blob

// import {Blob} from 'buffer';

// const obj = {name: 'James Doe'};
// const blob = new Blob([JSON.stringify(obj, null, 2)], {
//   type: 'application/json',
// });

// console.log(blob); // 👉️ Blob { size: 25, type: 'application/json' }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the `cross-blob` module instead

// import Blob from 'cross-blob';

// const blob = new Blob(['hello world']);
// console.log(blob.size); // 👉️ 11

// // Global patch (to support external modules like is-blob).
// globalThis.Blob = Blob;
