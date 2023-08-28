export const DformSwitch = {
  type: 'DformSwitch',
  variable: {
    openColor: {
      type: 'color',
      label: '开启颜色',
      groupsName: '文字',
    },
    closeColor: {
      type: 'color',
      label: '关闭颜色',
      groupsName: '文字',
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
    paddingValue: {
      type: 'marginInput',
      label: '内边距',
      groupsName: '组件',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'DForm',
    },
  },
  groupsName: '表单',
  icon: 'icon-ico-comp-app-DformSwitch',
  title: '滑动开关',
  defaultValue: [
    {
      openColor: '#108ee9',
      closeColor: '#ddd',
    },
  ],
  tpl: `
    .adm-switch.adm-switch-checked .adm-switch-checkbox{
      background: openColor;
    }
    .lingxiteam-dform-switch .adm-switch-checkbox{
      background: closeColor;
    }
    .lingxiteam-dform-switch .adm-switch-checkbox::before{
      background: closeColor;
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
          id: 'DformSwitch_782373',
          label: '滑动开关',
          compName: 'DformSwitch',
          type: 'DformSwitch',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '开关',
            openText: '开启',
            closeText: '关闭',
            openIcon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'check',
            },
            closeIcon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'close',
            },
            dformType: 'DformSwitch',
            title: '开关',
            placeholder: '请选择',
            defaultValue: false,
            status: '1',
            switchType: 'normal',
            fieldProps: 'qweds',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
      ],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
