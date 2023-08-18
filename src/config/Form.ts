export const Form = {
  type: 'Form',
  variable: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    // borderColor: {
    //   type: 'color',
    //   label: '边框颜色',
    //   groupsName: '边框',
    //   canEdit: false,
    //   extendsKey: 'Container',
    //   desc: '继承自容器，此处不可编辑',
    // },
    // borderRadius: {
    //   type: 'px',
    //   label: '边框圆角',
    //   groupsName: '边框',
    //   canEdit: false,
    //   extendsKey: 'Container',
    //   desc: '继承自容器，此处不可编辑',
    // },
    labelTextColor: {
      type: 'color',
      label: '标签文本颜色',
      groupsName: '文字',
      desc: '对所有[数据录入]类型组件生效',
    },
    labelLineHeight: {
      type: 'px',
      label: '标签文本行高',
      groupsName: '文字',
      desc: '对所有[数据录入]类型组件生效',
    },
    labelFontSize: {
      type: 'px',
      label: '标签文本尺寸',
      groupsName: '文字',
      desc: '对所有[数据录入]类型组件生效',
    },
    textColor: {
      type: 'color',
      label: '文本颜色',
      groupsName: '文字',
      desc: '对所有[数据录入]类型组件生效',
    },
    fontSize: {
      type: 'px',
      label: '文本尺寸',
      groupsName: '文字',
      desc: '对所有[数据录入]类型组件生效',
    },
    itemBorderColor: {
      type: 'color',
      label: '组件边框颜色',
      groupsName: '边框',
      desc: '对所有[数据录入]类型组件生效',
    },
    itemBorderRadius: {
      type: 'px',
      label: '组件边框圆角',
      groupsName: '边框',
      desc: '对所有[数据录入]类型组件生效',
    },
  },
  groupsName: '容器',
  icon: 'Form',
  title: '表单',
  defaultValue: [
    {
      backgroundColor: '#fff',
      labelTextColor: '#1c242e',
      labelLineHeight: '32px',
      labelFontSize: '32px',
      textColor: '#1c242e',
      fontSize: '14px',
      itemBorderColor: '#E5E5EA',
      itemBorderRadius: '2px',
    },
  ],
  // 标签是 form 表单里面才有的，单独拉数据录入组件是没有标签的。
  // 为了 tpl 干净，不在下列添加注释，顺序是输入框、多行输入框、数字输入、验证码、单选组、复选组、下拉单选、下拉复选、日期选择、时间选择、开关、文件上传、滑动输入条、评星
  // 密码输入框、输入框的颜色和字号也在.pcfactory-input 边框在 .pcfactory-input-affix-wrapper
  // 验证码的颜色和字号也在.pcfactory-input 边框在 .verificationCodePC-inputContent
  // 单选组、复选组无边框
  // 下拉单选与下拉复选样式一致
  // 滑动输入条没有边框样式
  // TODO: 树选择器，联级选择器效果待确认
  tpl: `
    .ued-legacy-form-wrap{
      background-color: backgroundColor;
    }
    .ued-legacy-form-wrap.pcfactory-form-vertical .pcfactory-form-item-label>label{
      color: labelTextColor;
      line-height: labelLineHeight;
      font-size: labelFontSize;
    }
    .pcfactory-input-affix-wrapper {
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .pcfactory-input{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
      color: textColor;
      font-size: fontSize;
    }
    .ued-inputNumber-wrap.pcfactory-input-number{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
      color: textColor;
      font-size: fontSize;
    }
    .verificationCodePC-inputContent{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .pcfactory-radio-wrapper{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-checkbox-wrapper{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-select{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-select-selector{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .pcfactory-picker-input > input{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-picker{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .pcfactory-switch-checked{
      background-color: textColor;
    }
    .pcfactory-switch{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .ued-stdupload-wrap .pcfactory-upload.pcfactory-upload-select.pcfactory-upload-select-text button>span{
      color: textColor;
      font-size: fontSize;
    }
    .ued-stdupload-wrap .pcfactory-upload.pcfactory-upload-select.pcfactory-upload-select-text button{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .slider_wrap .pcfactory-slider .pcfactory-slider-handle{
      border-color: textColor;
    }
    .pcfactory-slider-handle{
      width: fontSize;
      height: fontSize;
    }
    .ued-rateContainer .pcfactory-rate{
      color: textColor;
      font-size: fontSize;
    }
    .ued-rateContainer-rateText{
      color: textColor;
      font-size: fontSize;
    }
    `,
  components: [
    {
      id: 'Form_310526',
      label: '表单',
      compName: 'Form',
      type: 'Form',
      compType: 0,
      compLib: 'comm',
      props: {
        name: '表单',
        colSpan: 24,
        labelCol: 8,
        wrapperCol: 16,
        layout: 'vertical',
        colon: true,
        labelAlign: 'right',
        basicStatus: 1,
        colSpace: 16,
        rowSpace: 16,
        formCode: 'Code_Form_310526',
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
          id: 'Input_981779',
          label: '输入框',
          compName: 'Input',
          type: 'Input',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '输入框',
            basicStatus: 1,
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            titleTip: 'notext',
            tipContent: '',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            prefixIconPosition: 'before',
            postfix: '',
            postfixIconPosition: 'before',
            required: false,
            placeholder: '请输入',
            allowClear: true,
            dataMask: '',
            formItemIndex: 0,
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
          engineApi: ['functorsMap'],
          icon: 'Input',
          description: '',
          image: '',
          groupsName: '数据录入',
          alias: 'DformInput',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'View_998509_1', 'Form_310526'],
        },
        {
          id: 'Input_983097',
          label: '输入框',
          compName: 'Input',
          type: 'Input',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '输入框',
            basicStatus: 1,
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            titleTip: 'notext',
            tipContent: '',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            prefixIconPosition: 'before',
            postfix: '',
            postfixIconPosition: 'before',
            required: false,
            placeholder: '请输入',
            allowClear: true,
            dataMask: '',
            formItemIndex: 1,
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
          engineApi: ['functorsMap'],
          icon: 'Input',
          description: '',
          image: '',
          groupsName: '数据录入',
          alias: 'DformInput',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'View_998509_1', 'Form_310526'],
        },
        {
          id: 'Input_3782814',
          label: '输入框',
          compName: 'Input',
          type: 'Input',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '输入框',
            basicStatus: 1,
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            titleTip: 'notext',
            tipContent: '',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            prefixIconPosition: 'before',
            postfix: '',
            postfixIconPosition: 'before',
            required: false,
            placeholder: '请输入',
            allowClear: true,
            dataMask: '',
            formItemIndex: 2,
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
          engineApi: ['functorsMap'],
          icon: 'Input',
          description: '',
          image: '',
          groupsName: '数据录入',
          alias: 'DformInput',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'View_998509_1', 'Form_310526'],
        },
      ],
      path: ['998509', 'View_998509_1'],
    },
  ],
};
