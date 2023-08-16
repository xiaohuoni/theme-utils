import { stringifyCss, parseCss } from './css';
import { objToListByGroupsName } from './utils';

export const ASSETS_CSS_TPL: any = {
  // 演示，并非真正的组件
  Root: {
    type: 'Root',
    variable: {
      backgroundColor: { type: 'color', label: '背景颜色', groupsName: '背景' },
      fontSize: { type: 'px', label: '文本字号', groupsName: '标签统一设置' },
      borderLeftWidth: {
        type: 'select',
        label: '边框圆角',
        groupsName: '组件统一设置',
        desc: '说明',
        options: ['2px', '3px', '5px'],
      },
    },
    groupsName: '页面',
    icon: 'root',
    title: '根节点',
    defaultValue: [
      {
        backgroundColor: 'red',
        fontSize: '12px',
        borderLeftWidth: '2px',
      },
      {
        backgroundColor: 'blue',
        fontSize: '14px',
        borderLeftWidth: '5px',
      },
    ],
    tpl: '.engine-dynamicPage-view_box>div{ background-color: backgroundColor; font-size:fontSize; border-left-width:borderLeftWidth; }',
  },
  RootItem: {
    canEdit: false,
    extends: 'Root',
    variable: {
      backgroundColor: { type: 'color', label: '背景颜色', groupsName: '背景' },
      fontSize: { type: 'px', label: '文本字号', groupsName: '标签统一设置' },
      borderLeftWidth: {
        type: 'select',
        label: '边框圆角',
        groupsName: '组件统一设置',
        options: ['2px', '3px', '5px'],
      },
    },
    title: '子节点',
  },
};

export const ASSETS_COMPONENT_LIST = objToListByGroupsName(
  Object.values(ASSETS_CSS_TPL),
);

export function getItemByType(type: string) {
  const com = ASSETS_CSS_TPL[type];
  if (!type || !com) return { tpl: '' };
  return com;
}

export function stringifyCssByType(type: string, values: any) {
  const item = getItemByType(type);
  return stringifyCss(item.tpl, values);
}

export function parseCssByType(type: string, css: string) {
  const item = getItemByType(type);
  return parseCss(item.tpl, css);
}
