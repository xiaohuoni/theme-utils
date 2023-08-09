export const Form = {
  type: 'Form',
  var: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '边框',
      canEdit: false,
      extends: 'Container',
      desc: '继承自容器，此处不可编辑',
    },
    borderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
      canEdit: false,
      extends: 'Container',
      desc: '继承自容器，此处不可编辑',
    },
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
      label: '边框颜色',
      groupsName: '边框',
      desc: '对所有[数据录入]类型组件生效',
    },
    itemBorderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
      desc: '对所有[数据录入]类型组件生效',
    },
  },
  groupsName: '容器',
  icon: 'Form',
  title: '表单',
  default: [
    {
      backgroundColor: '#fff',
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
    .pcfactory-legacy-form-vertical .pcfactory-legacy-form-item-label > label, .pcfactory-col-24.pcfactory-legacy-form-item-label > label, .pcfactory-col-xl-24.pcfactory-legacy-form-item-label > label{
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
};
