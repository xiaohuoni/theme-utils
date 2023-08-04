export const Divider = {
  type: 'Divider',
  var: {
    dividerHeight: { type: 'px', label: '高度', groupsName: '布局' },
    dividerColor: { type: 'color', label: '颜色', groupsName: '文字' },
  },
  groupsName: '通用',
  icon: 'Divider',
  title: '分割线',
  default: [
    {
      dividerHeight: '1px',
      dividerColor: '',
    },
  ],
  tpl: `.ued-divider-solid >div{
      background-color: dividerColor;
      height: dividerHeight;
    }`,
};