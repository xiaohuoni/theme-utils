export const StdUpload = {
  type: 'StdUpload',
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
    listTextColor: {
      type: 'color',
      label: '列表文本颜色',
      groupsName: '文字',
    },
    listFontSize: {
      type: 'px',
      label: '列表文本字号',
      groupsName: '文字',
    },
    listIconColor: {
      type: 'color',
      label: '列表图标颜色',
      groupsName: '文字',
    },
    lisIconSize: {
      type: 'px',
      label: '列表图标字号',
      groupsName: '文字',
    },
  },
  groupsName: '数据录入',
  icon: 'icon-ico-comp-stdupload',
  title: '文件上传',
  defaultValue: [
    {
      listTextColor: 'rgba(0,0,0,.65)',
      listFontSize: '14px',
      listIconColor: 'rgba(0,0,0,.45)',
      lisIconSize: '14px',
    },
  ],
  tpl: `
    .ued-stdupload-wrap .pcfactory-upload-list-item-info .anticon-loading .anticon{
      color: listIconColor;
      > svg{
        width: lisIconSize;
        height: lisIconSize;
      }
    }
     .pcfactory-upload-list-item-info .pcfactory-upload-text-icon .anticon{
      color: listIconColor;
      > svg{
        width: lisIconSize;
        height: lisIconSize;
      }
    }
    .ued-stdupload-wrap .pcfactory-upload-list-item-error{
      color: #ff7474;
   }
   .pcfactory-upload-list-item-error .pcfactory-upload-list-item-name{
    color: #ff7474;
 }
 .pcfactory-upload-list-item-error .pcfactory-upload-text-icon>.anticon{
       color: #ff7474;
    }
    .ued-stdupload-wrap .pcfactory-upload-list-item-info a{
      color: listTextColor;
      font-size: listFontSize;
    }
    .ued-stdupload-wrap .pcfactory-upload-list-item-info:hover a{
      color: listTextColor;
      font-size: listFontSize;
    }
    .ued-stdupload-wrap .pcfactory-upload-list-item-card-actions .anticon{
      color: listIconColor;
      > svg{
        width: lisIconSize;
        height: lisIconSize;
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
          id: 'StdUpload_517167',
          label: '文件上传',
          compName: 'StdUpload',
          type: 'StdUpload',
          compType: 2,
          compLib: 'antd',
          props: {
            name: '文件上传',
            basicStatus: 1,
            uploadStyle: 'click',
            listType: 'text',
            titleTip: 'notext',
            tipSize: 'default',
            tipWidth: '240px',
            tipHeight: 'auto',
            viewMode: 'popUp',
            fileNameEncode: false,
            isWatermark: false,
            optionalFile: false,
            fileName: 'file',
            selfSpan: '',
            labelCol: 8,
            wrapperCol: 16,
            numberLimit: 5,
            singleFileMaxSize: 50,
            uploadText: '点击上传',
            uploadTimeout: 30000,
            value: [
              {
                fileId: '1',
                fileName: 'xxx.png',
                status: 'done',
              },
              {
                fileId: '2',
                fileName: 'yyy.png',
                status: 'done',
              },
              {
                fileId: '3',
                fileName: 'zzz.png',
                status: 'error',
                response: 'Server Error 500', // custom error message to show
              },
            ],
            deleteIcon: {
              deleteIconTheme: 'outlined',
              deleteIconType: 'delete',
              deleteIconIsIconFont: false,
              showRemoveIcon: true,
            },
            downloadIcon: {
              downloadIconTheme: 'outlined',
              downloadIconType: 'download',
              downloadIconIsIconFont: false,
              showDownloadIcon: true,
            },
            previewIcon: {
              previewIconTheme: 'outlined',
              previewIconType: 'eye',
              previewIconIsIconFont: false,
              showPreviewIcon: true,
            },
            modalWidth: 960,
            modalHeight: 648,
            formItemIndex: 11,
            fieldName: 'xvf',
          },
          style: {},
          isContainer: false,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'StdUpload',
          description: '',
          image: '',
          groupsName: '数据录入',
          engineApi: [
            'BannerModal',
            'service.uploadSingleFile',
            'service.downloadByFileId',
            'resolveApiPath',
          ],
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
