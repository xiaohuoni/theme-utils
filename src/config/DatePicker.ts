export const DatePicker = {
  type: 'DatePicker',
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
      label: '日期图标尺寸',
      groupsName: '文字',
    },
    iconColor: {
      type: 'color',
      label: '日期图标颜色',
      groupsName: '文字',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-datepicker',
  title: '日期选择 ',
  defaultValue: [
    {
      iconFontSize: '14px',
      iconColor: '#0085D0',
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
          id: 'DatePicker_917298',
          label: '日期选择',
          compName: 'DatePicker',
          type: 'DatePicker',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '日期选择',
            timeMode: 'date',
            basicStatus: 1,
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            limitRange: 'no',
            startTime: '',
            endTime: '',
            format: 'YYYY-MM-DD',
            placeholder: '请选择日期',
            pickerType: 'DatePicker',
            customTip: '',
            allowClear: true,
            formItemIndex: 13,
            fieldName: 'grd',
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
          icon: 'DatePicker',
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
