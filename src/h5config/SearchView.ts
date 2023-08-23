export const SearchView = {
  type: 'SearchView',
  variable: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    paddingValue: { type: 'marginInput', label: '内边距', groupsName: '布局' },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    sBackgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '搜索框',
    },
    iconSize: { type: 'px', label: '图标尺寸', groupsName: '搜索框' },
    textColor: { type: 'color', label: '文本颜色', groupsName: '搜索框' },
    // lineHeight: { type: 'px', label: '文本行高', groupsName: '搜索框' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '搜索框' },
    fontWeight: {
      type: 'select',
      label: '文本字重',
      groupsName: '搜索框',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    sPaddingValue: {
      type: 'marginInput',
      label: '内边距',
      groupsName: '搜索框',
    },
    sBorderColor: { type: 'color', label: '边框颜色', groupsName: '搜索框' },
    sBorderRadius: { type: 'px', label: '边框圆角', groupsName: '搜索框' },
  },
  groupsName: '高级',
  icon: 'icon-ico-comp-app-Search',
  title: '搜索',
  defaultValue: [
    {
      backgroundColor: '#fff',
      paddingValue: '0 0 0 0',
      borderColor: 'rgba(0,0,0,0)',
      borderRadius: '0',
      sBackgroundColor: '#f7f7f7',
      iconSize: '12px',
      textColor: '#000',
      // lineHeight: '100%',
      fontSize: '14px',
      fontWeight: '400',
      sPaddingValue: '8px 30px 8px 30px',
      sBorderColor: 'rgba(0,0,0,0)',
      sBorderRadius: '18px',
    },
  ],
  tpl: `
    .alita-search-view-wrap{
      --adm-color-background: backgroundColor;
      padding: paddingValue;
      border: 1PX solid borderColor;
      border-radius: borderRadius;
    }
    .alita-search-bar-input{
      background-color: sBackgroundColor;
color: textColor;
font-size: fontSize;
font-weight: fontWeight;
padding: sPaddingValue;
border-radius: sBorderRadius;
border: 1PX solid sBorderColor;
    }
    .alita-search-bar-search{
      width: iconSize;
    height: iconSize;
    }`,
  components: [
    {
      id: 'SearchView_197467',
      label: '搜索',
      compName: 'SearchView',
      type: 'SearchView',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '搜索',
        filterValue: '01',
        filterData: [
          {
            label: '竣工',
            value: '01',
          },
          {
            label: '测试02',
            value: '02',
          },
          {
            label: '测试03',
            value: '03',
          },
          {
            label: '测试04',
            value: '04',
          },
          {
            label: '测试05',
            value: '05',
          },
          {
            label: '测试06',
            value: '06',
          },
          {
            label: '测试08',
            value: '07',
          },
          {
            label: '测试10',
            value: '08',
          },
        ],
        labelAlias: 'label',
        valueAlias: 'value',
        placeholder: '请输入关键字搜索',
        showLeft: true,
        open: false,
        showDateRange: true,
      },
      style: {
        padding: '0px 12px 0px 12px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [],
      description: '',
      image: '',
      groupsName: '高级',
      fieldProps: {
        trigger: 'onChange',
        valuePropName: 'value',
      },
      icon: 'SearchView',
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
  ],
};
