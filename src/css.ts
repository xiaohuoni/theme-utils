import { compile, stringify, serialize } from 'stylis';

export function stringifyCss(tpl: string, values: any) {
  if (!tpl) return '';
  let result = tpl;

  for (const key in values) {
    const value = values[key];
    const regex = new RegExp(`${key}\\b`, 'g');
    result = result.replace(regex, value);
  }

  return result;
}

export function parseCss(tpl: string, a: string) {
  if (!tpl) return {};
  const tplRegex = /\.(\w+)\s*{\s*(.*?)\s*}/g;
  const tplMatches = [...tpl.matchAll(tplRegex)];

  const aRegex = /\.(\w+)\s*{\s*(.*?)\s*}/g;
  const aMatches = [...a.matchAll(aRegex)];

  const result: any = {};

  for (let i = 0; i < tplMatches.length; i++) {
    const tplMatch = tplMatches[i];
    const tplSelector = tplMatch[1];
    const tplStyles = tplMatch[2]
      .split(';')
      .map((style) => style.trim())
      .filter(Boolean);

    const aMatch = aMatches.find((match) => match[1] === tplSelector);
    if (aMatch) {
      const aStyles = aMatch[2]
        .split(';')
        .map((style) => style.trim())
        .filter(Boolean);

      for (let j = 0; j < tplStyles.length; j++) {
        const tplStyle = tplStyles[j];
        const [tplKey, tplValue] = tplStyle
          .split(':')
          .map((item) => item.trim());
        const aStyle = aStyles.find((style) => style.startsWith(tplKey));
        if (aStyle) {
          const [, aValue] = aStyle.split(':').map((item) => item.trim());
          result[tplValue] = aValue;
        }
      }
    }
  }

  return result;
}

export function normalizeCSS(css: string, selector?: string) {
  let mergeCss = css;
  if (selector) {
    mergeCss = `${selector} {${css}}`;
  }
  const compiled = compile(mergeCss);
  return serialize(compiled, stringify);
}

export function insertRules(
  id: string,
  rules: string,
  selector = document.head,
) {
  let style = document.getElementById(id);
  if (!style) {
    const style = document.createElement('style');
    style.id = id;
    (selector ?? document.head).appendChild(style);
    style!.innerHTML = rules;
  } else {
    style!.innerHTML = rules;
  }
}

export function insertLink(id: string, href: string, insertBefore = false) {
  if (document.getElementById(id)) return;
  const link = document.createElement('link');
  link.id = id;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = href;
  if (insertBefore) {
    document.body.insertBefore(link, document.body.firstElementChild);
  } else {
    document.head.appendChild(link);
  }
}
