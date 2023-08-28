export const ALink = {
  type: 'ALink',
  variable: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
  },
  groupsName: '基础',
  icon: 'icon-ico-comp-app-ALink',
  title: '超链接',
  defaultValue: [
    {
      textColor: '#108ee9',
    },
  ],
  tpl: `
  a{
    color: textColor;
  }`,
  components: [
    {
      id: 'ALink_414643',
      label: '超链接',
      compName: 'ALink',
      type: 'ALink',
      compType: 1,
      compLib: 'html',
      props: {
        name: '超链接',
        href: '',
        children: '超链接',
        target: '_self',
      },
      style: {
        textAlign: 'left',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      description: '',
      isInlineBlock: true,
      image: '',
      groupsName: '基础',
      icon: 'ALink',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
