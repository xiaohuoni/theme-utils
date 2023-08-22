export const Tree = {
  type: 'Tree',
  variable: {
    borderColor: { type: 'color', label: '边框颜色', groupsName: '搜索框样式' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '搜索框样式' },
    textColor: { type: 'color', label: '文本颜色', groupsName: '搜索框样式' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '搜索框样式' },
    // treeLineHeight: { type: 'px', label: '树行高', groupsName: '树样式' },
    treeTextColor: { type: 'color', label: '文本颜色', groupsName: '树样式' },
    treeFontSize: { type: 'px', label: '文本尺寸', groupsName: '树样式' },
    treeIconColor: {
      type: 'color',
      label: '折叠图标颜色',
      groupsName: '树样式',
    },
    treeLineColor: { type: 'color', label: '衔接线颜色', groupsName: '树样式' },
    treeBgColor: { type: 'color', label: '选中背景颜色', groupsName: '树样式' },
  },
  groupsName: '数据展示',
  icon: 'icon-ico-comp-tree',
  title: '树形控件',
  defaultValue: [
    {
      borderColor: '#e5e5e5',
      borderRadius: '2px',
      textColor: '#1c242e',
      fontSize: '14px',
      // treeLineHeight: '2',
      treeTextColor: '#1c242e',
      treeFontSize: '14px',
      treeBgColor: 'rgba(68,119,238,.06)',
      treeLineColor: '#e5e5e5',
      treeIconColor: '#47e',
    },
  ],
  tpl: `.ued-tree-wrap .ued-tree-search .pcfactory-input{
    color: textColor;
    border-color: borderColor;
    font-size:fontSize;
    border-bottom-left-radius: borderRadius;
    border-top-left-radius: borderRadius;
  }
  .ued-tree-wrap .pcfactory-input-search>.pcfactory-input-group>.pcfactory-input-group-addon:last-child .pcfactory-input-search-button{
    height: calc(1.5715* fontSize + 10px);
    border-color: borderColor;
    border-bottom-right-radius: borderRadius;
    border-top-right-radius: borderRadius;
  }
  .ued-tree .ued-tree-tit{
    color: treeTextColor;
    font-size: treeFontSize;
  }
  .ued-tree.pcfactory-tree .pcfactory-tree-treenode .pcfactory-tree-node-content-wrapper.pcfactory-tree-node-selected{
    background-color: treeBgColor
  }
  .ued-tree.pcfactory-tree .pcfactory-tree-treenode span.pcfactory-tree-switcher{
    color: treeIconColor;
  }
  .ued-tree-wrap .pcfactory-tree-show-line .pcfactory-tree-indent-unit:before{
    border-color: treeLineColor;
  }
  .ued-tree-wrap .pcfactory-tree-switcher-leaf-line:before{
    border-color: treeLineColor;
  }
  .ued-tree-wrap .pcfactory-tree-switcher-leaf-line:after{
    border-color: treeLineColor;

  }
  .ued-tree.pcfactory-tree .pcfactory-tree-treenode .pcfactory-tree-node-content-wrapper .pcfactory-tree-iconEle .ued-icon.fill-primary{
    fill: treeIconColor;
    color: treeIconColor;
  }`,
  components: [
    {
      id: 'Tree_371619',
      label: '树形控件',
      compName: 'Tree',
      type: 'Tree',
      compType: 3,
      compLib: 'comm',
      props: {
        name: '树形控件',
        basicStatus: 1,
        defaultExpandAll: true,
        showLine: true,
        selectable: true,
        isAsync: false,
        treeData: [
          {
            title: '分公司1',
            key: '8801066',
            $$isParent: true,
            selectable: true,
            children: [
              {
                title: '设计',
                key: '562194',
                selectable: true,
                value: '562194',
              },
              {
                title: '开发',
                key: '609015',
                selectable: true,
                value: '609015',
              },
              {
                title: '测试',
                key: '9582152',
                selectable: true,
                value: '9582152',
              },
              {
                title: '需求',
                key: '1922326',
                selectable: true,
                value: '1922326',
              },
            ],
            value: '8801066',
          },
          {
            title: '分公司2',
            key: '4163425',
            $$isParent: true,
            selectable: true,
            value: '4163425',
            children: [
              {
                title: '设计',
                key: '15085',
                selectable: true,
                value: '15085',
              },
              {
                title: '开发',
                key: '409378',
                selectable: true,
                value: '409378',
              },
              {
                title: '测试',
                key: '667171',
                selectable: true,
                value: '667171',
              },
              {
                title: '需求',
                key: '60022',
                selectable: true,
                value: '60022',
              },
            ],
          },
        ],
        showLineIcon: true,
        showSearch: true,
        treeNodeIcon: {
          isUsePrimary: true,
          iconType: 'outlined',
          iconStyle: 'organization',
          color: 'rgba(28, 36, 46, 0.75)',
          iconInfo: {
            closed: {
              isIconFont: true,
              type: 'lcdp-icon-tuandui-xian',
            },
            expanded: {
              isIconFont: true,
              type: 'lcdp-icon-tuandui-xian',
            },
            leaf: {
              isIconFont: true,
              type: 'lcdp-icon-geren-xian',
            },
          },
          extendRules: [],
        },
      },
      style: {},
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Tree',
      description: '',
      image: '',
      groupsName: '数据展示',
      engineApi: ['sandBoxSafeRun', 'service.commonFetch'],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['3602564', 'View_3602564_1'],
    },
  ],
};
