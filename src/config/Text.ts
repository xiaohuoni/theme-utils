export const Text = {
  type: 'Text',
  variable: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
  },
  groupsName: '通用',
  icon: 'Text',
  title: '文本',
  defaultValue: [
    {
      textColor: '#1c242e',
      lineHeight: '0px',
      fontSize: '14px',
    },
  ],
  tpl: ``,
  components: [],
};
