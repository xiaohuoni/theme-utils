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
  icon: 'icon-ico-comp-form',
  title: '表单',
  defaultValue: [
    {
      backgroundColor: '#fff',
      labelTextColor: '#1c242e',
      labelLineHeight: '32px',
      labelFontSize: '14px',
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
      height: auto;
      min-height: 32px;
    }
    .pcfactory-radio-wrapper{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-checkbox-wrapper{
      color: textColor;
      font-size: fontSize;
    }
    .ued-select-wrap .pcfactory-select{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-select-multiple .ued-select-checked-tag{
      color: textColor;
      font-size: fontSize;
      min-height: 24px;
      height: auto;
      padding: 4px 8px 4px 8px;
    }
    .pcfactory-select-single:not(.pcfactory-select-customize-input) .pcfactory-select-selector::after{
      line-height: fontSize;
    }
    span.pcfactory-radio+*{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-select-selector{
      height: auto;
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
    }
    .ued-select-wrap .pcfactory-select-selection-item{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-checkbox+span{
      color: textColor;
      font-size: fontSize;
    }
    .ued-stdupload-wrap .pcfactory-upload.pcfactory-upload-select.pcfactory-upload-select-text button{
      height: auto;
    }
    .ued-cascader-wrap .pcfactory-select-selection-item{
      color: textColor;
      font-size: fontSize;
    }
    .ued-treeSelect-wrap .pcfactory-select-selection-item{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-picker-input > input{
      color: textColor;
      font-size: fontSize;
    }
    .pcfactory-picker{
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
    .pcfactory-select:not(.pcfactory-select-customize-input) .pcfactory-select-selector{
      border-color: itemBorderColor;
      border-radius: itemBorderRadius;
      height: auto;
      min-height: 32px;
    }
    .pcfactory-select-single .pcfactory-select-selector .pcfactory-select-selection-item, .pcfactory-select-single .pcfactory-select-selector .pcfactory-select-selection-placeholder{
      line-height: 2;
      font-size: fontSize;
    }
    .pcfactory-select-multiple .pcfactory-select-selection-placeholder{
      font-size: fontSize;
    }
    .ued-rateContainer .pcfactory-rate{
      font-size: fontSize;
    }
    .ued-rateContainer-rateText{
      color: textColor;
      font-size: fontSize;
    }
    `,
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
          id: 'Input_3203017',
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
            fieldName: 'wd',
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
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'InputNumber_988055',
          label: '数字输入框',
          compName: 'InputNumber',
          type: 'InputNumber',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '数字输入框',
            basicStatus: 1,
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            step: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            min: 0,
            formatting: '',
            formItemIndex: 1,
            fieldName: 'vcd',
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
          icon: 'InputNumber',
          description: '',
          image: '',
          groupsName: '数据录入',
          engineApi: ['sandBoxSafeRun'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'Password_218584',
          label: '密码框',
          compName: 'Password',
          type: 'Password',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '密码框',
            labelCol: 8,
            wrapperCol: 16,
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            allowClear: true,
            formItemIndex: 2,
            fieldName: 'cvdsd',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'Password',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
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
        {
          id: 'CheckboxGroup_095205',
          label: '复选组',
          compName: 'CheckboxGroup',
          type: 'CheckboxGroup',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '复选组',
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            checkAllText: '全部',
            selfSpan: '',
            labelCol: 8,
            wrapperCol: 16,
            formItemIndex: 4,
            fieldName: 'savcrd',
            tipPlacement: 'top',
            tipIcon: {
              theme: 'outlined',
              type: 'question-circle',
            },
            tipLocation: 'after',
            checkedAll: true,
            staticData: {
              data: [
                {
                  id: '149486',
                  label: '属性名',
                  value: 'dsf',
                },
                {
                  id: '0516294',
                  label: '属性名22',
                  value: 'sdds',
                },
              ],
              type: 'custom',
            },
            options: [
              {
                id: '149486',
                label: '属性名',
                value: 'dsf',
              },
              {
                id: '0516294',
                label: '属性名22',
                value: 'sdds',
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
          icon: 'CheckboxGroup',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
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
        {
          id: 'MultipleSelect_628082',
          label: '下拉多选框',
          compName: 'MultipleSelect',
          type: 'MultipleSelect',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '下拉多选框',
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
            placeholder: '请选择',
            mode: 'multiple',
            allowClear: true,
            formItemIndex: 0,
            staticData: {
              data: [
                {
                  id: '767594',
                  label: '属性名1',
                  value: '1',
                },
                {
                  id: '15609',
                  label: '属性名2',
                  value: '2',
                },
              ],
              type: 'custom',
            },
            options: [
              {
                id: '767594',
                label: '属性名1',
                value: '1',
              },
              {
                id: '15609',
                label: '属性名2',
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
          icon: 'MultipleSelect',
          description: '',
          image: '',
          groupsName: '数据录入',
          engineApi: ['sandBoxSafeRun'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
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
        {
          id: 'TreeSelect_357899',
          label: '树选择',
          compName: 'TreeSelect',
          type: 'TreeSelect',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '树选择',
            filter: 'local',
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            selfSpan: '',
            labelCol: 8,
            wrapperCol: 16,
            treeDefaultExpandAll: true,
            size: 'default',
            showSearch: false,
            treeNodeFilterProp: 'title',
            treeData: [
              {
                title: '标题1',
                key: '982968',
                $$isParent: true,
                selectable: true,
                children: [
                  {
                    title: '副标题1',
                    key: '223275',
                    selectable: true,
                    children: [],
                    value: '223275',
                  },
                  {
                    title: '副标题2',
                    key: '6154336',
                    selectable: true,
                    value: '6154336',
                  },
                ],
                value: '982968',
              },
              {
                title: '标题2',
                key: '589191',
                $$isParent: true,
                selectable: true,
                children: [
                  {
                    title: '副标题21',
                    key: '974854',
                    selectable: true,
                    value: '974854',
                  },
                  {
                    title: '副标题22',
                    key: '555559',
                    selectable: true,
                    value: '555559',
                  },
                ],
                value: '589191',
              },
            ],
            allowClear: true,
            formItemIndex: 0,
            fieldName: '32',
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
          engineApi: ['service.commonFetch'],
          icon: 'TreeSelect',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'Cascader_347221',
          label: '级联选择',
          compName: 'Cascader',
          type: 'Cascader',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '级联选择',
            basicStatus: 1,
            multiple: '1',
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            selfSpan: '',
            labelCol: 8,
            wrapperCol: 16,
            size: 'default',
            expandTrigger: 'click',
            popupPlacement: 'bottomLeft',
            options: [
              {
                label: '标题1',
                key: '4030963',
                $$isParent: true,
                title: '标题1',
                children: [
                  {
                    label: '副标题1',
                    key: '933413',
                    title: '副标题1',
                    children: [
                      {
                        label: '正文1',
                        key: '800723',
                        title: '正文1',
                        value: '800723',
                      },
                    ],
                    value: '933413',
                  },
                ],
                value: '4030963',
              },
              {
                label: '标题2',
                key: '835883',
                $$isParent: true,
                title: '标题2',
                children: [
                  {
                    label: '副标题21',
                    key: '917029',
                    title: '副标题21',
                    children: [
                      {
                        label: '正文21',
                        key: '03438',
                        title: '正文21',
                        value: '03438',
                      },
                    ],
                    value: '917029',
                  },
                  {
                    label: '副标题22',
                    key: '508799',
                    title: '副标题22',
                    children: [
                      {
                        label: '正文22',
                        key: '82403476',
                        title: '正文22',
                        value: '82403476',
                      },
                    ],
                    value: '508799',
                  },
                ],
                value: '835883',
              },
            ],
            popoverStyle: 'default',
            showSearch: false,
            allowClear: true,
            formItemIndex: 0,
            fieldName: 'ddf',
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
          icon: 'Cascader',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_578466'],
        },
        {
          id: 'Slider_896933',
          label: '滑动输入条',
          compName: 'Slider',
          type: 'Slider',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '滑动输入条',
            range: false,
            defaultValue: 0,
            basicStatus: 1,
            labelCol: 8,
            wrapperCol: 16,
            included: true,
            direction: 'normal',
            showInput: false,
            showLabel: true,
            labelPlacement: 'top',
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            min: 0,
            max: 100,
            step: 1,
            formItemIndex: 8,
            fieldName: 'fgdf',
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
          icon: 'Slider',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'Rate_846193',
          label: '评分',
          compName: 'Rate',
          type: 'Rate',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '评分',
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            count: 5,
            value: 3,
            tooltips: [1, 2, 3, 4, 5],
            allowClear: true,
            formItemIndex: 9,
            fieldName: 'zxc',
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
          icon: 'Rate',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [
            {
              dataName: 'event',
              dataId: '605659',
              path: [],
              value: 'onChange',
              params: [
                {
                  title: '评分控件取值',
                  name: 'e',
                  value: '$e$',
                },
              ],
              children: [],
            },
          ],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'Switch_088117',
          label: '开关',
          compName: 'Switch',
          type: 'Switch',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '开关',
            size: 'default',
            labelCol: 8,
            wrapperCol: 16,
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            switchStyle: 'none',
            checkedChildren: '开启',
            unCheckedChildren: '关闭',
            checkedChildrenIcon: {
              type: 'check',
              theme: 'outlined',
              isIconFont: false,
            },
            unCheckedChildrenIcon: {
              type: 'close',
              theme: 'outlined',
              isIconFont: false,
            },
            required: false,
            defaultChecked: false,
            formItemIndex: 10,
            fieldName: 'vxc',
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
          icon: 'Switch',
          description: '',
          image: '',
          groupsName: '数据录入',
          isInlineBlock: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'StdUpload_517167',
          label: '文件上传',
          compName: 'StdUpload',
          type: 'StdUpload',
          compType: 2,
          compLib: 'antd',
          props: {
            name: '文件上传',
            basicStatus: 1,
            uploadStyle: 'click',
            listType: 'text',
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            viewMode: 'popUp',
            fileNameEncode: false,
            isWatermark: false,
            optionalFile: false,
            fileName: 'file',
            selfSpan: '',
            labelCol: 8,
            wrapperCol: 16,
            numberLimit: 5,
            singleFileMaxSize: 50,
            uploadText: '点击上传',
            uploadTimeout: 30000,
            value: [
              {
                fileId: '1',
                fileName: 'xxx.png',
                status: 'done',
              },
              {
                fileId: '2',
                fileName: 'yyy.png',
                status: 'done',
              },
              {
                fileId: '3',
                fileName: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
              },
            ],
            deleteIcon: {
              deleteIconTheme: 'outlined',
              deleteIconType: 'delete',
              deleteIconIsIconFont: false,
              showRemoveIcon: true,
            },
            downloadIcon: {
              downloadIconTheme: 'outlined',
              downloadIconType: 'download',
              downloadIconIsIconFont: false,
              showDownloadIcon: true,
            },
            previewIcon: {
              previewIconTheme: 'outlined',
              previewIconType: 'eye',
              previewIconIsIconFont: false,
              showPreviewIcon: true,
            },
            modalWidth: 960,
            modalHeight: 648,
            formItemIndex: 11,
            fieldName: 'xvf',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'StdUpload',
          description: '',
          image: '',
          groupsName: '数据录入',
          engineApi: [
            'BannerModal',
            'service.uploadSingleFile',
            'service.downloadByFileId',
            'resolveApiPath',
          ],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
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
        {
          id: 'TimePicker_274966',
          label: '时间选择',
          compName: 'TimePicker',
          type: 'TimePicker',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '时间选择',
            basicStatus: 1,
            size: 'default',
            selfSpan: '',
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
            format: 'YYYY-MM-DD HH:mm:ss',
            timeMode: 'time',
            pickerType: 'TimePicker',
            placeholder: '请选择时间',
            customTip: '',
            allowClear: true,
            formItemIndex: 14,
            fieldName: 'rdsx',
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
          icon: 'TimePicker',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'TextArea_78428606',
          label: '多行输入',
          compName: 'TextArea',
          type: 'TextArea',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '多行输入',
            labelCol: 8,
            wrapperCol: 16,
            basicStatus: 1,
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            required: false,
            placeholder: '请输入',
            allowClear: true,
            formItemIndex: 15,
            fieldName: 'fdec',
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
          icon: 'TextArea',
          description: '',
          image: '',
          groupsName: '数据录入',
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
        {
          id: 'VerificationCode_6637723',
          label: '验证码',
          compName: 'VerificationCode',
          type: 'VerificationCode',
          compType: 2,
          compLib: 'comm',
          props: {
            name: '验证码',
            placeholderText: '请输入验证码',
            displayStyle: 'countdownStyle',
            countdownTime: 60,
            random: false,
            digit: 4,
            formItemIndex: 16,
            labelCol: 8,
            wrapperCol: 16,
            fieldName: 'asdcx',
          },
          style: {
            borderSetting: 'border 1px solid #E5E5E5',
            border: '1px solid #E5E5E5',
            borderRadius: '4px 4px 4px 4px',
            fontSize: '14',
            color: '#4477EE',
            backgroundColor: '#ffffff',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'value',
          },
          icon: 'VerificationCode',
          description: '',
          image: '',
          groupsName: '数据录入',
          engineApi: ['getValidateCodePicture'],
          setEvents: [
            {
              dataName: 'event',
              value: 'onChange',
              params: [
                {
                  title: '事件对象',
                  name: 'e',
                  value: '$e$',
                },
              ],
              path: [],
              dataId: '4056877',
              children: [],
            },
          ],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Form_180373'],
        },
      ],
      path: ['998509'],
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
        height: '250px',
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
