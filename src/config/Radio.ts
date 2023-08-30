export const Radio = {
  type: 'Radio',
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
  icon: 'icon-ico-comp-radio',
  title: '单选组',
  defaultValue: [
    {
      radioSize: '16px',
      radioBorderColor: '#e5e5e5',
      radioBgColor: '#fff',
      radioSeBorderColor: '#47e',
      radioSeBgColor: '#fff',
    },
  ],
  tpl: `.pcfactory-radio-inner{
      width: radioSize;
      height: radioSize;
      border-color: radioBorderColor;
      background: radioBgColor;
    }
    .pcfactory-radio-checked .pcfactory-radio-inner{
      border-color: radioSeBorderColor;
      background: radioSeBgColor;
    }
    .pcfactory-radio-input:focus+.pcfactory-radio-inner{
      border-color: radioSeBorderColor;
  }
   .pcfactory-radio-wrapper:hover .pcfactory-radio{
    border-color: radioSeBorderColor;
}
 .pcfactory-radio:hover .pcfactory-radio-inner {
      border-color: radioSeBorderColor;
  }
  .pcfactory-form-item input[type=checkbox]{
    width: radioSize;
    height: radioSize;
  }
   .pcfactory-form-item input[type=radio]{
    width: radioSize;
    height: radioSize;
  }
  .pcfactory-radio-checked .pcfactory-radio-inner:after{
    background: radioSeBorderColor;
    margin-left:0px;
    margin-top:0px;
    top:-1%;
    left:-3%;
    border-radius: radioSize;
    width: radioSize;
    height: radioSize;
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
          id: 'Radio_371201',
          label: '单选组',
          compName: 'Radio',
          type: 'Radio',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '单选组',
            radioType: 'Radio',
            optionMarginRight: 0,
            labelCol: 8,
            wrapperCol: 16,
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            formItemIndex: 3,
            fieldName: 'dsgc',
            staticData: {
              data: [
                {
                  id: '363107',
                  label: '属性名',
                  value: 'zx',
                },
                {
                  id: '3028122',
                  label: '属性名11',
                  value: 'asds',
                },
              ],
              type: 'custom',
            },
            options: [
              {
                id: '363107',
                label: '属性名',
                value: 'zx',
              },
              {
                id: '3028122',
                label: '属性名11',
                value: 'asds',
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
          icon: 'Radio',
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
