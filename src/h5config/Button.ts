export const Button = {
  type: 'Button',
  variable: {
    textColor: { type: 'color', label: '文本颜色', groupsName: '文字' },
    lineHeight: { type: 'px', label: '文本行高', groupsName: '文字' },
    fontSize: { type: 'px', label: '文本尺寸', groupsName: '文字' },
    backgroundColor: {
      type: 'color',
      label: '主题颜色',
      groupsName: '颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
    paddingValue: { type: 'marginInput', label: '内边距', groupsName: '布局' },
    marginValue: { type: 'marginInput', label: '外边距', groupsName: '布局' },
  },
  groupsName: '通用',
  icon: 'icon-ico-comp-app-Button',
  title: '按钮',
  defaultValue: [
    {
      textColor: '#1c242e',
      lineHeight: '140%',
      fontSize: '18px',
      backgroundColor: '#108ee9',
      borderColor: '#E5E5E5',
      borderRadius: '4px',
      paddingValue: '7px 12px 7px 12px',
      marginValue: '0px',
    },
  ],
  tpl: `
  .adm-button{
    --border-color: borderColor;
    color: textColor;
    line-height: lineHeight;
    font-size: fontSize;
    border-radius: borderRadius;
    padding: paddingValue;
    margin: marginValue;
  }
  .adm-button.adm-button-large{
    font-size: fontSize;
    padding: paddingValue;
    margin: marginValue;
  }
  .adm-button:not(.adm-button-default){
    color: #fff;
  }
  .adm-button-primary{
    --color: backgroundColor;
  }
  .lcdp-button-type-link{
    color: backgroundColor;
  }
    `,
  components: [
    {
      id: 'Button_5647878',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '按钮',
        btnIcon: 'none',
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
      path: ['769713', 'View_769713_1'],
    },
    {
      id: 'Button_404175',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '按钮',
        btnIcon: false,
        type: 'default',
        size: 'large',
        loading: false,
        mImagePostion: 'left',
        shape: 'default',
        status: '1',
        children: '按钮',
      },
      style: {
        textAlign: 'center',
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
      path: ['769713', 'View_769713_1'],
    },
    {
      id: 'Button_9353077',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '按钮',
        btnIcon: false,
        type: 'dashed',
        size: 'large',
        loading: false,
        mImagePostion: 'left',
        shape: 'default',
        status: '1',
        children: '按钮',
      },
      style: {
        textAlign: 'center',
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
      path: ['769713', 'View_769713_1'],
    },
    {
      id: 'Button_764117',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '按钮',
        btnIcon: false,
        type: 'text',
        size: 'large',
        loading: false,
        mImagePostion: 'left',
        shape: 'default',
        status: '1',
        children: '按钮',
      },
      style: {
        textAlign: 'center',
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
      path: ['769713', 'View_769713_1'],
    },
    {
      id: 'Button_637341',
      label: '按钮',
      compName: 'Button',
      type: 'Button',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '按钮',
        btnIcon: false,
        type: 'link',
        size: 'large',
        loading: false,
        mImagePostion: 'left',
        shape: 'default',
        status: '1',
        children: '按钮',
      },
      style: {
        textAlign: 'center',
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
      path: ['769713', 'View_769713_1'],
    },
  ],
};
