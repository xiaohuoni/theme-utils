export const Button = {
  type: 'Button',
  var: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    paddingValue: { type: 'marginInput', label: '内边距', groupsName: '布局' },
    marginValue: { type: 'marginInput', label: '外边距', groupsName: '布局' },
  },
  groupsName: '通用',
  icon: 'Button',
  title: '按钮',
  default: [
    {
      textColor: '#1c242e',
      lineHeight: '0px',
      fontSize: '14px',
      backgroundColor: '#fff',
      borderColor: '#D8E0EC',
      borderRadius: '8px',
      paddingValue: '4px 24px 4px 24px',
      marginValue: '0px',
    },
  ],
  tpl: `.ued-button-wrap.pcfactory-btn {
        color: textColor;
        line-height: lineHeight;
        font-size: fontSize;
        background-color: backgroundColor;
        border-color: borderColor;
        border-radius: borderRadius;
        padding: paddingValue;
        margin: marginValue;
      }
    `,
};
