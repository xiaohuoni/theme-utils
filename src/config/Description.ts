export const Description = {
  type: 'Description',
  variable: {
    borderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '边框',
    },
    borderWidth: {
      type: 'px',
      label: '边框粗细',
      groupsName: '边框',
    },
    backgroundColor: {
      type: 'color',
      label: '标题背景颜色',
      groupsName: '背景颜色',
    },
    bodyBgColor: {
      type: 'color',
      label: '正文背景颜色',
      groupsName: '背景颜色',
    },
    textColor: { type: 'color', label: '标题文本颜色', groupsName: '文字' },
    bodyTextColor: { type: 'color', label: '正文文本颜色', groupsName: '文字' },
    paddingValue: {
      type: 'marginInput',
      label: '标题内边距',
      groupsName: '布局',
    },
    bodyPaddingValue: {
      type: 'marginInput',
      label: '正文内边距',
      groupsName: '布局',
    },
  },
  groupsName: '数据展示',
  icon: 'icon-ico-comp-descriptions',
  title: '描述列表',
  defaultValue: [
    {
      borderColor: '#e5e5e5',
      borderWidth: '1px',
      paddingValue: '8px 16px 8px 16px',
      bodyPaddingValue: '8px 16px 8px 16px',
      backgroundColor: '#fafafa',
      bodyBgColor: 'rgba(0,0,0,0)',
      textColor: '#3e454d',
      bodyTextColor: '#3e454d',
    },
  ],
  tpl: `.ued-description-wrap{
    .ued-description.border{
      border-left: borderWidth solid borderColor;
      border-top: borderWidth solid borderColor;
    }
    .ued-description .ued-description-cell.border{
      border-bottom: borderWidth solid borderColor;
      border-right: borderWidth solid borderColor;
    }
    .ued-description .ued-description-cell .ued-description-label.bg{
      border-right: borderWidth solid borderColor;
      background: backgroundColor;
      color: textColor;
    }
    .ued-description .ued-description-cell .ued-description-label{
      padding: paddingValue;
    }
    .ued-description .ued-description-cell .ued-description-cont{
      padding: bodyPaddingValue;
      background: bodyBgColor;
      color: bodyTextColor;
    }
  }`,
  components: [
    {
      id: 'Description_180191',
      label: '描述列表',
      compName: 'Description',
      type: 'Description',
      compType: 3,
      compLib: 'comm',
      props: {
        name: '描述列表1',
        layout: 'horizontal',
        basicStatus: 1,
        dataSource:
          "$[{\t'id': 1,\t'name': '王女士-月嫂服务订单',\t'code': '24475411512',\t'statusText': '服务成功',\t'status': 'success',\t'sales': '18779.70'}, ]$",
        columns: [
          {
            label: '姓名',
            dataIndex: 'name',
            key: 'column1',
          },
          {
            label: '状态',
            dataIndex: 'statusText',
            key: 'column2',
          },
          {
            label: '价格',
            dataIndex: 'sales',
            key: 'column3',
          },
          {
            label: '价格',
            dataIndex: 'sales',
            key: 'column4',
          },
          {
            label: '价格',
            dataIndex: 'sales',
            key: 'column5',
          },
          {
            label: '价格',
            dataIndex: 'sales',
            key: 'column6',
          },
        ],
        bordered: true,
        labelSize: '120px',
        colSpan: 8,
        colon: true,
        labelAlign: 'left',
      },
      style: {},
      isContainer: false,
      isBusiObjContainer: true,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Description',
      description: '',
      image: '',
      groupsName: '数据展示',
      engineApi: [
        'sandBoxSafeRun',
        'service.getPageVersionById',
        'renderPopover',
      ],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['3602564', 'View_3602564_1'],
    },
  ],
};
