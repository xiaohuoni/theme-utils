export const Tabs = {
  type: 'Tabs',
  variable: {
    headBgColor: {
      type: 'color',
      label: '头部背景颜色',
      groupsName: '背景颜色',
    },
    activeBgColor: {
      type: 'color',
      label: '选中项背景颜色',
      groupsName: '背景颜色',
    },
    activeFColor: {
      type: 'color',
      label: '分割线颜色',
      groupsName: '背景颜色',
    },
    activeRadius: {
      type: 'px',
      label: '选中项边框圆角',
      groupsName: '边框',
    },
    paddingValue: {
      type: 'marginInput',
      label: '选中项内边距',
      groupsName: '布局',
    },
    marginValue: {
      type: 'marginInput',
      label: '选中项外边距',
      groupsName: '布局',
    },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
      groupsName: '文字',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '文字',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '文字',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    textColor: {
      type: 'color',
      label: '默认标题文本颜色',
      groupsName: '文字',
    },
    activeTextColor: {
      type: 'color',
      label: '选中标题文本颜色',
      groupsName: '文字',
    },
    activeFontWeight: {
      type: 'select',
      label: '选中标题文本字重',
      groupsName: '文字',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    // borderColor: {
    //   type: 'color',
    //   label: '边框颜色',
    //   groupsName: '边框',
    // },
    borderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
    },
    bodyColor: {
      type: 'color',
      label: '内容区域背景',
      groupsName: '背景颜色',
    },
  },
  groupsName: '容器',
  icon: 'Tabs',
  title: '标签页',
  defaultValue: [
    {
      headBgColor: '#0085D0',
      activeBgColor: '#005D92',
      activeFColor: '#47e',
      bodyColor: '#fff',
      activeRadius: '2px',
      borderRadius: '0px',
      paddingValue: '12px 20px 12px 20px',
      marginValue: '0px',
      textColor: '#FFFFFF',
      activeTextColor: '#FFFFFF',
      lineHeight: '22px',
      fontSize: '16px',
      fontWeight: '300',
      activeFontWeight: '300',
    },
  ],
  tpl: `.ued-tabs-wrap .pcfactory-tabs > .pcfactory-tabs-nav .pcfactory-tabs-nav-wrap{
    background-color: headBgColor;
  }
  .ued-tabs-wrap .pcfactory-tabs-nav .pcfactory-tabs-tab-active{
    background-color: activeBgColor;
    border-top-left-radius: activeRadius;
    border-top-right-radius: activeRadius;

  }
  .ued-tabs-wrap .pcfactory-tabs-ink-bar{
    background-color: activeFColor;
  }
  .ued-tabs-wrap .pcfactory-tabs{
    background-color: bodyColor;
    border-radius: borderRadius;
  }
  .ued-tabs-wrap .pcfactory-tabs-nav .pcfactory-tabs-tab{
    padding: paddingValue;
    margin: marginValue;
  }
  .ued-tabs-wrap .pcfactory-tabs-nav .pcfactory-tabs-tab .pcfactory-tabs-tab-btn{
    color: textColor;
    line-height: lineHeight;
    font-size: fontSize;
    font-weight: fontWeight;
  }
  .ued-tabs-wrap .pcfactory-tabs-nav .pcfactory-tabs-tab-active .pcfactory-tabs-tab-btn{
    color: activeTextColor;
    font-weight: activeFontWeight;
  }`,
  components: [
    {
      id: 'Tabs_9165146',
      label: '标签页',
      compName: 'Tabs',
      type: 'Tabs',
      compType: 0,
      compLib: 'comm',
      props: {
        name: '标签页',
        basicStatus: 1,
        type: 'line',
        animated: false,
        defaultActiveKey: '1',
        tabBarGutter: '4px',
        tabPosition: 'top',
        size: 'default',
      },
      style: {
        width: '100%',
        margin: '0 0 16px 0',
        padding: '20px 20px 20px 20px',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      engineApi: [],
      icon: 'Tabs',
      description: '',
      image: '',
      groupsName: '容器',
      onlyChildren: ['TabPane'],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'TabPane_0929347',
          label: '标签子面板',
          compName: 'TabPane',
          type: 'TabPane',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '标签子面板',
            basicStatus: 1,
            tab: '标题1',
            key: '1',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          engineApi: ['sandBoxSafeRun'],
          icon: 'TabPane',
          description: '',
          image: '',
          groupsName: '容器',
          onlyRoot: ['Tabs'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Tabs_9165146'],
        },
        {
          id: 'TabPane_909',
          label: '标签子面板',
          compName: 'TabPane',
          type: 'TabPane',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '标签子面板',
            basicStatus: 1,
            tab: '标题2',
            key: '2',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          engineApi: ['sandBoxSafeRun'],
          icon: 'TabPane',
          description: '',
          image: '',
          groupsName: '容器',
          onlyRoot: ['Tabs'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Tabs_9165146'],
        },
      ],
      path: ['998509'],
    },
  ],
};
