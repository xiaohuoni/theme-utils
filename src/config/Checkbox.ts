export const Checkbox = {
  type: 'Checkbox',
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
    radioSize: {
      type: 'px',
      label: '图标尺寸',
      groupsName: '文字',
    },
    radioBorderColor: {
      type: 'color',
      label: '默认边框颜色',
      groupsName: '边框',
    },
    radioBgColor: {
      type: 'color',
      label: '默认背景颜色',
      groupsName: '边框',
    },
    radioSeBorderColor: {
      type: 'color',
      label: '选中边框颜色',
      groupsName: '边框',
    },
    radioSeBgColor: {
      type: 'color',
      label: '选中背景颜色',
      groupsName: '边框',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-checkbox',
  title: '复选框',
  defaultValue: [
    {
      radioSize: '16px',
      radioBorderColor: '#e5e5e5',
      radioBgColor: '#fff',
      radioSeBorderColor: '#47e',
      radioSeBgColor: '#47e',
    },
  ],
  tpl: `.pcfactory-checkbox-inner{
      width: radioSize;
      height: radioSize;
      border-color: radioBorderColor;
      background: radioBgColor;
    }
    .pcfactory-checkbox-checked .pcfactory-checkbox-inner{
      border-color: radioSeBorderColor;
      background: radioSeBgColor;
    }
    .pcfactory-checkbox-input:focus+.pcfactory-checkbox-inner{
      border-color: radioSeBorderColor;
  }
   .pcfactory-checkbox-wrapper:hover .pcfactory-checkbox{
    border-color: radioSeBorderColor;
}
.pcfactory-checkbox:hover .pcfactory-checkbox-inner {
      border-color: radioSeBorderColor;
  }
  .pcfactory-form-item input[type=checkbox], .pcfactory-form-item input[type=radio]{
    width: radioSize;
    height: radioSize;
  }
  .pcfactory-checkbox-indeterminate .pcfactory-checkbox-inner:after{
    background: radioSeBgColor;
    width: calc(0.47* radioSize);
    height: calc(0.47* radioSize);
  }
  .pcfactory-checkbox-checked .pcfactory-checkbox-inner:after{
    width: calc(0.35* radioSize);
    height: calc(0.57* radioSize);
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
          id: 'Checkbox_7458648',
          label: '复选框',
          compName: 'Checkbox',
          type: 'Checkbox',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '复选框',
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            text: '',
            selfSpan: '',
            labelCol: 8,
            wrapperCol: 16,
            formItemIndex: 5,
            fieldName: 'ads',
            extendProps: [
              {
                key: 'ere',
                value: 'fefds',
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
            valuePropName: 'checked',
          },
          icon: 'Checkbox',
          description: '',
          image: '',
          groupsName: '数据录入',
          isInlineBlock: true,
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
