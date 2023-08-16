export const Icon = {
  type: 'Icon',
  variable: {
    iconSize: { type: 'px', label: '尺寸', groupsName: '文字' },
  },
  groupsName: '通用',
  icon: 'Icon',
  title: '图标',
  defaultValue: [
    {
      iconSize: '14px',
    },
  ],
  tpl: `.ued-icon svg {
      width: iconSize;
      height: iconSize;
    }`,
  components: [],
};
