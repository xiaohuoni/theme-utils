export const DformImagePicker = {
  type: 'DformImagePicker',
  variable: {
    btnBgColor: {
      type: 'color',
      label: '上传按钮背景颜色',
      groupsName: '背景颜色',
    },
    btnIconColor: {
      type: 'color',
      label: '上传按钮图标颜色',
      groupsName: '背景颜色',
    },
    btnBorderRadius: {
      type: 'px',
      label: '上传按钮边框圆角',
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
  },
  groupsName: '表单',
  icon: 'icon-ico-comp-app-DformImagePicker',
  title: '上传图片',
  defaultValue: [
    {
      btnBgColor: '#f7f7f7',
      btnIconColor: '#d8d8d8',
      btnBorderRadius: '2px',
    },
  ],
  tpl: `
  .lingxiteam-dform-image-picker-upload-item{
    border-radius: btnBorderRadius;
    background-color: btnBgColor;
  }
  .lingxiteam-dform-image-picker-upload-item::after{
    background-color: btnIconColor;
  }
   .lingxiteam-dform-image-picker-upload-item::before{
    background-color: btnIconColor;
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
      ],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
