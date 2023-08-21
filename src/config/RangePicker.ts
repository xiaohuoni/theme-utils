export const RangePicker = {
  type: 'RangePicker',
  variable: {
    labelTextColor: {
      type: 'color',
      label: '标签文本颜色',
      groupsName: '文字',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    labelLineHeight: {
      type: 'px',
      label: '标签文本行高',
      groupsName: '文字',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    labelFontSize: {
      type: 'px',
      label: '标签文本尺寸',
      groupsName: '文字',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    textColor: {
      type: 'color',
      label: '文本颜色',
      groupsName: '文字',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    fontSize: {
      type: 'px',
      label: '文本尺寸',
      groupsName: '文字',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    itemBorderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '边框',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    itemBorderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    iconFontSize: {
      type: 'px',
      label: '时间图标尺寸',
      groupsName: '文字',
    },
    iconColor: {
      type: 'color',
      label: '时间图标颜色',
      groupsName: '文字',
    },
    lineColor: {
      type: 'color',
      label: '时间连接线颜色',
      groupsName: '文字',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-rangepicker',
  title: '时间段选择',
  defaultValue: [
    {
      iconFontSize: '14px',
      iconColor: '#0085D0',
      lineColor: '#1c242e',
    },
  ],
  tpl: `.ued-datePicker-wrap .pcfactory-picker-suffix{
      color: iconColor;
      width: iconFontSize;
      height: iconFontSize;
      .anticon>svg{
        width: iconFontSize;
        height: iconFontSize;
      }
    }
    .ued-datePicker-wrap .pcfactory-picker-clear{
      color: iconColor;
      width: iconFontSize;
      height: iconFontSize;
      .anticon>svg{
        width: iconFontSize;
        height: iconFontSize;
      }
    }
    .ued-datePicker-wrap .pcfactory-picker-range-separator{
      color: lineColor;
    }`,
  components: [
    {
      id: 'Form_180373',
      label: '表单',
      compName: 'Form',
      type: 'Form',
      compType: 0,
      compLib: 'comm',
      props: {
        name: '表单',
        colSpan: 12,
        labelCol: 8,
        wrapperCol: 16,
        layout: 'vertical',
        colon: true,
        labelAlign: 'right',
        basicStatus: 1,
        colSpace: 16,
        rowSpace: 16,
        formCode: 'Code_Form_180373',
      },
      style: {
        padding: '0px 0px 0px 0px',
      },
      isContainer: true,
      isBusiObjContainer: true,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Form',
      description: '',
      image: '',
      groupsName: '容器',
      engineApi: [
        'service.downloadFileByFileCode',
        'getVisible',
        'stateListener',
      ],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'RangePicker_842094',
          label: '时间段选择',
          compName: 'RangePicker',
          type: 'RangePicker',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '时间段选择',
            timeMode: 'date',
            separator: '~',
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            format: 'YYYY-MM-DD',
            pickerType: 'RangePicker',
            allowClear: true,
            formItemIndex: 12,
            fieldName: 'vfdcx',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'value',
          },
          icon: 'RangePicker',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
      ],
      path: ['998509'],
    },
  ],
};
