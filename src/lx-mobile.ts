import { stringifyCss, parseCss } from './css';
import { objToListByGroupsName } from './utils';
import { Button } from './h5config/Button';

export const MOBILE_ASSETS_CSS_TPL: any = {
  Button,
};

export const MOBILE_ASSETS_COMPONENT_LIST = objToListByGroupsName(
  Object.values(MOBILE_ASSETS_CSS_TPL),
);

export function getMobileItemByType(type: string) {
  const com = MOBILE_ASSETS_CSS_TPL[type];
  if (!type || !com) return { tpl: '' };
  return com;
}

export function px2rem(px: string) {
  const str = px.split('px');
  if (!str[0]) return '0';
  return `${(Number.parseFloat(str[0]) / 100).toFixed(1)}rem`;
}

export function rem2px(rem: string) {
  const str = rem.split('rem');
  if (!str[0]) return '0';
  return `${(Number.parseFloat(str[0]) * 100).toFixed(1)}px`;
}

export function parseValuePx(values: any) {
  Object.keys(values).map((key) => {
    if (values[key]?.includes('px')) {
      values[key] = px2rem(values[key]);
    }
  });
  return values;
}

export function parseValueRem(values: any) {
  Object.keys(values).map((key) => {
    if (values[key]?.includes('rem')) {
      values[key] = rem2px(values[key]);
    }
  });
  return values;
}
export function stringifyMobileCssByType(type: string, values: any) {
  const item = getMobileItemByType(type);
  return stringifyCss(item.tpl, parseValueRem(values));
}

export function parseMobileCssByType(type: string, css: string) {
  const item = getMobileItemByType(type);
  return parseValueRem(parseCss(item.tpl, css));
}
