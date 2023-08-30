export const NoticeBarPlus = {
  type: 'NoticeBarPlus',
  variable: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    // lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
    fontWeight: {
      type: 'select',
      label: '文本字重',
      groupsName: '文字',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    iconColor: {
      type: 'color',
      label: '下拉图标颜色',
      groupsName: '文字',
    },
    iconSize: { type: 'px', label: '下拉图标尺寸', groupsName: '文字' },
  },
  groupsName: '高级',
  icon: 'icon-ico-comp-app-NoticeBarPlus',
  title: '公告栏',
  defaultValue: [
    {
      backgroundColor: '#fff',
      borderRadius: '12px',
      borderColor: 'rgba(0,0,0,0)',
      textColor: '#000',
      fontSize: '12px',
      // lineHeight:'100%',
      iconColor: '#000',
      iconSize: '20px',
      fontWeight: '400',
    },
  ],
  tpl: `
  .alita-notice-bar{
    --adm-color-background: backgroundColor;
    border-color: borderColor;
    border-radius: borderRadius;
    font-size: fontSize;
    // line-height: lineHeight;
    font-weight:fontWeight;
    color: textColor;
    > div {

      > svg {
    color: iconColor;

width: iconSize;
height: iconSize;
      }
    }
  }`,
  components: [
    {
      id: 'NoticeBarPlus_0162497',
      label: '公告栏',
      compName: 'NoticeBarPlus',
      type: 'NoticeBarPlus',
      compType: 1,
      compLib: '@alitajs/antd-mobile-plus',
      props: {
        name: '公告栏',
        data: [
          {
            bulletinTitle: '公告通知1',
            id: '0',
          },
        ],
        keyFieldName: 'id',
      },
      style: {},
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      engineApi: ['downloadFileByFileCode'],
      setEvents: [
        {
          dataName: 'event',
          value: 'onItemClick',
          params: [
            {
              title: '每条item的点击事件',
              name: 'e',
              value: '$e$',
            },
          ],
          path: [],
          dataId: '435144',
          children: [],
        },
        {
          dataName: 'event',
          value: 'onExtraClick',
          params: [
            {
              title: '右侧点击事件',
              name: 'e',
              value: '$e$',
            },
          ],
          path: [],
          dataId: '9189502',
          children: [],
        },
      ],
      description: '',
      image: '',
      groupsName: '高级',
      icon: 'NoticeBarPlus',
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
  ],
};
