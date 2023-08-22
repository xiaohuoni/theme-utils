import { stringifyCss, parseCss } from './css';
import { objToListByGroupsName } from './utils';
import { Button } from './h5config/Button';
import { Table } from './h5config/Table';
import { FilterItems } from './h5config/FilterItems';

export const MOBILE_ASSETS_CSS_TPL: any = {
  // TODO: 按钮 style 写死，最后修改方案
  // Button,
  Table,
  FilterItems,
};

const extend: any = {};
export const MOBILE_ASSETS_COMPONENT_LIST = objToListByGroupsName(
  Object.values(MOBILE_ASSETS_CSS_TPL),
);

export function getMobileItemByType(type: string) {
  const com = MOBILE_ASSETS_CSS_TPL[type];
  if (!type || !com) return { tpl: '' };
  return com;
}

export function px2rem(obj: any) {
  const remObj: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];

      // 处理 margin 和 padding 的值
      if (key === 'margin' || key === 'padding') {
        const values = value.split(' ');
        const remValues = values.map((val: string) => {
          if (val.includes('px')) {
            const parsedValue = parseFloat(val);
            return parsedValue / 50 + 'rem';
          }
          return val;
        });
        value = remValues.join(' ');
      }
      // 处理其他属性的值
      else {
        if (value.includes('px')) {
          const parsedValue = parseFloat(value);
          value = parsedValue / 50 + 'rem';
        }
      }

      remObj[key] = value;
    }
  }

  return remObj;
}

export function rem2px(rem: string) {
  // TODO: 这个方法不对，现在没用到就没有修改
  const str = rem.split('rem');
  if (!str[0]) return '0';
  return `${(Number.parseFloat(str[0]) * 100).toFixed(1)}px`;
}

export function parseValueRem(values: any) {
  console.log(values);
  Object.keys(values).map((key) => {
    if (values[key]?.includes('rem')) {
      values[key] = rem2px(values[key]);
      console.log(key);
      console.log(values[key]);
    }
  });
  return values;
}

// 临时解决方案，将只对它有影响的值，生成继承的样式
export function stringifyMobileCssByTypePreview(type: string, values: any) {
  if (extend[type]) {
    const cfg = getMobileItemByType(extend[type]);
    const item = getMobileItemByType(type);
    return (
      stringifyCss(cfg.tpl, px2rem({ ...cfg.defaultValue[0], ...values })) +
      stringifyCss(item.tpl, px2rem(values))
    );
  } else {
    const item = getMobileItemByType(type);
    return stringifyCss(item.tpl, px2rem(values));
  }
}

export function stringifyMobileCssByType(type: string, values: any) {
  const item = getMobileItemByType(type);
  return stringifyCss(item.tpl, px2rem(values));
}

export function parseMobileCssByType(type: string, css: string) {
  const item = getMobileItemByType(type);
  return parseValueRem(parseCss(item.tpl, css));
}
