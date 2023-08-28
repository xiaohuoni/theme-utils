export const DformFile = {
  type: 'DformFile',
  variable: {
    btnBgColor: {
      type: 'color',
      label: '上传按钮背景颜色',
      groupsName: '背景颜色',
    },
    btnIconColor: {
      type: 'color',
      label: '上传按钮标题颜色',
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
  icon: 'icon-ico-comp-app-DformFile',
  title: '上传附件',
  defaultValue: [
    {
      btnBgColor: 'rgba(68, 119, 238, 0.1)',
      btnIconColor: '#108ee9',
      btnBorderRadius: '100px',
    },
  ],
  tpl: `.lingxiteam-dform-file-extra-btn{
      border-radius: btnBorderRadius;
      background: btnBgColor;
      > span {
        color: btnIconColor;
      }
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
      ],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
