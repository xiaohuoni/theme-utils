export const Table = {
  type: 'Table',
  variable: {
    textColor: {
      type: 'color',
      label: '标题文本颜色',
      groupsName: '基础样式',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '基础样式',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '基础样式',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    headTextColor: {
      type: 'color',
      label: '表头文本颜色',
      groupsName: '基础样式',
    },
    headFontSize: {
      type: 'px',
      label: '表头文本尺寸',
      groupsName: '基础样式',
    },
    headBgColor: {
      type: 'color',
      label: '表头背景颜色',
      groupsName: '基础样式',
    },
    bodyBgColor: {
      type: 'color',
      label: '内容背景颜色',
      groupsName: '基础样式',
    },
    zebraBgColor: {
      type: 'color',
      label: '斑马纹颜色',
      groupsName: '基础样式',
    },
    borderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '基础样式',
    },
    borderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '基础样式',
    },
    // TODO:
    // fTextColor: {
    //   type: 'color',
    //   label: '首列文本颜色',
    //   groupsName: '二维表格',
    // },
    // fFontSize: {
    //   type: 'px',
    //   label: '首列文本尺寸',
    //   groupsName: '二维表格',
    // },
    // fFontWeight: {
    //   type: 'select',
    //   label: '首列文本字重',
    //   groupsName: '二维表格',
    //   options: [
    //     { title: '100', value: '100' },
    //     { title: '200', value: '200' },
    //     { title: '300', value: '300' },
    //     { title: '400', value: '400' },
    //     { title: '500', value: '500' },
    //   ],
    // },
    // fHeadBgColor: {
    //   type: 'color',
    //   label: '首列背景颜色',
    //   groupsName: '二维表格',
    // },
  },
  groupsName: '高级',
  icon: 'icon-ico-comp-table',
  title: '表格',
  defaultValue: [
    {
      textColor: '#1C242E',
      fontSize: '15px',
      fontWeight: '500',
      headTextColor: 'rgba(28, 36, 46, 0.55)',
      headFontSize: '12px',
      headBgColor: '#FAFAFA',
      bodyBgColor: '#FFF',
      zebraBgColor: '#FAFAFA',
      borderColor: '#EFEFEF',
      borderRadius: '2px',
      // fTextColor: 'rgba(28, 36, 46, 0.55)',
      // fFontSize: '12px',
      // fFontWeight: '400',
      // fHeadBgColor: '#FAFAFA',
    },
  ],
  tpl: `
  .appDynamicTable {
    .table-header{
      font-weight: fontWeight;
      font-size: fontSize;
      color: textColor;
    }
    .ag-header-row{
      font-size: headFontSize;
    }
    .table-body{
      --dynamic-table-header-bg-color: headBgColor;
      --ag-odd-row-background-color: bodyBgColor;
      --dynamic-table-header-color: headTextColor;
    }
    .ag-root-wrapper{
      border-radius: borderRadius;
    }
    .ag-theme-segmentation {
      --ag-background-color: bodyBgColor;
      --ag-borders-critical: borderColor;
      --ag-row-border-color: borderColor;
      --ag-header-border-color: borderColor;
  }
  .ag-theme-zebra {
    --ag-background-color: bodyBgColor;
    --ag-odd-row-background-color: zebraBgColor;
    --ag-borders: none;
    --ag-row-border-color: none;
}
  .ag-theme-border {
    --ag-background-color: bodyBgColor;
    --ag-border-color: borderColor;
    --ag-cell-horizontal-border: solid borderColor;
}
  }
`,
  //   tpl: `
  //   .appDynamicTable {
  //     .table-body{
  //       --dynamic-table-header-bg-color: headBgColor;
  //       --dynamic-table-header-color: textColor;
  //       --ag-odd-row-background-color: bodyBgColor;
  //     }
  //     .ag-header-row{
  //       font-weight: fontWeight;
  //       font-size: fontSize;
  //     }
  //     .ag-root-wrapper{
  //       border-radius: borderRadius;
  //     }
  //     .ag-theme-segmentation{
  //       .ag-row{
  //         border-bottom-color: borderColor;
  //       }
  //     }
  //     .ag-theme-zebra{
  //       .ag-row-odd{
  //         background-color: zebraBgColor
  //       }
  //     }
  //     .ag-theme-border{
  //       .ag-root-wrapper{
  //         border-color: borderColor;
  //       }
  //       .ag-header{
  //         border-bottom-color: borderColor;
  //       }
  //       .ag-header-cell{
  //         border-right-color: borderColor;
  //       }
  //       .ag-row{
  //         border-color: borderColor;
  //       }
  //       .ag-ltr .ag-cell{
  //         border-right-color: borderColor;
  //       }
  //     }
  //   }
  // `,
  components: [
    {
      id: 'DynamicTable_4420557',
      label: '表格',
      compName: 'DynamicTable',
      type: 'DynamicTable',
      compType: 5,
      compLib: '@/components',
      props: {
        name: '表格',
        pagination: false,
        status: '1',
        rowKeyType: 'auto',
        bordered: 'segmentation',
        pageSize: 10,
        pageNum: 1,
        pagingStyle: 'basic',
        rowLines: 5,
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            width: 60,
          },
          {
            title: '进度',
            dataIndex: 'sf',
            width: 100,
          },
          {
            title: '性别',
            dataIndex: 'sex',
            width: 60,
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 50,
          },
          {
            title: '籍贯',
            dataIndex: 'jg',
            width: 70,
          },
          {
            title: '地址',
            dataIndex: 'dz',
            width: 150,
          },
        ],
        dataSource: [
          {
            name: '张三名字很长很长很长很长',
            sex: '男',
            age: '100',
            jg: '中国',
            sf: '0',
            dz: '杭州市古墩路1号',
          },
          {
            name: '李四',
            sex: 'F',
            age: '5',
            jg: '中国',
            sf: '50%',
            dz: '杭州市古墩路12号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '20',
            jg: '中国',
            sf: '浙江',
            dz: '杭州市古墩路31号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '26',
            jg: '中国',
            sf: '0.3',
            dz: '杭州市古墩路111号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '35',
            jg: '中国',
            sf: '0.2',
            dz: '杭州市古墩路12号',
          },
        ],
        dataSourceLoading: false,
        showHead: true,
        tableTitle: '分割线表格',
      },
      style: {
        leftTitleColor: '#1C242E',
        width: '100%',
        height: '300px',
        borderRadius: '8px 8px 8px 8px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [],
      icon: 'DynamicTable',
      description: '',
      groupsName: '高级',
      engineApi: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
    {
      id: 'DynamicTable_212445',
      label: '表格',
      compName: 'DynamicTable',
      type: 'DynamicTable',
      compType: 5,
      compLib: '@/components',
      props: {
        name: '表格',
        pagination: false,
        status: '1',
        rowKeyType: 'auto',
        bordered: 'segmentation',
        pageSize: 10,
        pageNum: 1,
        pagingStyle: 'basic',
        rowLines: 5,
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            width: 60,
          },
          {
            title: '进度',
            dataIndex: 'sf',
            width: 100,
          },
          {
            title: '性别',
            dataIndex: 'sex',
            width: 60,
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 50,
          },
          {
            title: '籍贯',
            dataIndex: 'jg',
            width: 70,
          },
          {
            title: '地址',
            dataIndex: 'dz',
            width: 150,
          },
        ],
        dataSource: [
          {
            name: '张三名字很长很长很长很长',
            sex: '男',
            age: '100',
            jg: '中国',
            sf: '0',
            dz: '杭州市古墩路1号',
          },
          {
            name: '李四',
            sex: 'F',
            age: '5',
            jg: '中国',
            sf: '50%',
            dz: '杭州市古墩路12号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '20',
            jg: '中国',
            sf: '浙江',
            dz: '杭州市古墩路31号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '26',
            jg: '中国',
            sf: '0.3',
            dz: '杭州市古墩路111号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '35',
            jg: '中国',
            sf: '0.2',
            dz: '杭州市古墩路12号',
          },
        ],
        dataSourceLoading: false,
        twoDimension: true,
        showHead: true,
        tableTitle: '二维表格',
      },
      style: {
        leftTitleColor: '#1C242E',
        width: '100%',
        height: '300px',
        borderRadius: '8px 8px 8px 8px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [],
      icon: 'DynamicTable',
      description: '',
      groupsName: '高级',
      engineApi: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
    {
      id: 'DynamicTable_174559',
      label: '表格',
      compName: 'DynamicTable',
      type: 'DynamicTable',
      compType: 5,
      compLib: '@/components',
      props: {
        name: '表格',
        pagination: false,
        status: '1',
        rowKeyType: 'auto',
        bordered: 'zebra',
        pageSize: 10,
        pageNum: 1,
        pagingStyle: 'basic',
        rowLines: 5,
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            width: 60,
          },
          {
            title: '进度',
            dataIndex: 'sf',
            width: 100,
          },
          {
            title: '性别',
            dataIndex: 'sex',
            width: 60,
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 50,
          },
          {
            title: '籍贯',
            dataIndex: 'jg',
            width: 70,
          },
          {
            title: '地址',
            dataIndex: 'dz',
            width: 150,
          },
        ],
        dataSource: [
          {
            name: '张三名字很长很长很长很长',
            sex: '男',
            age: '100',
            jg: '中国',
            sf: '0',
            dz: '杭州市古墩路1号',
          },
          {
            name: '李四',
            sex: 'F',
            age: '5',
            jg: '中国',
            sf: '50%',
            dz: '杭州市古墩路12号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '20',
            jg: '中国',
            sf: '浙江',
            dz: '杭州市古墩路31号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '26',
            jg: '中国',
            sf: '0.3',
            dz: '杭州市古墩路111号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '35',
            jg: '中国',
            sf: '0.2',
            dz: '杭州市古墩路12号',
          },
        ],
        dataSourceLoading: false,
        showHead: true,
        tableTitle: '斑马纹表格',
      },
      style: {
        leftTitleColor: '#1C242E',
        width: '100%',
        height: '300px',
        borderRadius: '8px 8px 8px 8px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [],
      icon: 'DynamicTable',
      description: '',
      groupsName: '高级',
      engineApi: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
    {
      id: 'DynamicTable_468977',
      label: '表格',
      compName: 'DynamicTable',
      type: 'DynamicTable',
      compType: 5,
      compLib: '@/components',
      props: {
        name: '表格',
        pagination: false,
        status: '1',
        rowKeyType: 'auto',
        bordered: 'border',
        pageSize: 10,
        pageNum: 1,
        pagingStyle: 'basic',
        rowLines: 5,
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            width: 60,
          },
          {
            title: '进度',
            dataIndex: 'sf',
            width: 100,
          },
          {
            title: '性别',
            dataIndex: 'sex',
            width: 60,
          },
          {
            title: '年龄',
            dataIndex: 'age',
            width: 50,
          },
          {
            title: '籍贯',
            dataIndex: 'jg',
            width: 70,
          },
          {
            title: '地址',
            dataIndex: 'dz',
            width: 150,
          },
        ],
        dataSource: [
          {
            name: '张三名字很长很长很长很长',
            sex: '男',
            age: '100',
            jg: '中国',
            sf: '0',
            dz: '杭州市古墩路1号',
          },
          {
            name: '李四',
            sex: 'F',
            age: '5',
            jg: '中国',
            sf: '50%',
            dz: '杭州市古墩路12号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '20',
            jg: '中国',
            sf: '浙江',
            dz: '杭州市古墩路31号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '26',
            jg: '中国',
            sf: '0.3',
            dz: '杭州市古墩路111号',
          },
          {
            name: '王五',
            sex: 'F',
            age: '35',
            jg: '中国',
            sf: '0.2',
            dz: '杭州市古墩路12号',
          },
        ],
        dataSourceLoading: false,
        showHead: true,
        tableTitle: '边框线表格',
      },
      style: {
        leftTitleColor: '#1C242E',
        width: '100%',
        height: '300px',
        borderRadius: '8px 8px 8px 8px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [],
      icon: 'DynamicTable',
      description: '',
      groupsName: '高级',
      engineApi: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['454426', 'View_454426_1'],
    },
  ],
};
