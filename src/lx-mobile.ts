import { stringifyCss, parseCss } from './css';
import { objToListByGroupsName } from './utils';
import { Button } from './h5config/Button';
import { Table } from './h5config/Table';
import { FilterItems } from './h5config/FilterItems';
import { NoticeBarPlus } from './h5config/NoticeBarPlus';
import { StaticTabs } from './h5config/StaticTabs';
import { Grid } from './h5config/Grid';
import { SearchView } from './h5config/SearchView';
import { LoadMore } from './h5config/LoadMore';
import { DForm } from './h5config/DForm';
import { DformInput } from './h5config/DformInput';
import { DformTextArea } from './h5config/DformTextArea';
import { DformInputNumber } from './h5config/DformInputNumber';
import { DformRadio } from './h5config/DformRadio';
import { DCheckbox } from './h5config/DCheckbox';
import { DformPicker } from './h5config/DformPicker';
import { DMultiplePicker } from './h5config/DMultiplePicker';

export const MOBILE_ASSETS_CSS_TPL: any = {
  // TODO: 按钮 style 写死，最后修改方案
  // Button,
  Table,
  FilterItems,
  NoticeBarPlus,
  StaticTabs,
  Grid,
  SearchView,
  // TODO: 动态列表自己并没有样式才对
  // LoadMore,
  DForm,
  DformInput,
  DformTextArea,
  DformInputNumber,
  DformRadio,
  DCheckbox,
  DformPicker,
  DMultiplePicker,
};

const extend: any = {
  DformInput: 'DForm',
  DformTextArea: 'DForm',
  DformInputNumber: 'DForm',
  DformRadio: 'DForm',
  DCheckbox: 'DForm',
  DformPicker: 'DForm',
  DMultiplePicker: 'DForm',
};
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
      const values = value.split(' ');
      if (values.length > 0) {
        const remValues = values.map((val: string) => {
          if (val.includes('px')) {
            const parsedValue = parseFloat(val);
            console.log('px2rem', parsedValue);
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
