export const TreeSelect = {
  type: 'TreeSelect',
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
    itemBorderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '边框',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    itemBorderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
      desc: '继承自表单，此处不可编辑',
      canEdit: false,
      extendsKey: 'Form',
    },
    iconFontSize: {
      type: 'px',
      label: '下拉图标尺寸',
      groupsName: '文字',
      desc: '请根据实际【文本尺寸】调整，不宜与【文本尺寸】大小差异过大',
    },
    iconColor: {
      type: 'color',
      label: '下拉图标颜色',
      groupsName: '文字',
    },
    iconTop: {
      type: 'px',
      label: '下拉图标距离顶部',
      groupsName: '文字',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-treeSelect',
  title: '树选择',
  defaultValue: [
    {
      iconFontSize: '12px',
      iconColor: 'rgba(28,36,46,.25)',
      iconTop: '16px',
    },
  ],
  tpl: `.ued-treeSelect-wrap .pcfactory-select-arrow{
      color: iconColor;
      width: iconFontSize;
      height: iconFontSize;
      top: iconTop;
      .anticon>svg{
        width: iconFontSize;
        height: iconFontSize;
      }
    }
    .ued-treeSelect-wrap .pcfactory-select-clear{
      color: iconColor;
      width: iconFontSize;
      height: iconFontSize;
      top: iconTop;
      .anticon>svg{
        width: iconFontSize;
        height: iconFontSize;
      }
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
      ],
      path: ['998509'],
    },
  ],
};
