export const StaticTabs = {
  type: 'StaticTabs',
  variable: {
    // TODO: 代码中写死
    // headBgColor: {
    //   type: 'color',
    //   label: '头部背景颜色',
    //   groupsName: '背景颜色',
    // },
    selectBgColor: {
      type: 'color',
      label: '选中项背景颜色',
      groupsName: '选中项',
    },
    backgroundColor: {
      type: 'color',
      label: '选项背景颜色',
      groupsName: '选项',
    },
    selectBorderRadius: {
      type: 'px',
      label: '选项边框圆角',
      groupsName: '选项',
    },
    selectTextColor: {
      type: 'color',
      label: '选中项文本颜色',
      groupsName: '选中项',
    },
    selectFontWeight: {
      type: 'select',
      label: '选中项文本字重',
      groupsName: '选中项',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    // paddingValue: {
    //   type: 'marginInput',
    //   label: '选项内边距',
    //   groupsName: '选项',
    // },
    textColor: { type: 'color', label: '选项文本颜色', groupsName: '选项' },
    lineHeight: { type: 'px', label: '选项文本行高', groupsName: '选项' },
    fontSize: { type: 'px', label: '选项文本尺寸', groupsName: '选项' },
    fontWeight: {
      type: 'select',
      label: '选项文本字重',
      groupsName: '选项',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '选项' },
    lineColor: {
      type: 'color',
      label: '头部下分割线颜色',
      groupsName: '边框',
    },
    bodyBgColor: {
      type: 'color',
      label: '内容区域背景颜色',
      groupsName: '背景颜色',
    },
  },
  groupsName: '高级',
  icon: 'icon-ico-comp-app-Tabs',
  title: '静态标签页',
  defaultValue: [
    {
      selectTextColor: '#108ee9',
      textColor: '#108ee9',
      selectBgColor: '#FFF',
      backgroundColor: '#FFF',
      selectFontWeight: '400',
      fontWeight: '400',
      fontSize: '15px',
      lineHeight: '100%',
      selectBorderRadius: '0',
      // paddingValue:'8px 0 8px 0',
      bodyBgColor: 'rgba(0,0,0,0)',
      borderColor: 'rgba(0,0,0,0)',
      lineColor: '#108ee9',
    },
  ],
  tpl: `

  .am-tabs-default-bar-tab{
font-weight: fontWeight;
border-top-left-radius: selectBorderRadius;
  border-top-right-radius: selectBorderRadius;
    color: textColor;
font-size: fontSize;
border: 1px solid borderColor;
background-color: backgroundColor;
  }
  .am-tabs-default-bar-tab-active {
    background-color: selectBgColor;
   color: selectTextColor;
font-weight: selectFontWeight;
  }
  .am-tabs-pane-wrap{
    background-color: bodyBgColor;
  }
  .am-tabs-default-bar-underline{
    border-color: lineColor;
  }`,
  components: [
    {
      id: 'StaticTabs_828878',
      label: '静态标签页',
      compName: 'StaticTabs',
      type: 'StaticTabs',
      compType: 0,
      compLib: 'antd-mobile',
      props: {
        name: '静态标签页',
        tabDirection: 'horizontal',
        initialPage: 0,
        animated: true,
        tabs: [
          {
            title: '标签1',
            id: '1',
            isShow: '$true$',
          },
          {
            title: '标签2',
            id: '2',
            isShow: '$true$',
          },
        ],
        underlineType: 'default',
        stickyTop: 45,
        swipeable: false,
        useOnPan: false,
        usePaged: false,
        prerenderingSiblingsNumber: 1,
        tabBarPosition: 'top',
      },
      style: {
        underlineType: 'default',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      engineApi: ['sandBoxSafeRun'],
      setEvents: [],
      description: '',
      image: '',
      groupsName: '高级',
      icon: 'StaticTabs',
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
  ],
};
