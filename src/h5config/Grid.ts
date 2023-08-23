export const Grid = {
  type: 'Grid',
  variable: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    lineColor: {
      type: 'color',
      label: '分割线颜色',
      groupsName: '边框',
    },
    iconSize: { type: 'px', label: '图标尺寸', groupsName: '文字' },
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
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
  },
  groupsName: '高级',
  icon: 'icon-ico-comp-app-Grid',
  title: '宫格',
  defaultValue: [
    {
      backgroundColor: '#fff',
      borderColor: '#ddd',
      borderRadius: '0',
      lineColor: '#ddd',
      iconSize: '25px',
      textColor: '#000',
      lineHeight: '100%',
      fontSize: '12px',
      fontWeight: '400',
    },
  ],
  tpl: `
    .use-app-grid{
      background-color: backgroundColor;
    }
    .am-grid {
      border-radius: borderRadius;
      --adm-font-size-4: fontSize;
      --adm-color-text: textColor
    }
    .am-grid.am-grid-line:not(.am-grid-carousel){
      border:1PX solid borderColor;
      border-bottom:none;
    }
    .am-grid.am-grid-line .am-grid-flex:last-child{
      border-color: borderColor;
      border-bottom-right-radius: borderRadius;
      border-bottom-left-radius: borderRadius;
    }
    .am-grid.am-grid-line .am-grid-flex:first-child{
      border-top-left-radius: borderRadius;
    }
    .am-grid.am-grid-line .am-grid-flex .am-grid-flex-item:first-child{
      border: none;
    }
    .am-grid.am-grid-line .am-grid-flex{
      border-color: lineColor;
    }
    .am-grid.am-grid-square .am-grid-item .am-grid-item-inner-content .am-grid-icon{
      width: iconSize;
    }
    .am-grid .am-grid-flex .am-grid-flex-item .am-grid-item-content .am-grid-item-inner-content .am-grid-text{
      line-height: lineHeight;
      font-weight: fontWeight;
    }`,
  components: [
    {
      id: 'Grid_842271',
      label: '宫格',
      compName: 'Grid',
      type: 'Grid',
      compType: 3,
      compLib: '@/components',
      props: {
        name: '宫格',
        gridData: [
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '整体清洁',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '汽车清洁',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '垃圾桶清洁',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '家庭除螨',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '干洗衣物',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '家电清洗',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '服务清洁',
          },
          {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
            text: '墙壁粉刷',
          },
        ],
        hasLine: true,
        isCarousel: false,
        aliasIcon: 'icon',
        aliasText: 'text',
        maxRow: 0,
        columnNum: 4,
        square: true,
        carouselMaxRow: 2,
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
          dataId: '74633',
          value: 'onClick',
          params: [
            {
              title: '数据项',
              name: 'e',
              value: '$e$',
            },
            {
              title: '数据索引',
              name: 'index',
              value: '$index$',
            },
          ],
          path: [],
          children: [],
        },
      ],
      description: '',
      image: '',
      groupsName: '高级',
      icon: 'Grid',
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
  ],
};
