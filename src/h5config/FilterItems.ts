export const FilterItems = {
  type: 'FilterItems',
  variable: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
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
    iconColor: { type: 'color', label: '收起图标颜色', groupsName: '文字' },
    iconCloseColor: {
      type: 'color',
      label: '下拉图标颜色',
      groupsName: '文字',
    },
    iconSize: { type: 'px', label: '下拉图标尺寸', groupsName: '文字' },
  },
  groupsName: '高级',
  icon: 'icon-ico-comp-app-FilterItems',
  title: '筛选项',
  defaultValue: [
    {
      backgroundColor: '#fff',
      borderColor: 'rgba(0,0,0,0)',
      borderRadius: '4px',
      textColor: '#1677ff',
      fontSize: '14px',
      lineHeight: '100%',
      fontWeight: '400',
      iconColor: '#1677ff',
      iconSize: '16px',
      iconCloseColor: 'rgba(0,0,0,0.3)',
    },
  ],
  tpl: `
    .alita-filter-item-content{
      background: backgroundColor;
      font-size: fontSize;
      border-radius: borderRadius;
      border: 1px solid borderColor;
    }
    .alita-filter-item-active-text{
      color: textColor;
      line-height: lineHeight;
      font-weight: fontWeight;
    }
    .alita-filter-item-noraml-icon{
      width: iconSize;
      height: iconSize;
      overflow: hidden;
    }
    .alita-filter-item-icon-up{
      background-image: none;
      width: iconSize;
      height: iconSize;
      position: relative;
    }
    .alita-filter-item-icon-up::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: iconSize;
      height: iconSize;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%3E%E7%BC%96%E7%BB%84%206%3C%2Ftitle%3E%3Cg%20id%3D%22%E9%A1%B5%E9%9D%A2-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22%E5%85%B6%E4%BD%99%E7%BB%84%E4%BB%B6%22%20transform%3D%22translate%28-171.000000%2C%20-3340.000000%29%22%3E%3Cg%20id%3D%22%E5%AF%BC%E8%88%AA%E6%A0%8F%EF%BC%9ANavigationBa%E5%A4%87%E4%BB%BD-2%22%20transform%3D%22translate%2836.000000%2C%201199.000000%29%22%3E%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-5%22%20transform%3D%22translate%2851.000000%2C%202131.000000%29%22%3E%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-6%22%20transform%3D%22translate%2884.000000%2C%2010.000000%29%22%3E%3Crect%20id%3D%22%E7%9F%A9%E5%BD%A2%22%20fill%3D%22%23D8D8D8%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2216%22%20height%3D%2216%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M13.4723603%2C5.99735754%20L8.67496913%2C11.2434071%20C8.53163306%2C11.4065089%208.32501122%2C11.5%208.10787665%2C11.5%20C7.89072486%2C11.5%207.68408225%2C11.4065218%207.54073483%2C11.2434071%20L2.74334363%2C5.99735754%20C2.50915215%2C5.75000397%202.43677915%2C5.38947121%202.55781612%2C5.07103987%20C2.67885308%2C4.75260854%202.97097257%2C4.53024691%203.31046078%2C4.5%20L12.9013205%2C4.5%20C13.2421162%2C4.52895167%2013.5355186%2C4.74998106%2013.6565803%2C5.06974464%20C13.7789495%2C5.38948354%2013.7065888%2C5.74867172%2013.4723603%2C5.99735754%20Z%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22%23BFBFBF%22%20fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    background-repeat: round;
    transform: translateX(-100%);
    background-size: 100%;
      filter: drop-shadow(iconSize 0 iconCloseColor);
  }
  .alita-filter-item-icon-down{
    background-image: none;
    width: iconSize;
    height: iconSize;
    position: relative;
  }
  .alita-filter-item-icon-down::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: iconSize;
    height: iconSize;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Ctitle%3E%E7%BC%96%E7%BB%84%206%3C%2Ftitle%3E%3Cg%20id%3D%22%E9%A1%B5%E9%9D%A2-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22%E5%85%B6%E4%BD%99%E7%BB%84%E4%BB%B6%22%20transform%3D%22translate%28-295.000000%2C%20-3340.000000%29%22%3E%3Cg%20id%3D%22%E5%AF%BC%E8%88%AA%E6%A0%8F%EF%BC%9ANavigationBa%E5%A4%87%E4%BB%BD-2%22%20transform%3D%22translate%2836.000000%2C%201199.000000%29%22%3E%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-5%22%20transform%3D%22translate%28175.000000%2C%202131.000000%29%22%3E%3Cg%20id%3D%22%E7%BC%96%E7%BB%84-6%22%20transform%3D%22translate%2892.000000%2C%2018.000000%29%20scale%281%2C%20-1%29%20translate%28-92.000000%2C%20-18.000000%29%20translate%2884.000000%2C%2010.000000%29%22%3E%3Crect%20id%3D%22%E7%9F%A9%E5%BD%A2%22%20fill%3D%22%231677ff%22%20opacity%3D%220%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2216%22%20height%3D%2216%22%3E%3C%2Frect%3E%3Cpath%20d%3D%22M13.4723603%2C5.99735754%20L8.67496913%2C11.2434071%20C8.53163306%2C11.4065089%208.32501122%2C11.5%208.10787665%2C11.5%20C7.89072486%2C11.5%207.68408225%2C11.4065218%207.54073483%2C11.2434071%20L2.74334363%2C5.99735754%20C2.50915215%2C5.75000397%202.43677915%2C5.38947121%202.55781612%2C5.07103987%20C2.67885308%2C4.75260854%202.97097257%2C4.53024691%203.31046078%2C4.5%20L12.9013205%2C4.5%20C13.2421162%2C4.52895167%2013.5355186%2C4.74998106%2013.6565803%2C5.06974464%20C13.7789495%2C5.38948354%2013.7065888%2C5.74867172%2013.4723603%2C5.99735754%20Z%22%20id%3D%22%E8%B7%AF%E5%BE%84%22%20fill%3D%22%231677ff%22%20fill-rule%3D%22nonzero%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    background-repeat: round;
    background-size: 100%;
    transform: translateX(-100%);
    filter: drop-shadow(iconSize 0 iconColor);
}
`,
  components: [
    {
      id: 'FilterItems_7957386',
      label: '筛选项',
      compName: 'FilterItems',
      type: 'FilterItems',
      compType: 1,
      compLib: '@alitajs/antd-mobile-plus',
      props: {
        name: '筛选项',
        data: [
          {
            data: [
              {
                id: '1',
                label: '任务-1',
              },
              {
                id: '2',
                label: '任务-2',
              },
              {
                id: '3',
                label: '任务-3',
              },
            ],
            filterId: 'f_1',
            defaultText: '地区',
          },
          {
            data: [
              {
                id: '21',
                label: '任务-21',
              },
              {
                id: '22',
                label: '任务-22',
              },
              {
                id: '23',
                label: '任务-23',
              },
              {
                id: '24',
                label: '任务-24-',
              },
            ],
            filterId: 'f_2',
            defaultText: '商区',
          },
          {
            data: [
              {
                id: '31',
                label: '任务-31',
              },
              {
                id: '32',
                label: '任务-32',
              },
              {
                id: '33',
                label: '任务-33',
              },
            ],
            filterId: 'f_3',
          },
        ],
      },
      style: {},
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [
        {
          dataName: 'event',
          dataId: 169269946211136930,
          path: [],
          value: 'onItemChange',
          params: [
            {
              title: '选中数据项',
              value: '$d$',
              name: 'd',
            },
          ],
          children: [
            {
              dataName: 'action',
              dataId: 169269946396342900,
              todoOptions: ['valueArray'],
              path: [169269946211136930],
              options: {
                compId: 'console',
                compName: 'system',
                id: '5428364',
                pageJsonId: '5788174',
                value: ['13'],
              },
              actionObjId: 'console',
              actionObjName: 'system',
              value: 'console',
              children: [],
              elseIfs: [],
            },
          ],
        },
      ],
      description: '',
      image: '',
      groupsName: '高级',
      icon: 'FilterItems',
      isLabelDropBoxChild: false,
      components: [],
      path: ['5788174', 'View_5788174_1'],
    },
  ],
};
