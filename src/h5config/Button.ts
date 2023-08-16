export const Button = {
  type: 'Button',
  variable: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
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
  icon: 'Button',
  title: '按钮',
  defaultValue: [
    {
      textColor: '#1c242e',
      lineHeight: '0px',
      fontSize: '14px',
      backgroundColor: '#108ee9',
      borderColor: '#108ee9',
      borderRadius: '8px',
      paddingValue: '4px 24px 4px 24px',
      marginValue: '0px',
    },
  ],
  tpl: `
  .adm-button:not(.adm-button-default){
    --text-color: textColor;
    --background-color: backgroundColor;
    --border-color: borderColor;
  }
  .adm-button {
    line-height: lineHeight;
    font-size: fontSize;
    border-radius: borderRadius;
    padding: paddingValue;
    margin: marginValue;
      }
    `,
  components: [
    {
      id: 'Button_38958643',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '按钮',
        btnIcon: false,
        type: 'primary',
        size: 'large',
        loading: false,
        mImagePostion: 'left',
        shape: 'default',
        status: '1',
        children: '按钮',
      },
      style: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 400,
        height: '48px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      description: '',
      image: '',
      groupsName: '基础',
      transform: {
        value: 'children',
      },
      engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
      icon: 'Button',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
    },
  ],
};
