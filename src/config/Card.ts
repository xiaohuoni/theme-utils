export const Card = {
  type: 'Card',
  variable: {
    textColor: {
      type: 'color',
      label: '标题文本颜色',
      groupsName: '文字',
      canEdit: false,
      extendsKey: 'Container',
      desc: '继承自容器，此处不可编辑',
    },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
      groupsName: '文字',
      canEdit: false,
      extendsKey: 'Container',
      desc: '继承自容器，此处不可编辑',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '文字',
      canEdit: false,
      extendsKey: 'Container',
      desc: '继承自容器，此处不可编辑',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '文字',
      canEdit: false,
      extendsKey: 'Container',
      desc: '继承自容器，此处不可编辑',
      options: [
        { title: '100', value: '100' },
        { title: '200', value: '200' },
        { title: '300', value: '300' },
        { title: '400', value: '400' },
        { title: '500', value: '500' },
      ],
    },
    backgroundColor: {
      type: 'color',
      label: '头部背景颜色',
      groupsName: '背景颜色',
    },
    titleColor: {
      type: 'color',
      label: '装饰条颜色',
      groupsName: '背景颜色',
    },
    tagSize: { type: 'px', label: '标题装饰符尺寸', groupsName: '布局' },
    tagMargin: { type: 'px', label: '符号右外边距', groupsName: '布局' },
    borderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '边框',
    },
    borderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
    },
    bodyColor: {
      type: 'color',
      label: '内容区域背景',
      groupsName: '背景颜色',
    },
    lineColor: {
      type: 'color',
      label: '分割线颜色',
      groupsName: '边框',
    },
  },
  groupsName: '容器',
  icon: 'Card',
  title: '卡片',
  defaultValue: [
    {
      fontSize: '14px',
      backgroundColor: '#fff',
      titleColor: '#0085D0',
      tagSize: '16px',
      tagMargin: '8px',
      borderColor: '#f0f0f0',
      borderRadius: '2px',
      bodyColor: '#fff',
      lineColor: '#f0f0f0',
    },
  ],
  tpl: `
  .pcfactory-card{
    border-radius: borderRadius;
  }
  .ued-card.pcfactory-card-bordered .pcfactory-card-head {
    background-color: backgroundColor;
    border-color: lineColor;
    border-top-left-radius: borderRadius;
    border-top-right-radius: borderRadius;
  }
  .ued-card.pcfactory-card-bordered, .ued-card.pcfactory-card-bordered {
    border-color: borderColor;
  }
  .ued-card .ued-card-title-icon-auto>i, .ued-card .ued-card-title-icon-auto span{
    color: titleColor;
    margin-right: tagMargin;
  }
    .ued-card .ued-card-title-icon-auto>i svg, .ued-card .ued-card-title-icon-auto span svg{
      width: tagSize;
      height: tagSize;
  }
  .ued-card .pcfactory-card-body{
    background-color: bodyColor;
    border-bottom-right-radius: borderRadius;
    border-bottom-left-radius: borderRadius;
  }`,
  components: [
    {
      id: 'Card_813627',
      label: '卡片',
      compName: 'Card',
      type: 'Card',
      compType: 0,
      compLib: '$component',
      props: {
        name: '卡片',
        basicStatus: 1,
        cardIconType: 'auto',
        extendNum: 3,
        title: '标题',
        bordered: true,
        size: 'default',
        hasHeader: true,
        hasIcon: true,
        prefixIcon: {
          prefixIconTheme: 'outlined',
          prefixIconType: 'info-circle',
        },
      },
      style: {
        padding: '20px 20px 20px 20px',
        overflowY: 'visible',
        margin: '0 0 16px 0',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Card',
      description: '',
      image: '',
      groupsName: '容器',
      engineApi: ['sandBoxSafeRun', 'service.downloadFileByFileCode'],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['998509', 'View_998509_1'],
    },
  ],
};
