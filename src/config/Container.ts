export const Container = {
  type: 'Container',
  variable: {
    textColor: {
      type: 'color',
      label: '标题文本颜色',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
    },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
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
    //   desc: '对布局容器、表单容器、普通容器、卡片、折叠面板、标签页和表格均生效',
    // },
    // borderRadius: {
    //   type: 'px',
    //   label: '边框圆角',
    //   groupsName: '边框',
    //   desc: '对布局容器、表单容器、普通容器、卡片、折叠面板、标签页和表格均生效',
    // },
  },
  groupsName: '容器',
  icon: 'icon-ico-comp-wrap',
  desc: '配置对卡片标题、折叠面板标题、表格头部标题生效',
  // desc: '边框配置对布局容器、表单容器、普通容器、卡片、折叠面板、标签页和表格均生效；文字配置对卡片标题、折叠面板标题、表格头部标题生效',
  title: '容器',
  defaultValue: [
    {
      textColor: '#0085D0',
      lineHeight: '150%',
      fontSize: '16px',
      fontWeight: '500',
      // borderColor: '#E8E8E8',
      // borderRadius: '8px',
    },
  ],
  // TODO：布局容器、普通容器
  tpl: `
    .ued-card .ued-card-title {
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
    }
    .ued-collapse-wrap .pcfactory-collapse.pcfactory-collapse-icon-position-right > .pcfactory-collapse-item > .pcfactory-collapse-header .ued-collapse-panel-header {
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
    }
   .ued-table-filters .table-head-default{
    color: textColor;
    line-height: lineHeight;
    font-size: fontSize;
    font-weight: fontWeight;
    padding: 12px 0 0 20px;
  }
   .ued-table-filters .table-head-middle{
    color: textColor;
    line-height: lineHeight;
    font-size: fontSize;
    font-weight: fontWeight;
    padding: 12px 0 0 20px;
  }
   .ued-table-wrap .table-head-default{
    color: textColor;
    line-height: lineHeight;
    font-size: fontSize;
    font-weight: fontWeight;
    padding: 12px 0 0 20px;
  }
   .ued-table-wrap .table-head-middle .title{
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
      padding: 12px 0 0 20px;
    }
    .ued-table-wrap .table-head .title{
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
    }`,
  components: [
    {
      id: 'Card_872926',
      label: '卡片',
      compName: 'Card',
      type: 'Card',
      compType: 0,
      compLib: '$component',
      props: {
        name: '卡片',
        basicStatus: 1,
        cardIconType: 'middle',
        extendNum: 3,
        title: '标题',
        bordered: true,
        size: 'default',
        hasHeader: true,
        hasIcon: true,
        headerColor: '#ffffff',
      },
      style: {
        padding: '20px 20px 20px 20px',
        overflowY: 'visible',
        margin: '0 0 16px 0',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Card',
      description: '',
      image: '',
      groupsName: '容器',
      engineApi: ['sandBoxSafeRun', 'service.downloadFileByFileCode'],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['998509', 'View_998509_1'],
    },
    {
      id: 'Collapse_0069244',
      label: '折叠面板',
      compName: 'Collapse',
      type: 'Collapse',
      compType: 0,
      compLib: 'antd',
      props: {
        name: '折叠面板',
        basicStatus: 1,
        defaultActiveKey: ['1'],
        expandIconPosition: 'right',
        size: 'default',
        bordered: true,
        hasIcon: true,
        cardIconType: 'middle',
        collapseType: '',
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
      icon: 'Collapse',
      description: '',
      image: '',
      groupsName: '容器',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'CollapsePanel_4883644',
          label: '折叠子面板',
          compName: 'CollapsePanel',
          type: 'CollapsePanel',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '折叠子面板',
            basicStatus: 1,
            header: '标题1',
            key: '1',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'CollapsePanel',
          description: '',
          image: '',
          groupsName: '容器',
          engineApi: ['service.downloadFileByFileCode'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'View_998509_1', 'Collapse_0069244'],
        },
        {
          id: 'CollapsePanel_519634',
          label: '折叠子面板',
          compName: 'CollapsePanel',
          type: 'CollapsePanel',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '折叠子面板',
            basicStatus: 1,
            header: '标题2',
            key: '2',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'CollapsePanel',
          description: '',
          image: '',
          groupsName: '容器',
          engineApi: ['service.downloadFileByFileCode'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'View_998509_1', 'Collapse_0069244'],
        },
      ],
      path: ['998509', 'View_998509_1'],
    },
    {
      id: 'Table_5146607',
      label: '表格',
      compName: 'Table',
      type: 'Table',
      compType: 3,
      compLib: 'comm',
      props: {
        name: '表格',
        basicStatus: 1,
        isFlexColumn: false,
        extendNum: 3,
        adjustModel: 'auto',
        pageSize: 10,
        current: 1,
        tableTitle: '表格名称',
        headBtnNum: 3,
        columns: [
          {
            title: '第一列',
            dataIndex: 'column1',
            key: 'column1',
            lineNum: 1,
            titleLineNum: 1,
          },
          {
            title: '第二列',
            dataIndex: 'column2',
            key: 'column2',
            lineNum: 1,
            titleLineNum: 1,
          },
          {
            title: '第三列',
            dataIndex: 'column3',
            key: 'column3',
            lineNum: 1,
            titleLineNum: 1,
          },
          {
            title: '第四列',
            dataIndex: 'column4',
            key: 'column4',
            lineNum: 1,
            titleLineNum: 1,
          },
          {
            title: '第五列',
            dataIndex: 'column5',
            key: 'column5',
            lineNum: 1,
            titleLineNum: 1,
          },
        ],
        page: false,
        rowKeyType: 'specified',
        editMode: 'single',
        bordered: 'segmentation',
        size: 'middle',
        fixedAction: false,
        rowSelection: false,
        showHead: true,
        showTotal: false,
        showSizeChanger: false,
        showQuickJumper: false,
        pageSizeOptions: '[5,10,20]',
        showCustom: {
          hasCustom: false,
          customTitle: '自定义列',
          iconPosition: 'left',
          customStyle: 'default',
        },
        customNum: 3,
        rowKey: '11',
      },
      style: {},
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Table',
      description: '',
      image: '',
      groupsName: '数据展示',
      engineApi: [
        'sandBoxSafeRun',
        'renderer',
        'historyPush',
        'historyReplace',
        'batchDownloadFileByIds',
        'getAppFileUrlById',
        'BannerModal',
        'previewFile',
        'service.getPageVersionById',
        'openModal',
        'renderPopover',
      ],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['998509', 'View_998509_1'],
    },
  ],
};
