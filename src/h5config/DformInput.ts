export const DformInput = {
  type: 'DformInput',
  variable: {
    inputBgColor: {
      type: 'color',
      label: '内容背景颜色',
      groupsName: '背景颜色',
    },
    inputBorderRadius: {
      type: 'px',
      label: '内容背景圆角',
      groupsName: '边框',
    },
    labelTextColor: {
      type: 'color',
      label: '标签文本颜色',
      groupsName: '标签',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    labelLineHeight: {
      type: 'px',
      label: '标签文本行高',
      groupsName: '标签',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    labelFontSize: {
      type: 'px',
      label: '标签文本尺寸',
      groupsName: '标签',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    labelFontWeight: {
      type: 'select',
      label: '标签文本字重',
      groupsName: '标签',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    textColor: {
      type: 'color',
      label: '文本颜色',
      groupsName: '组件',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    fontSize: {
      type: 'px',
      label: '文本尺寸',
      groupsName: '组件',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    lineHeight: {
      type: 'px',
      label: '文本行高',
      groupsName: '组件',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    fontWeight: {
      type: 'select',
      label: '文本字重',
      groupsName: '组件',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    paddingValue: {
      type: 'marginInput',
      label: '内边距',
      groupsName: '组件',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
    headTextAlign: {
      type: 'select',
      label: '文字对齐方式',
      groupsName: '组件',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
      options: [
        { title: 'left', value: 'left' },
        { title: 'center', value: 'center' },
        { title: 'right', value: 'right' },
      ],
    },
  },
  groupsName: '表单',
  icon: 'icon-ico-comp-app-DformInput',
  title: '单行输入',
  defaultValue: [
    {
      inputBgColor: 'rgba(0,0,0,0)',
      inputBorderRadius: '0px',
    },
  ],
  tpl: `
  .lingxiteam-dform-input-item-value {
    background-color: inputBgColor;
    border-radius: inputBorderRadius;
  }`,
  components: [
    {
      id: 'DForm_333712',
      label: '表单',
      compName: 'DForm',
      type: 'DForm',
      compType: 2,
      compLib: '@/components',
      props: {
        name: '表单',
        formCode: 'DForm_333712',
        autoLineFeed: true,
        failScroll: true,
        errorFlag: true,
        hiddenBorder: '0',
        itemHasStar: true,
      },
      style: {
        width: 'auto',
      },
      isContainer: true,
      isBusiObjContainer: true,
      cmdgroup: ['basic'],
      platform: 'h5',
      setEvents: [],
      description: '',
      image: '',
      groupsName: '容器',
      icon: 'DForm',
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'DformInput_175175',
          label: '单行输入',
          compName: 'DformInput',
          type: 'DformInput',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '单行输入',
            postfix: '',
            postfixIconPosition: 'before',
            dformType: 'DformInput',
            title: '标题',
            placeholder: '请输入',
            clear: true,
            positionType: 'horizontal',
            status: '1',
            inputType: 'text',
            fieldProps: 'fcd',
          },
          style: {
            inputContent: '1',
            inputBorderRadius: '4px 4px 4px 4px',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          isAppChildForm: true,
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_333712'],
        },
      ],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
