export const Cascader = {
  type: 'Cascader',
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
    iconTop: {
      type: 'px',
      label: '下拉图标距离顶部',
      groupsName: '文字',
    },
    iconColor: {
      type: 'color',
      label: '下拉图标颜色',
      groupsName: '文字',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-cascader',
  title: '级联选择',
  defaultValue: [
    {
      iconFontSize: '12px',
      iconTop: '16px',
      iconColor: 'rgba(28,36,46,.25)',
    },
  ],
  tpl: `.ued-cascader-wrap .pcfactory-select-arrow{
      color: iconColor;
      width: iconFontSize;
      height: iconFontSize;
      top: iconTop;
      .anticon>svg{
        width: iconFontSize;
        height: iconFontSize;
      }
    }
    .ued-cascader-wrap .pcfactory-select-clear{
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
      ],
      path: ['998509'],
    },
  ],
};
