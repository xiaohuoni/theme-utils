export const Container = {
  type: 'Container',
  var: {
    textColor: {
      type: 'color',
      label: '标题文本颜色',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
    },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '文字',
      desc: '对卡片标题、折叠面板标题、表格头部标题生效',
      options: ['100', '200', '300', '400', '500'],
    },
    borderColor: {
      type: 'color',
      label: '边框颜色',
      groupsName: '边框',
      desc: '对布局容器、表单容器、普通容器、卡片、折叠面板、标签页和表格均生效',
    },
    borderRadius: {
      type: 'px',
      label: '边框圆角',
      groupsName: '边框',
      desc: '对布局容器、表单容器、普通容器、卡片、折叠面板、标签页和表格均生效',
    },
  },
  groupsName: '容器',
  icon: 'Container',
  desc: '边框配置对布局容器、表单容器、普通容器、卡片、折叠面板、标签页和表格均生效；文字配置对卡片标题、折叠面板标题、表格头部标题生效',
  title: '容器',
  default: [
    {
      textColor: '#000',
      lineHeight: '0px',
      fontSize: '14px',
      fontWeight: '500',
      borderColor: '#E8E8E8',
      borderRadius: '8px',
    },
  ],
  // TODO：布局容器、普通容器
  tpl: `.pcfactory-legacy-form {
        border-color: borderColor;
        border-radius: borderRadius;
    }
    .ued-card.pcfactory-card-bordered {
      border-color: borderColor;
      border-radius: borderRadius;
    }
    .ued-collapse-wrap .pcfactory-collapse {
      border-color: borderColor;
      border-radius: borderRadius;
    }
    .ued-tabs-wrap .pcfactory-tabs {
      border-color: borderColor;
      border-radius: borderRadius;
    }
    .ued-table-wrap .ued-table .pcfactory-table table{
      border-color: borderColor;
      border-radius: borderRadius;
    }
    .ued-card-title {
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
    }
    .ued-collapse-wrap .pcfactory-collapse.pcfactory-collapse-icon-position-right > .pcfactory-collapse-item > .pcfactory-collapse-header .ued-collapse-panel-header {
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
    }
    .pcfactory-table-thead > tr > th{
      color: textColor;
      line-height: lineHeight;
      font-size: fontSize;
      font-weight: fontWeight;
    }`,
};
