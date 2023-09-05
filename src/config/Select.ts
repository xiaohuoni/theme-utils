export const Select = {
  type: 'Select',
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
      label: '下拉图标尺寸',
      groupsName: '文字',
      desc: '请根据实际【文本尺寸】调整，不宜与【文本尺寸】大小差异过大',
    },
    iconColor: {
      type: 'color',
      label: '下拉图标颜色',
      groupsName: '文字',
    },
    iconTop: {
      type: 'px',
      label: '下拉图标距离顶部',
      groupsName: '文字',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-select',
  title: '下拉单选',
  defaultValue: [
    {
      iconFontSize: '12px',
      iconTop: '16px',
      iconColor: 'rgba(28,36,46,.25)',
    },
  ],
  tpl: `.ued-select-wrap .pcfactory-select-arrow{
    color: iconColor;
    width: iconFontSize;
    height: iconFontSize;
    top: iconTop;
    .anticon>svg{
      width: iconFontSize;
      height: iconFontSize;
    }
  }
  .ued-select-wrap .pcfactory-select-clear{
    color: iconColor;
    width: iconFontSize;
    height: iconFontSize;
    top: iconTop;
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
          id: 'Select_956117',
          label: '下拉框',
          compName: 'Select',
          type: 'Select',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '下拉框',
            basicStatus: 1,
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            filter: 'none',
            classification: 'default',
            placeholder: '请选择',
            allowClear: true,
            formItemIndex: 0,
            fieldName: 'dsgt',
            defaultValue: '1',
            staticData: {
              data: [
                {
                  id: '022656',
                  label: '属性名',
                  value: '1',
                },
                {
                  id: '18066',
                  label: '属性名1',
                  value: '2',
                },
              ],
              type: 'custom',
            },
            options: [
              {
                id: '022656',
                label: '属性名',
                value: '1',
              },
              {
                id: '18066',
                label: '属性名1',
                value: '2',
              },
            ],
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
          icon: 'Select',
          description: '',
          image: '',
          groupsName: '数据录入',
          engineApi: ['sandBoxSafeRun'],
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
