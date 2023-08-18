export const Divider = {
  type: 'Divider',
  variable: {
    dividerHeight: { type: 'px', label: '高度', groupsName: '布局' },
    dividerColor: { type: 'color', label: '颜色', groupsName: '文字' },
  },
  groupsName: '通用',
  icon: 'Divider',
  title: '分割线',
  defaultValue: [
    {
      dividerHeight: '1px',
      dividerColor: 'rgba(0, 0, 0, 0.15)',
    },
  ],
  tpl: `.ued-divider-solid >div{
      background-color: dividerColor;
      height: dividerHeight;
    }`,
  components: [
    {
      id: 'Divider_188481',
      label: '分割线',
      compName: 'Divider',
      type: 'Divider',
      compType: 1,
      compLib: '@/component',
      props: {
        name: '分割线',
        basicStatus: 1,
        type: 'horizontal',
        dashed: false,
        dividerColor: 'rgba(0,0,0,0.15)',
        dashedWidth: 4,
        dashedMargin: 4,
        showTitle: false,
        dividerText: '标题',
        orientation: 'center',
        titleColor: 'rgba(28,36,46,0.75)',
        titleFontSize: 14,
        titleFontWeight: 400,
      },
      style: {
        margin: '12px 0 12px 0',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Divider',
      description: '',
      image: '',
      groupsName: '通用',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['998509'],
    },
  ],
};
