export const Button = {
  type: 'Button',
  variable: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' ,  desc: '按钮高度不会随着文字大小变化，因为按钮有4种大小规格', },
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    paddingValue: { type: 'marginInput', label: '内边距', groupsName: '布局' },
    marginValue: { type: 'marginInput', label: '外边距', groupsName: '布局' },
  },
  groupsName: '通用',
  icon: 'icon-ico-comp-btn',
  title: '按钮',
  defaultValue: [
    {
      textColor: '#1c242e',
      lineHeight: '0px',
      fontSize: '14px',
      backgroundColor: '#47e',
      borderColor: '#D8E0EC',
      borderRadius: '8px',
      paddingValue: '4px 24px 4px 24px',
      marginValue: '0px',
    },
  ],
  tpl: `
.ued-button-wrap.pcfactory-btn {
      line-height: lineHeight;
      font-size: fontSize;
      padding: paddingValue;
      margin: marginValue;
    }
.ued-button-wrap.pcfactory-btn-primary {
      background-color: backgroundColor;
      border-color: borderColor;
      border-radius: borderRadius;
    }
.ued-button-wrap.pcfactory-btn-default {
      color: textColor;
      border-color: borderColor;
      border-radius: borderRadius;
    }
.ued-button-wrap.pcfactory-btn-dashed {
      color: textColor;
      border-color: borderColor;
      border-radius: borderRadius;
    }
.ued-button-wrap.pcfactory-btn.pcfactory-btn-dashed:hover {
      border-color: backgroundColor;
      color: backgroundColor;
    }
.ued-button-wrap.pcfactory-btn.pcfactory-btn-default:hover {
      border-color: backgroundColor;
      color: backgroundColor;
  }
.ued-button-wrap.pcfactory-btn-text {
      color: textColor;
    }
.ued-button-wrap.pcfactory-btn-link {
      color: backgroundColor;
    }
  `,
  components: [
    {
      id: 'Button_1229334',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: 'comm',
      props: {
        name: '按钮',
        basicStatus: 1,
        classification: 'default',
        autoProcessFlow: false,
        flowProcessResult: 'common',
        iconPosition: 'left',
        ghost: false,
        block: false,
        size: 'default',
        disabled: false,
        type: 'primary',
        btnIcon: 'none',
        hasIcon: false,
        shape: 'default',
        loading: false,
        btnText: '按钮',
      },
      style: {
        textAlign: 'center',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Button',
      description: '',
      image: '',
      groupsName: '通用',
      isInlineBlock: true,
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['761872', 'View_761872_1'],
    },
    {
      id: 'Button_526504',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: 'comm',
      props: {
        name: '按钮',
        basicStatus: 1,
        classification: 'default',
        autoProcessFlow: false,
        flowProcessResult: 'common',
        iconPosition: 'left',
        ghost: false,
        block: false,
        size: 'default',
        disabled: false,
        type: 'default',
        btnIcon: 'none',
        hasIcon: false,
        shape: 'default',
        loading: false,
        btnText: '按钮',
      },
      style: {
        textAlign: 'center',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Button',
      description: '',
      image: '',
      groupsName: '通用',
      isInlineBlock: true,
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['761872', 'View_761872_1'],
    },
    {
      id: 'Button_2208062',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: 'comm',
      props: {
        name: '按钮',
        basicStatus: 1,
        classification: 'default',
        autoProcessFlow: false,
        flowProcessResult: 'common',
        iconPosition: 'left',
        ghost: false,
        block: false,
        size: 'default',
        disabled: false,
        type: 'dashed',
        btnIcon: 'none',
        hasIcon: false,
        shape: 'default',
        loading: false,
        btnText: '按钮',
      },
      style: {
        textAlign: 'center',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Button',
      description: '',
      image: '',
      groupsName: '通用',
      isInlineBlock: true,
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['761872', 'View_761872_1'],
    },
    {
      id: 'Button_692544',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: 'comm',
      props: {
        name: '按钮',
        basicStatus: 1,
        classification: 'default',
        autoProcessFlow: false,
        flowProcessResult: 'common',
        iconPosition: 'left',
        ghost: false,
        block: false,
        size: 'default',
        disabled: false,
        type: 'text',
        btnIcon: 'none',
        hasIcon: false,
        shape: 'default',
        loading: false,
        btnText: '按钮',
      },
      style: {
        textAlign: 'center',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Button',
      description: '',
      image: '',
      groupsName: '通用',
      isInlineBlock: true,
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['761872', 'View_761872_1'],
    },
    {
      id: 'Button_111416',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: 'comm',
      props: {
        name: '按钮',
        basicStatus: 1,
        classification: 'default',
        autoProcessFlow: false,
        flowProcessResult: 'common',
        iconPosition: 'left',
        ghost: false,
        block: false,
        size: 'default',
        disabled: false,
        type: 'link',
        btnIcon: 'none',
        hasIcon: false,
        shape: 'default',
        loading: false,
        btnText: '按钮',
      },
      style: {
        textAlign: 'center',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Button',
      description: '',
      image: '',
      groupsName: '通用',
      isInlineBlock: true,
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['761872', 'View_761872_1'],
    },
  ],
};
