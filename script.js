// Elements
const input = document.getElementById("input");
const smallcapsDiv = document.getElementById("smallcaps");
const squaresDiv = document.getElementById("squares");
const fancyDiv = document.getElementById("fancy");
const upsideDownDiv = document.getElementById("upsidedown");
const mirroredDiv = document.getElementById("mirrored");
const randomDiv = document.getElementById("random");
const toggleBtn = document.getElementById("toggleMore");
const moreOptions = document.getElementById("moreOptions");

// Handle input
input.addEventListener("input", () => {
  const text = input.value;
  smallcapsDiv.textContent = toSmallCaps(text);
  squaresDiv.textContent = toSquares(text);
  fancyDiv.textContent = toFancy(text);
  upsideDownDiv.textContent = toUpsideDown(text);
  mirroredDiv.textContent = toMirrored(text);
  randomDiv.textContent = toRandomMixed(text);
});

// Copy to clipboard
function copyToClipboard(id) {
  const text = document.getElementById(id).textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied!");
  });
}

// Toggle more options
toggleBtn.addEventListener("click", () => {
  const isVisible = moreOptions.style.display === "block";
  moreOptions.style.display = isVisible ? "none" : "block";
  toggleBtn.textContent = isVisible ? "➕ More Options" : "➖ Less Options";
});

// Style functions
function toSmallCaps(text) {
  const map = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ',
    f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
    k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ',
    p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ',
    u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
  };
  return [...text].map(c => map[c.toLowerCase()] || c).join('');
}

function toSquares(text) {
  const offset = 0x1F130 - 'A'.charCodeAt(0);
  return [...text.toUpperCase()].map(c => {
    if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) + offset);
    return c;
  }).join('');
}

function toFancy(text) {
  const a = '𝓪'.codePointAt(0) - 'a'.charCodeAt(0);
  const A = '𝓐'.codePointAt(0) - 'A'.charCodeAt(0);
  return [...text].map(c => {
    if (c >= 'a' && c <= 'z') return String.fromCodePoint(c.charCodeAt(0) + a);
    if (c >= 'A' && c <= 'Z') return String.fromCodePoint(c.charCodeAt(0) + A);
    return c;
  }).join('');
}

function toUpsideDown(text) {
  const map = {
    a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ',
    f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ', j: 'ɾ',
    k: 'ʞ', l: 'ʃ', m: 'ɯ', n: 'u', o: 'o',
    p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ',
    u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ',
    z: 'z',
    '.': '˙', ',': "'", "'": ',', '"': ',,',
    '!': '¡', '?': '¿', '(': ')', ')': '('
  };
  return [...text.toLowerCase()].map(c => map[c] || c).reverse().join('');
}

function toMirrored(text) {
  const map = {
    a: 'ɒ', b: 'd', c: 'ↄ', d: 'b', e: 'ɘ',
    f: 'ꟻ', g: 'ǫ', h: 'ʜ', i: 'ᴉ', j: 'ɾ',
    k: 'ʞ', l: 'ꞁ', m: 'ɯ', n: 'ᴎ', o: 'o',
    p: 'q', q: 'p', r: 'ᴚ', s: 'ꙅ', t: 'Ʇ',
    u: 'ᴜ', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʏ',
    z: 'ƹ'
  };
  return [...text.toLowerCase()].map(c => map[c] || c).join('');
}
function smallCapsChar(c) {
  const map = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ',
    f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
    k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ',
    p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ',
    u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
  };
  return map[c.toLowerCase()] || c;
}

function squareChar(c) {
  const base = c.toUpperCase().charCodeAt(0);
  if (base >= 65 && base <= 90) {
    return String.fromCodePoint(base + 0x1F130 - 65);
  }
  return c;
}

function fancyChar(c) {
  const code = c.charCodeAt(0);
  if (code >= 97 && code <= 122) return String.fromCodePoint(code + 0x1D4EA - 97);
  if (code >= 65 && code <= 90) return String.fromCodePoint(code + 0x1D4D0 - 65);
  return c;
}

function mirroredChar(c) {
  const map = {
    a: 'ɒ', b: 'd', c: 'ↄ', d: 'b', e: 'ɘ',
    f: 'ꟻ', g: 'ǫ', h: 'ʜ', i: 'ᴉ', j: 'ɾ',
    k: 'ʞ', l: 'ꞁ', m: 'ɯ', n: 'ᴎ', o: 'o',
    p: 'q', q: 'p', r: 'ᴚ', s: 'ꙅ', t: 'Ʇ',
    u: 'ᴜ', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʏ',
    z: 'ƹ'
  };
  return map[c.toLowerCase()] || c;
}


function toRandomMixed(text) {
  const charStyles = [smallCapsChar, squareChar, fancyChar, mirroredChar];

  return [...text].map(char => {
    const styleFn = charStyles[Math.floor(Math.random() * charStyles.length)];
    return styleFn(char);
  }).join('');
}

