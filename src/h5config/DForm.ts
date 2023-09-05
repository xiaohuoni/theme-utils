export const DForm = {
  type: 'DForm',
  variable: {
    backgroundColor: {
      type: 'color',
      label: '背景颜色',
      groupsName: '背景颜色',
    },
    labelTextColor: {
      type: 'color',
      label: '标签文本颜色',
      groupsName: '标签',
      desc: '对所有[表单]类型组件生效',
    },
    labelLineHeight: {
      type: 'px',
      label: '标签文本行高',
      groupsName: '标签',
      desc: '对所有[表单]类型组件生效',
    },
    labelFontSize: {
      type: 'px',
      label: '标签文本尺寸',
      groupsName: '标签',
      desc: '对所有[表单]类型组件生效',
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
      desc: '对所有[表单]类型组件生效',
    },
    textColor: {
      type: 'color',
      label: '文本颜色',
      groupsName: '组件',
      desc: '对所有[表单]类型组件生效',
    },
    fontSize: {
      type: 'px',
      label: '文本尺寸',
      groupsName: '组件',
      desc: '对所有[表单]类型组件生效',
    },
    lineHeight: {
      type: 'px',
      label: '文本行高',
      groupsName: '组件',
      desc: '对所有[表单]类型组件生效',
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
      desc: '对所有[表单]类型组件生效',
    },
    iconColor: {
      type: 'color',
      label: '后缀图标颜色',
      groupsName: '图标',
      desc: '对所有[选项类][表单]类型组件生效',
    },
    iconSize: {
      type: 'px',
      label: '后缀图标尺寸',
      groupsName: '图标',
      desc: '对所有[选项类][表单]类型组件生效',
    },
    // itemBorderColor: {
    //   type: 'color',
    //   label: '组件边框颜色',
    //   groupsName: '组件',
    //   desc: '对所有[表单]类型组件生效',
    // },
    // itemBorderRadius: {
    //   type: 'px',
    //   label: '组件边框圆角',
    //   groupsName: '组件',
    //   desc: '对所有[表单]类型组件生效',
    // },
    paddingValue: {
      type: 'marginInput',
      label: '内边距',
      groupsName: '组件',
      desc: '对所有[表单]类型组件生效',
    },
    headTextAlign: {
      type: 'select',
      label: '文字对齐方式',
      groupsName: '组件',
      desc: '对所有[表单]类型组件生效',
      options: [
        { title: 'left', value: 'left' },
        { title: 'center', value: 'center' },
        { title: 'right', value: 'right' },
      ],
    },
  },
  groupsName: '容器',
  icon: 'icon-ico-comp-app-DForm',
  title: '表单',
  defaultValue: [
    {
      backgroundColor: 'rgba(0,0,0,0)',
      labelTextColor: '#1C242E',
      labelLineHeight: '100%',
      labelFontSize: '16px',
      labelFontWeight: '400',
      textColor: '#1C242E',
      fontSize: '16px',
      lineHeight: '100%',
      fontWeight: '400',
      paddingValue: '0',
      headTextAlign: 'right',
      iconColor: 'rgba(0, 0, 0, 0.45)',
      iconSize: '16px',
    },
  ],
  tpl: `
  .dynamic-form-wrapper{
    background-color: backgroundColor;
    --color: textColor;
    --font-size: fontSize;
  }
  .adm-text-area{
    --color: textColor;
    --font-size: fontSize;
  }
  .lingxiteam-dform-title {
    color: labelTextColor;
    font-size: labelFontSize !important;
    line-height: labelLineHeight;
    font-weight: labelFontWeight;
    text-align: headTextAlign;
}
.lingxiteam-dform-input-item-value input{
  color: textColor;
  line-height: lineHeight;
  font-weight: fontWeight;
    padding: paddingValue;
    text-align: headTextAlign;
    font-size: fontSize;
}

.lingxiteam-dform-radio-label{
  color: textColor;
  line-height: lineHeight;
  font-weight: fontWeight;
    padding: paddingValue;
    text-align: headTextAlign;
    font-size: fontSize;

}
.lingxiteam-dform-check-box .lingxiteam-dform-box-content .lingxiteam-dform-box-wrapper .lingxiteam-dform-box-label{
  color: textColor;
  line-height: lineHeight;
  font-weight: fontWeight;
    text-align: headTextAlign;
    font-size: fontSize;

}
.lingxiteam-dform-text-item-content .lingxiteam-dform-text-item-text{
  color: textColor;
  line-height: lineHeight;
  font-size: fontSize;
    text-align: headTextAlign;
    padding: paddingValue;
    font-weight: fontWeight;
}
.lingxiteam-dform-text-item-content .lingxiteam-dform-text-item-date-text{
  color: textColor;
  line-height: lineHeight;
  font-size: fontSize;
    text-align: headTextAlign;
    padding: paddingValue;
    font-weight: fontWeight;
}
.lingxiteam-dform-rangdate-h-value{
  color: textColor;
  line-height: lineHeight;
    text-align: headTextAlign;
    font-size: fontSize;
    padding: paddingValue;
    font-weight: fontWeight;
}
.lingxiteam-dform-area-group-value-area textarea{
  line-height: lineHeight;
    padding: paddingValue;
    font-weight: fontWeight;
    font-size: fontSize;
    color: textColor;
    text-align: headTextAlign;

}
.cust-icon{
  width: iconSize;
  height: iconSize;
}
.cust-icon svg{
  color: iconColor;
  fill: iconColor;
  width: iconSize;
  height: iconSize;
}
.lingxiteam-dform-right-content{
  width: iconSize;
  height: iconSize;
  overflow: hidden;
}
.lingxiteam-dform-arrow-horizontal{
  background-image: none;
  width: iconSize;
  height: iconSize;
  position: relative;
}
.lingxiteam-dform-arrow-horizontal::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: iconSize;
  height: iconSize;
background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2226%22%20viewBox%3D%220%200%2016%2026%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20id%3D%22UI-KIT_%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%229.9%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20transform%3D%22translate%28-5809.000000%2C%20-8482.000000%29%22%20fill%3D%22%23C7C7CC%22%3E%3Cpolygon%20id%3D%22Disclosure-Indicator%22%20points%3D%225811%208482%205809%208484%205820.5%208495%205809%208506%205811%208508%205825%208495%22%3E%3C%2Fpolygon%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
background-repeat: round;
transform: translateX(-100%);
background-size: 100%;
  filter: drop-shadow(iconSize 0 iconColor);
}`,
  components: [
    {
      id: 'DForm_458695',
      label: '表单',
      compName: 'DForm',
      type: 'DForm',
      compType: 2,
      compLib: '@/components',
      props: {
        name: '表单',
        formCode: 'DForm_458695',
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
          id: 'DformTextArea_01195293',
          label: '多行输入',
          compName: 'DformTextArea',
          type: 'DformTextArea',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '多行输入',
            rows: 3,
            dformType: 'DformTextArea',
            title: '多行输入',
            placeholder: '请输入',
            positionType: 'horizontal',
            status: '1',
            fieldProps: 'wdwq',
          },
          style: {
            inputContent: '1',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
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
        {
          id: 'DformImagePicker_781976',
          label: '上传图片',
          compName: 'DformImagePicker',
          type: 'DformImagePicker',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '上传图片',
            length: 4,
            limitSize: '10MB',
            isFilespreview: true,
            selectable: true,
            disableDelete: true,
            titleIcon: 'none',
            uploadType: 'fileType',
            dformType: 'DformImagePicker',
            title: '上传图片',
            maxLength: 5,
            status: '1',
            capture: 'system',
            fieldProps: 'wed',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          engineApi: [
            'downloadByFileId',
            'downloadFileByFileCode',
            'downFieldPrefix',
            'http',
            'getMaterialFile',
          ],
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_333712'],
        },
        {
          id: 'DformFile_7403176',
          label: '上传附件',
          compName: 'DformFile',
          type: 'DformFile',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '上传附件',
            hasTitleIcon: 'none',
            listStyle: 'text',
            isWatermark: false,
            dformType: 'DformFile',
            title: '上传附件',
            placeholder: '请输入',
            positionType: 'vertical',
            status: '1',
            filesDownloaded: false,
            alias: {
              title: 'fileName',
              id: 'fileId',
            },
            deleteBtn: {
              btnText: '删除',
              checked: true,
              icon: {
                type: 'close',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
            },
            downloadBtn: {
              btnText: '下载',
              checked: true,
              icon: {
                type: 'download',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
            },
            previewBtn: {
              btnText: '预览',
              checked: true,
              icon: {
                type: 'eye',
                theme: 'outlined',
                fontAddress: '',
                isIconFont: false,
                iconFileInfo: {},
              },
            },
            numberLimit: 5,
            singleFileMaxSize: '50MB',
            btnIcon: {
              type: 'upload',
              theme: 'outlined',
              fontAddress: '',
              isIconFont: false,
              iconFileInfo: {},
            },
            uploadStyle: 'button',
            uploadBtnStyle: 'text',
            showBtnIcon: false,
            iconPosition: 'left',
            btnText: '上传附件',
            fieldProps: 'dssd',
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
          engineApi: [
            'downloadByFileId',
            'downFieldPrefix',
            'http',
            'BannerModal',
            'downloadFileByFileCode',
            'getMaterialFile',
          ],
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_7287887'],
        },
        {
          id: 'DformSelect_016298',
          label: '多列选择',
          compName: 'DformSelect',
          type: 'DformSelect',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '多列选择',
            titleIcon: 'none',
            postfix: '',
            postfixIconPosition: 'before',
            dformType: 'DformSelect',
            data: [],
            title: '多列选择器',
            placeholder: '请选择',
            positionType: 'horizontal',
            status: '1',
            icon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'right',
            },
            fieldProps: 'qwed',
            options: [
              {
                label: '标题',
                key: '123176',
                $$isParent: true,
                title: '标题',
                children: [
                  {
                    label: '标题',
                    key: '045079',
                    title: '标题',
                    value: '045079',
                  },
                  {
                    label: '标题',
                    key: '9057055',
                    title: '标题',
                    value: '9057055',
                  },
                ],
                value: '123176',
              },
              {
                label: '标题',
                key: '638287',
                $$isParent: true,
                title: '标题',
                children: [
                  {
                    label: '标题',
                    key: '879889',
                    title: '标题',
                    value: '879889',
                  },
                  {
                    label: '标题',
                    key: '672462',
                    title: '标题',
                    value: '672462',
                  },
                ],
                value: '638287',
              },
            ],
          },
          style: {
            textAlign: 'right',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
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
        {
          id: 'DformRangePicker_245198',
          label: '时间段选择',
          compName: 'DformRangePicker',
          type: 'DformRangePicker',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '时间段选择',
            separatorStr: '～',
            positionType: 'horizontal',
            hasTitleIcon: 'none',
            title: '时间段选择',
            dformType: 'DformRangePicker',
            status: '1',
            selectType: 'multiple',
            optionsLayout: 'horizontal',
            formatter: 'YYYY-MM-DD',
            modeType: 'date',
            inputContent: '1',
            fieldProps: 'asdsa',
          },
          style: {
            inputContent: '1',
          },
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
        {
          id: 'DformDate_746611',
          label: '时间选择',
          compName: 'DformDate',
          type: 'DformDate',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '时间选择',
            titleIcon: 'none',
            postfix: '',
            postfixIconPosition: 'before',
            title: '时间选择',
            dformType: 'DformDate',
            positionType: 'horizontal',
            status: '1',
            modeType: 'date',
            chooseType: 'DatePicker',
            replaceName: {
              年: '-',
              月: '-',
              日: '',
            },
            icon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'right',
            },
            formatter: 'YYYY-MM-DD',
            fieldProps: 'asds',
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
        {
          id: 'DAddressPicker_941501',
          label: '地址',
          compName: 'DAddressPicker',
          type: 'DAddressPicker',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '地址选择',
            placeholder: '请选择',
            status: '1',
            positionType: 'horizontal',
            titleIcon: 'none',
            postfix: '',
            postfixIconPosition: 'before',
            title: '地址选择',
            dformType: 'DAddressPicker',
            placeholderList: ['请选择省', '请选择市', '请选择区'],
            alias: {
              label: 'title',
            },
            icon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'right',
            },
            fieldProps: 'dassf',
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
          engineApi: [
            'downloadFileByFileCode',
            'getMaterialFile',
            'service.commonFetch',
          ],
          setEvents: [],
          description: '',
          image: '',
          groupsName: '表单',
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
        {
          id: 'DMultiplePicker_919181',
          label: '多项选择',
          compName: 'DMultiplePicker',
          type: 'DMultiplePicker',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '多项选择',
            valueType: 'ellipsis',
            titleIcon: 'none',
            postfix: '',
            postfixIconPosition: 'before',
            title: '多项选择',
            dformType: 'DMultiplePicker',
            positionType: 'horizontal',
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
            icon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'right',
            },
            fieldProps: 'fecss',
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
        {
          id: 'DformPicker_0455286',
          label: '单项选择',
          compName: 'DformPicker',
          type: 'DformPicker',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '单项选择',
            titleIcon: 'none',
            postfix: '',
            postfixIconPosition: 'before',
            filter: 'none',
            title: '单项选择',
            dformType: 'DformPicker',
            positionType: 'horizontal',
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
            placeholder: '请选择',
            icon: {
              isIconFont: false,
              theme: 'outlined',
              type: 'right',
            },
            fieldProps: 'gdf',
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
        {
          id: 'DformInputNumber_969091',
          label: '数字输入',
          compName: 'DformInputNumber',
          type: 'DformInputNumber',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '数字输入',
            positionType: 'horizontal',
            titleIcon: 'none',
            dformType: 'DformInputNumber',
            title: '数字输入',
            placeholder: '请输入',
            clear: true,
            status: '1',
            inputType: 'text',
            formatting: '',
            fieldProps: 'erfd',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'h5',
          icon: 'DformInputNumber',
          setEvents: [],
          fieldProps: {
            trigger: 'onChange',
            valuePropName: 'defaultValue',
          },
          engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
          description: '',
          image: '',
          groupsName: '表单',
          isAppChildForm: true,
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
        {
          id: 'DformRadio_71564',
          label: '单选框',
          compName: 'DformRadio',
          type: 'DformRadio',
          compType: 2,
          compLib: '@/components',
          props: {
            name: '单选框',
            positionType: 'horizontal',
            titleIcon: 'none',
            radioType: 'horizontal',
            radioPosition: 'left',
            selectedType: 'roundDot',
            chunk: 2,
            title: '单选框',
            defaultValue: 'man',
            dformType: 'DformRadio',
            status: '1',
            options: [
              {
                id: '1',
                label: '男',
                value: 'man',
              },
              {
                id: '2',
                label: '女',
                value: 'woman',
              },
            ],
            fieldProps: 'bvfc',
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
        {
          id: 'DformInput_618494',
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
            fieldProps: 'fddg',
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
          path: ['769713', 'View_769713_1', 'DForm_458695'],
        },
      ],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
