import { stringifyCss, parseCss } from './css';

export const MOBILE_ASSETS_CSS_TPL: any = {
  // 演示，并非真正的组件
  Root: {
    var: {
      backgroundColor: { type: 'color', label: '背景颜色', groupsName: '背景' },
      fontSize: { type: 'px', label: '文本字号', groupsName: '标签统一设置' },
      borderLeftWidth: {
        type: 'select',
        label: '边框圆角',
        groupsName: '组件统一设置',
        options: ['2px', '3px', '5px'],
      },
    },
    title: '根节点',
    default: [
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
};

export function stringifyMobileCssByType(type: string, values: any) {
  const item = MOBILE_ASSETS_CSS_TPL[type];
  if (!item) return '';
  return stringifyCss(item.tpl, values);
}

export function parseMobileCssByType(type: string, css: string) {
  const item = MOBILE_ASSETS_CSS_TPL[type];
  if (!item) return {};
  return parseCss(item.tpl, css);
}
