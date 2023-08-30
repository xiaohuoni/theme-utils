export const DCheckbox = {
  type: 'DCheckbox',
  variable: {
    selectBgColor: {
      type: 'color',
      label: '选中背景颜色',
      groupsName: '背景颜色',
    },
    selectBorderRadius: {
      type: 'color',
      label: '选中边框颜色',
      groupsName: '边框',
    },
    itemBgColor: {
      type: 'color',
      label: '默认背景颜色',
      groupsName: '背景颜色',
    },
    itemBorderRadius: {
      type: 'color',
      label: '默认边框颜色',
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
  icon: 'icon-ico-comp-app-DCheckbox',
  title: '复选框',
  defaultValue: [
    {
      selectBorderRadius: '#108ee9',
      selectBgColor: '#108ee9',
      itemBorderRadius: '#e5e5e5',
      itemBgColor: 'rgba(0,0,0,0)',
    },
  ],
  tpl: `
    .lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-botton{
      background-color: itemBgColor;
      border-color: itemBorderRadius;
    }
     .lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-botton-selectAll-circular{
      background-color: itemBgColor;
      border-color: itemBorderRadius;
    }
     .lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-botton-selectAll-square{
      background-color: itemBgColor;
      border-color: itemBorderRadius;
    }
    .lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-botton-checked{
      background-color: selectBgColor;
      border-color: selectBorderRadius;
    }
     .lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-botton-selectAll-checked{
      background-color: selectBgColor;
      border-color: selectBorderRadius;
    }
     .lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-botton-selectAll-half-checked{
      background-color: selectBgColor;
      border-color: selectBorderRadius;
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
          id: 'DCheckbox_28916',
          label: '复选框',
          compName: 'DCheckbox',
          type: 'DCheckbox',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '复选框',
            positionType: 'vertical',
            titleIcon: 'none',
            itemType: 'square',
            chunk: 1,
            canSelectAll: false,
            title: '标题',
            dformType: 'DCheckbox',
            status: '1',
            options: [
              {
                label: '选项1',
                value: 'options1',
                id: 'options1',
              },
              {
                label: '选项2',
                value: 'options2',
                id: 'options2',
              },
            ],
            fieldProps: 'qwe',
          },
          style: {
            lineHeight: '24px',
          },
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
