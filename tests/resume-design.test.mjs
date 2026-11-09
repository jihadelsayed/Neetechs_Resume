import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');

function luminance(color) {
  const parts = color.substring(1).match(/../g).map((x) => parseInt(x, 16) / 255);
  const values = parts.map((x) => x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4);
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}
function ratio(a, b) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
}

test('default palette is blue on accessible navy surfaces', () => {
  const html = read('src/index.html');
  const css = read('src/styles.scss');
  assert.match(html, /data-nt-theme="dark" data-nt-accent="blue"/);
  assert.match(css, /--nt-bg-app: #202d42/);
  assert.match(css, /--nt-bg-sidebar: #182337/);
  assert.match(css, /--nt-bg-surface: #34445d/);
  assert.match(css, /--nt-bg-surface-raised: #445772/);
  assert.match(css, /--nt-accent: #528ef5/);
  assert.match(css, /html\[data-nt-theme='dark'\]:not\(\[data-nt-contrast='high'\]\)/);
  assert.ok(ratio('#f8fafc', '#34445d') >= 4.5);
  assert.ok(ratio('#d8e3f0', '#445772') >= 4.5);
  assert.ok(ratio('#101c31', '#528ef5') >= 4.5);
  assert.ok(ratio('#bfdbfe', '#445772') >= 4.5);
});

test('portfolio uses compact, responsive profile sections', () => {
  for (const name of ['about','resume','works','google-scholar','contact']) {
    const css = read('src/app/' + name + '/' + name + '.component.scss');
    assert.match(css, /--nt-text-link/);
    assert.match(css, /--nt-bg-surface|--nt-control-bg/);
  }
  const layout = read('src/app/app.component.scss');
  assert.match(layout, /gap: 0/);
  const works = read('src/app/works/works.component.scss');
  assert.match(works, /grid-template-columns: repeat\(auto-fit/);
  assert.match(works, /:focus-visible|--nt-border-strong/);
});

test('mobile menu offers the same Work destination as desktop', () => {
  const header = read('src/app/header/header.component.html');
  assert.match(header, /id="profile-mobile-nav"/);
  assert.match(header, /aria-controls="profile-mobile-nav"/);
  assert.match(header, /href="#portfolio" \(click\)="closeNavigation\(\)"/);
  assert.doesNotMatch(header, /aria-expanded.*>\?<\/button>/);
  assert.match(read('src/app/works/works.component.html'), /View details →/);
  assert.match(read('src/app/footer/footer.component.html'), /Back to top ↑/);
});
