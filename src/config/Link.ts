export const Link = {
  type: 'Link',
  variable: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
  },
  groupsName: '通用',
  icon: 'Link',
  title: '超链接',
  defaultValue: [
    {
      textColor: '#1890ff',
      lineHeight: '0px',
      fontSize: '14px',
    },
  ],
  tpl: `.ued-link {
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
    }`,
  components: [],
};
