export const Table = {
  type: 'Table',
  variable: {
    textColor: {
      type: 'color',
      label: '标题文本颜色',
      groupsName: '文字',
      desc: '继承自容器，此处不可编辑',
      canEdit: false,
      extendsKey: 'Container',
    },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
      groupsName: '文字',
      desc: '继承自容器，此处不可编辑',
      canEdit: false,
      extendsKey: 'Container',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '文字',
      desc: '继承自容器，此处不可编辑',
      canEdit: false,
      extendsKey: 'Container',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '文字',
      desc: '继承自容器，此处不可编辑',
      canEdit: false,
      extendsKey: 'Container',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    selectPaginationColor: {
      type: 'color',
      label: '选中项背景颜色',
      groupsName: '表格分页',
    },
    selectPaginationBorder: {
      type: 'color',
      label: '选中项边框颜色',
      groupsName: '表格分页',
    },
    selectPaginationRadius: {
      type: 'px',
      label: '选中项边框圆角',
      groupsName: '表格分页',
    },
    // 基础表格
    tbFontSize: {
      type: 'px',
      label: '表格文本尺寸',
      groupsName: '基础',
    },
    tbBorderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '基础',
    },
    tbBorderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '基础',
    },
    headBgColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '表头',
    },
    headPadding: { type: 'marginInput', label: '内边距', groupsName: '表头' },
    headLineSize: {
      type: 'px',
      label: '下分割线尺寸',
      groupsName: '表头',
    },
    headLineColor: {
      type: 'color',
      label: '下分割线颜色',
      groupsName: '表头',
    },
    headTextColor: {
      type: 'color',
      label: '文本颜色',
      groupsName: '表头',
    },
    headFontWeight: {
      type: 'select',
      label: '文本字重',
      groupsName: '表头',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    headTextAlign: {
      type: 'select',
      label: '文字对齐方式',
      groupsName: '表头',
      options: [
        { title: 'left', value: 'left' },
        { title: 'center', value: 'center' },
        { title: 'right', value: 'right' },
      ],
    },
    bodyBgColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '内容行',
    },
    bodyPadding: { type: 'marginInput', label: '内边距', groupsName: '内容行' },
    bodyTextColor: {
      type: 'color',
      label: '文本颜色',
      groupsName: '内容行',
    },
    bodyFontWeight: {
      type: 'select',
      label: '文本字重',
      groupsName: '内容行',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    bodyTextAlign: {
      type: 'select',
      label: '文字对齐方式',
      groupsName: '内容行',
      options: [
        { title: 'left', value: 'left' },
        { title: 'center', value: 'center' },
        { title: 'right', value: 'right' },
      ],
    },
    zebraBgColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '斑马纹表格',
    },
  },
  groupsName: '数据展示',
  icon: 'icon-ico-comp-table',
  title: '表格',
  defaultValue: [
    {
      selectPaginationColor: '#47e',
      selectPaginationRadius: '2px',
      selectPaginationBorder: '#e5e5e5',
      tbFontSize: '14px',
      tbBorderColor: '#f0f0f0',
      tbBorderRadius: '2px',
      headBgColor: '#F5F8FA',
      headPadding: '10px 8px 10px 8px',
      headLineSize: '1px',
      headLineColor: '#f0f0f0',
      headFontWeight: '400',
      headTextColor: '#1c242e',
      headTextAlign: 'left',
      bodyBgColor: '#fff',
      bodyPadding: '10px 8px 10px 8px',
      bodyFontWeight: '400',
      bodyTextColor: '#1c242e',
      bodyTextAlign: 'left',
      zebraBgColor: '#fbfbfb',
    },
  ],
  tpl: `
  .ued-table-wrap {
    .pcfactory-table{
      font-size: tbFontSize;
      border-radius: tbBorderRadius;
    }
    .pcfactory-table-container{
      border-top-left-radius: tbBorderRadius;
    border-top-right-radius: tbBorderRadius;
    }
    .pcfactory-table-tbody{
      background: bodyBgColor;
    }
  }
  .ued-table-wrap .ued-table .pcfactory-table table .pcfactory-table-thead th {
    background: headBgColor;
    padding: headPadding;
    color: headTextColor;
    font-weight: headFontWeight;
    text-align: headTextAlign;
  }
  .ued-table-wrap .ued-table .pcfactory-table-thead>tr:first-child>th:first-child{
    border-top-left-radius: tbBorderRadius;
  }
  .ued-table-wrap .ued-table .pcfactory-table-thead>tr:first-child>th:last-child{
    border-top-right-radius: tbBorderRadius;
  }
  .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-body>table>tbody>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-body>table>tfoot>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-body>table>tfoot>tr>th,  .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-content>table>tbody>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-content>table>tfoot>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-content>table>tfoot>tr>th, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-content>table>thead>tr>th, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-header>table>tbody>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-header>table>tfoot>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-header>table>tfoot>tr>th, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-header>table>thead>tr>th, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-summary>table>tbody>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-summary>table>tfoot>tr>td, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-summary>table>tfoot>tr>th, .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-summary>table>thead>tr>th{
    border-color: tbBorderColor;
  }
  .pcfactory-table.pcfactory-table-bordered>.pcfactory-table-container>.pcfactory-table-content>table>thead>tr>th, .ued-table-filters .ued-table .pcfactory-table-thead>tr>th, .ued-table-wrap .ued-table .pcfactory-table-thead>tr>th{
    border-bottom: headLineSize solid headLineColor;
    // border-color:  headLineColor;
  }
  .ued-table-filters .ued-table .pcfactory-table-tbody>tr>td, .ued-table-wrap .ued-table .pcfactory-table-tbody>tr>td{
    border-color: tbBorderColor;
    padding: bodyPadding;
    color: bodyTextColor;
    font-weight: bodyFontWeight;
    text-align: bodyTextAlign;
  }
  .ued-table-filters .ued-table .pcfactory-table-bordered, .ued-table-wrap .ued-table .pcfactory-table-bordered{
    border-color: tbBorderColor;
  }
  .ued-table-filters .ued-table-page .pcfactory-pagination-item-active, .ued-table-wrap .ued-table-page .pcfactory-pagination-item-active{
    background: selectPaginationColor;
  }
  .ued-table-page .pcfactory-pagination-item{
    border-radius: selectPaginationRadius;
    border-color: selectPaginationBorder;
  }
  .ued-table-page .pcfactory-pagination-item-link{
    border-radius: selectPaginationRadius;
    border-color: selectPaginationBorder;
  }
  .ued-table-page .pcfactory-pagination-options .pcfactory-select .pcfactory-select-selector{
    border-radius: selectPaginationRadius;
    border-color: selectPaginationBorder;
  }
  .ued-table-page .pcfactory-pagination-options .pcfactory-pagination-options-quick-jumper input{
    border-radius: selectPaginationRadius;
    border-color: selectPaginationBorder;
  }
  .ued-table-filters .ued-table-zebra-stripe .pcfactory-table-row:nth-child(2n), .ued-table-wrap .ued-table-zebra-stripe .pcfactory-table-row:nth-child(2n){
    background: zebraBgColor;
  }`,
  components: [
    {
      id: 'Table_2740384',
      label: '表格',
      compName: 'Table',
      type: 'Table',
      compType: 3,
      compLib: 'comm',
      props: {
        name: '表格',
        isFlexColumn: false,
        extendNum: 3,
        adjustModel: 'auto',
        pageSize: 5,
        current: 1,
        tableTitle: '分割线表格',
        headBtnNum: 3,
        showCustom: {
          iconPosition: 'left',
          customTitle: '自定义列',
          customStyle: 'default',
          hasCustom: false,
        },
        columns: [
          {
            title: '商品名称',
            dataIndex: 'name',
            key: 'column1',
            className: '',
            id: '119445',
          },
          {
            title: '编码',
            dataIndex: 'code',
            key: 'column2',
            className: 'divider',
            id: '241842',
          },
          {
            title: '状态',
            dataIndex: 'statusText',
            key: 'column3',
            className: 'divider',
            id: '299707',
          },
          {
            title: '销售金额(元)',
            dataIndex: 'sales',
            key: 'column4',
            className: 'divider',
            id: '7973874',
          },
        ],
        page: true,
        rowKeyType: 'specified',
        editMode: 'single',
        bordered: false,
        size: 'default',
        fixedAction: false,
        rowSelection: 'checkbox',
        showHead: true,
        showTotal: true,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: '[5,10,20]',
        customNum: 3,
        rowKey: 'id',
        rowActions: [],
        extend: [],
        dataSource:
          "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, {\t'id': 2,\t'name': '李女士-开荒保洁套餐',\t'code': '4443503045',\t'statusText': '服务延期',\t'status': 'warning',\t'sales': '1452.79'}, {\t'id': 3,\t'name': '陈先生-油烟机清洗服务',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '142.86'}, {\t'id': 4,\t'name': '陈先生-窗户保洁服务',\t'code': '4443503045',\t'statusText': '待服务',\t'status': 'normal',\t'sales': '560.00'}, {\t'id': 5,\t'name': '秦女士-月嫂服务订单',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '16779.70'}, {\t'id': 6,\t'name': '王先生-油烟机安装服务',\t'code': '4443503045',\t'statusText': '订单取消',\t'status': 'waiting',\t'sales': ''}, ]$",
        basicStatus: 1,
        headExtends: [],
      },
      style: {
        margin: '0px 0px 0px 0px',
      },
      isContainer: false,
      isBusiObjContainer: true,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Table',
      description: '',
      image: '',
      groupsName: '数据展示',
      setEvents: [],
      isLabelDropBoxChild: false,
      functors: {
        dataSource: {
          title:
            "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, {\t'id': 2,\t'name': '李女士-开荒保洁套餐',\t'code': '4443503045',\t'statusText': '服务延期',\t'status': 'warning',\t'sales': '1452.79'}, {\t'id': 3,\t'name': '陈先生-油烟机清洗服务',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '142.86'}, {\t'id': 4,\t'name': '陈先生-窗户保洁服务',\t'code': '4443503045',\t'statusText': '待服务',\t'status': 'normal',\t'sales': '560.00'}, {\t'id': 5,\t'name': '秦女士-月嫂服务订单',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '16779.70'}, {\t'id': 6,\t'name': '王先生-油烟机安装服务',\t'code': '4443503045',\t'statusText': '订单取消',\t'status': 'waiting',\t'sales': ''}, ]$",
          value:
            "$[{  'id': 1,  'name': '王女士-月嫂服务订单',  'code': '24475411512',  'statusText': '服务成功',  'status': 'success',  'sales': '18779.70'}, {  'id': 2,  'name': '李女士-开荒保洁套餐',  'code': '4443503045',  'statusText': '服务延期',  'status': 'warning',  'sales': '1452.79'}, {  'id': 3,  'name': '陈先生-油烟机清洗服务',  'code': '4443503045',  'statusText': '服务终止',  'status': 'fail',  'sales': '142.86'}, {  'id': 4,  'name': '陈先生-窗户保洁服务',  'code': '4443503045',  'statusText': '待服务',  'status': 'normal',  'sales': '560.00'}, {  'id': 5,  'name': '秦女士-月嫂服务订单',  'code': '4443503045',  'statusText': '服务终止',  'status': 'fail',  'sales': '16779.70'}, {  'id': 6,  'name': '王先生-油烟机安装服务',  'code': '4443503045',  'statusText': '订单取消',  'status': 'waiting',  'sales': ''}];$",
          dependOtherIds: [],
        },
      },
      components: [],
      path: ['3602564', 'View_3602564_1', 'Card_88389153'],
    },
    {
      id: 'Table_2740384',
      label: '表格',
      compName: 'Table',
      type: 'Table',
      compType: 3,
      compLib: 'comm',
      props: {
        name: '表格',
        isFlexColumn: false,
        extendNum: 3,
        adjustModel: 'auto',
        pageSize: 5,
        current: 1,
        tableTitle: '斑马纹表格',
        headBtnNum: 3,
        showCustom: {
          iconPosition: 'left',
          customTitle: '自定义列',
          customStyle: 'default',
          hasCustom: false,
        },
        columns: [
          {
            title: '商品名称',
            dataIndex: 'name',
            key: 'column1',
            className: '',
            id: '119445',
          },
          {
            title: '编码',
            dataIndex: 'code',
            key: 'column2',
            className: 'divider',
            id: '241842',
          },
          {
            title: '状态',
            dataIndex: 'statusText',
            key: 'column3',
            className: 'divider',
            id: '299707',
          },
          {
            title: '销售金额(元)',
            dataIndex: 'sales',
            key: 'column4',
            className: 'divider',
            id: '7973874',
          },
        ],
        page: true,
        rowKeyType: 'specified',
        editMode: 'single',
        bordered: 'zebra',
        size: 'default',
        fixedAction: false,
        rowSelection: 'checkbox',
        showHead: true,
        showTotal: true,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: '[5,10,20]',
        customNum: 3,
        rowKey: 'id',
        rowActions: [],
        extend: [],
        dataSource:
          "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, {\t'id': 2,\t'name': '李女士-开荒保洁套餐',\t'code': '4443503045',\t'statusText': '服务延期',\t'status': 'warning',\t'sales': '1452.79'}, {\t'id': 3,\t'name': '陈先生-油烟机清洗服务',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '142.86'}, {\t'id': 4,\t'name': '陈先生-窗户保洁服务',\t'code': '4443503045',\t'statusText': '待服务',\t'status': 'normal',\t'sales': '560.00'}, {\t'id': 5,\t'name': '秦女士-月嫂服务订单',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '16779.70'}, {\t'id': 6,\t'name': '王先生-油烟机安装服务',\t'code': '4443503045',\t'statusText': '订单取消',\t'status': 'waiting',\t'sales': ''}, ]$",
        basicStatus: 1,
        headExtends: [],
      },
      style: {
        margin: '0px 0px 0px 0px',
      },
      isContainer: false,
      isBusiObjContainer: true,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Table',
      description: '',
      image: '',
      groupsName: '数据展示',
      setEvents: [],
      isLabelDropBoxChild: false,
      functors: {
        dataSource: {
          title:
            "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, {\t'id': 2,\t'name': '李女士-开荒保洁套餐',\t'code': '4443503045',\t'statusText': '服务延期',\t'status': 'warning',\t'sales': '1452.79'}, {\t'id': 3,\t'name': '陈先生-油烟机清洗服务',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '142.86'}, {\t'id': 4,\t'name': '陈先生-窗户保洁服务',\t'code': '4443503045',\t'statusText': '待服务',\t'status': 'normal',\t'sales': '560.00'}, {\t'id': 5,\t'name': '秦女士-月嫂服务订单',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '16779.70'}, {\t'id': 6,\t'name': '王先生-油烟机安装服务',\t'code': '4443503045',\t'statusText': '订单取消',\t'status': 'waiting',\t'sales': ''}, ]$",
          value:
            "$[{  'id': 1,  'name': '王女士-月嫂服务订单',  'code': '24475411512',  'statusText': '服务成功',  'status': 'success',  'sales': '18779.70'}, {  'id': 2,  'name': '李女士-开荒保洁套餐',  'code': '4443503045',  'statusText': '服务延期',  'status': 'warning',  'sales': '1452.79'}, {  'id': 3,  'name': '陈先生-油烟机清洗服务',  'code': '4443503045',  'statusText': '服务终止',  'status': 'fail',  'sales': '142.86'}, {  'id': 4,  'name': '陈先生-窗户保洁服务',  'code': '4443503045',  'statusText': '待服务',  'status': 'normal',  'sales': '560.00'}, {  'id': 5,  'name': '秦女士-月嫂服务订单',  'code': '4443503045',  'statusText': '服务终止',  'status': 'fail',  'sales': '16779.70'}, {  'id': 6,  'name': '王先生-油烟机安装服务',  'code': '4443503045',  'statusText': '订单取消',  'status': 'waiting',  'sales': ''}];$",
          dependOtherIds: [],
        },
      },
      components: [],
      path: ['3602564', 'View_3602564_1', 'Card_88389153'],
    },

    {
      id: 'Table_2740384',
      label: '表格',
      compName: 'Table',
      type: 'Table',
      compType: 3,
      compLib: 'comm',
      props: {
        name: '表格',
        isFlexColumn: false,
        extendNum: 3,
        adjustModel: 'auto',
        pageSize: 5,
        current: 1,
        tableTitle: '边框线表格',
        headBtnNum: 3,
        showCustom: {
          iconPosition: 'left',
          customTitle: '自定义列',
          customStyle: 'default',
          hasCustom: false,
        },
        columns: [
          {
            title: '商品名称',
            dataIndex: 'name',
            key: 'column1',
            className: '',
            id: '119445',
          },
          {
            title: '编码',
            dataIndex: 'code',
            key: 'column2',
            className: 'divider',
            id: '241842',
          },
          {
            title: '状态',
            dataIndex: 'statusText',
            key: 'column3',
            className: 'divider',
            id: '299707',
          },
          {
            title: '销售金额(元)',
            dataIndex: 'sales',
            key: 'column4',
            className: 'divider',
            id: '7973874',
          },
        ],
        page: true,
        rowKeyType: 'specified',
        editMode: 'single',
        bordered: 'border',
        size: 'default',
        fixedAction: false,
        rowSelection: 'checkbox',
        showHead: true,
        showTotal: true,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: '[5,10,20]',
        customNum: 3,
        rowKey: 'id',
        rowActions: [],
        extend: [],
        dataSource:
          "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, {\t'id': 2,\t'name': '李女士-开荒保洁套餐',\t'code': '4443503045',\t'statusText': '服务延期',\t'status': 'warning',\t'sales': '1452.79'}, {\t'id': 3,\t'name': '陈先生-油烟机清洗服务',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '142.86'}, {\t'id': 4,\t'name': '陈先生-窗户保洁服务',\t'code': '4443503045',\t'statusText': '待服务',\t'status': 'normal',\t'sales': '560.00'}, {\t'id': 5,\t'name': '秦女士-月嫂服务订单',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '16779.70'}, {\t'id': 6,\t'name': '王先生-油烟机安装服务',\t'code': '4443503045',\t'statusText': '订单取消',\t'status': 'waiting',\t'sales': ''}, ]$",
        basicStatus: 1,
        headExtends: [],
      },
      style: {
        margin: '0px 0px 0px 0px',
      },
      isContainer: false,
      isBusiObjContainer: true,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Table',
      description: '',
      image: '',
      groupsName: '数据展示',
      setEvents: [],
      isLabelDropBoxChild: false,
      functors: {
        dataSource: {
          title:
            "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, {\t'id': 2,\t'name': '李女士-开荒保洁套餐',\t'code': '4443503045',\t'statusText': '服务延期',\t'status': 'warning',\t'sales': '1452.79'}, {\t'id': 3,\t'name': '陈先生-油烟机清洗服务',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '142.86'}, {\t'id': 4,\t'name': '陈先生-窗户保洁服务',\t'code': '4443503045',\t'statusText': '待服务',\t'status': 'normal',\t'sales': '560.00'}, {\t'id': 5,\t'name': '秦女士-月嫂服务订单',\t'code': '4443503045',\t'statusText': '服务终止',\t'status': 'fail',\t'sales': '16779.70'}, {\t'id': 6,\t'name': '王先生-油烟机安装服务',\t'code': '4443503045',\t'statusText': '订单取消',\t'status': 'waiting',\t'sales': ''}, ]$",
          value:
            "$[{  'id': 1,  'name': '王女士-月嫂服务订单',  'code': '24475411512',  'statusText': '服务成功',  'status': 'success',  'sales': '18779.70'}, {  'id': 2,  'name': '李女士-开荒保洁套餐',  'code': '4443503045',  'statusText': '服务延期',  'status': 'warning',  'sales': '1452.79'}, {  'id': 3,  'name': '陈先生-油烟机清洗服务',  'code': '4443503045',  'statusText': '服务终止',  'status': 'fail',  'sales': '142.86'}, {  'id': 4,  'name': '陈先生-窗户保洁服务',  'code': '4443503045',  'statusText': '待服务',  'status': 'normal',  'sales': '560.00'}, {  'id': 5,  'name': '秦女士-月嫂服务订单',  'code': '4443503045',  'statusText': '服务终止',  'status': 'fail',  'sales': '16779.70'}, {  'id': 6,  'name': '王先生-油烟机安装服务',  'code': '4443503045',  'statusText': '订单取消',  'status': 'waiting',  'sales': ''}];$",
          dependOtherIds: [],
        },
      },
      components: [],
      path: ['3602564', 'View_3602564_1', 'Card_88389153'],
    },
    {
      id: 'View_519882',
      label: '普通容器',
      compName: 'View',
      type: 'View',
      compType: 0,
      compLib: 'custom',
      props: {
        name: '普通容器1',
        basicStatus: 1,
      },
      style: {
        textAlign: 'left',
        display: 'block',
        flexDirection: 'column',
        padding: '0px 0px 0px 0px',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: '150px',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'View',
      description: '',
      image: '',
      groupsName: '布局',
      engineApi: ['service.downloadFileByFileCode'],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['998509'],
    },
  ],
};
