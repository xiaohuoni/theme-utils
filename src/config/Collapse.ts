export const Collapse = {
  type: 'Collapse',
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
    titleColor: {
      type: 'color',
      label: '装饰图标颜色',
      groupsName: '颜色',
    },
    tagSize: { type: 'px', label: '装饰条尺寸', groupsName: '布局' },
    tagMargin: { type: 'px', label: '符号右外边距', groupsName: '布局' },
    arrowColor: {
      type: 'color',
      label: '后缀图标颜色',
      groupsName: '颜色',
    },
    arrowSize: { type: 'px', label: '后缀图标尺寸', groupsName: '布局' },
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
    lineColor: {
      type: 'color',
      label: '分割线颜色',
      groupsName: '边框',
    },
    bodyColor: {
      type: 'color',
      label: '内容区域背景',
      groupsName: '背景颜色',
    },
  },
  groupsName: '容器',
  icon: 'Collapse',
  title: '折叠面板',
  defaultValue: [
    {
      titleColor: '#0085D0',
      tagSize: '16px',
      tagMargin: '8px',
      arrowColor: '#1c242e',
      arrowSize: '14px',
      borderColor: '#f0f0f0',
      lineColor: '#f0f0f0',
      borderRadius: '2px',
      bodyColor: '#fff',
    },
  ],
  tpl: `.ued-collapse-wrap .ued-collapse-panel-header-icon-auto span, .ued-collapse-wrap .ued-collapse-panel-header-icon-auto>i{
    color: titleColor;
    margin-right: tagMargin;
  }
  .ued-collapse-wrap .ued-collapse-panel-header-icon-auto span svg, .ued-collapse-wrap .ued-collapse-panel-header-icon-auto>i svg{
    width: tagSize;
    height: tagSize;
}
.ued-collapse-wrap .pcfactory-collapse.pcfactory-collapse-icon-position-right>.pcfactory-collapse-item>.pcfactory-collapse-header .pcfactory-collapse-arrow span{
  color: arrowColor;
}
.ued-collapse-wrap .pcfactory-collapse.pcfactory-collapse-icon-position-right>.pcfactory-collapse-item>.pcfactory-collapse-header .pcfactory-collapse-arrow span svg{
  width: arrowSize;
  height: arrowSize;
}
.ued-collapse-wrap .pcfactory-collapse{
  border-color: borderColor;
  border-radius: borderRadius;
}
.ued-collapse-wrap .pcfactory-collapse>.pcfactory-collapse-item{
  border-color: borderColor;

}
.ued-collapse-wrap .pcfactory-collapse>.pcfactory-collapse-item>.pcfactory-collapse-content{
  border-color: lineColor;
}
.ued-collapse-wrap .pcfactory-collapse>div:last-child{
    border-bottom-right-radius: borderRadius;
    border-bottom-left-radius: borderRadius;
    .pcfactory-collapse-header{
      border-bottom-right-radius: borderRadius;
      border-bottom-left-radius: borderRadius;
    }
}
.ued-collapse-wrap .pcfactory-collapse .pcfactory-collapse-item-active:last-child {
  .pcfactory-collapse-header{
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.ued-collapse-wrap .pcfactory-collapse-item:last-child>.pcfactory-collapse-content{
  border-bottom-right-radius: borderRadius;
  border-bottom-left-radius: borderRadius;
  .ued-collapse-pane-content{
    border-bottom-right-radius: borderRadius;
    border-bottom-left-radius: borderRadius;
  }
}
.ued-collapse-wrap .pcfactory-collapse>div:first-child {
  border-top-left-radius: borderRadius;
  border-top-right-radius: borderRadius;
  .pcfactory-collapse-header{
    border-top-left-radius: borderRadius;
  border-top-right-radius: borderRadius;
  }
}
.ued-collapse-wrap .pcfactory-collapse>.pcfactory-collapse-item>.pcfactory-collapse-content>.pcfactory-collapse-content-box .ued-collapse-pane-content{
  background-color: bodyColor;
}`,
  components: [
    {
      id: 'Collapse_746665',
      label: '折叠面板',
      compName: 'Collapse',
      type: 'Collapse',
      compType: 0,
      compLib: 'antd',
      props: {
        name: '折叠面板',
        basicStatus: 1,
        defaultActiveKey: ['1'],
        expandIconPosition: 'right',
        size: 'default',
        bordered: true,
        hasIcon: true,
        cardIconType: 'auto',
        collapseType: '',
        prefixIcon: {
          prefixIconTheme: 'outlined',
          prefixIconType: 'info-circle',
        },
      },
      style: {
        width: '100%',
        margin: '0 0 16px 0',
        padding: '20px 20px 20px 20px',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Collapse',
      description: '',
      image: '',
      groupsName: '容器',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'CollapsePanel_052953',
          label: '折叠子面板',
          compName: 'CollapsePanel',
          type: 'CollapsePanel',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '折叠子面板',
            basicStatus: 1,
            header: '标题1',
            key: '1',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'CollapsePanel',
          description: '',
          image: '',
          groupsName: '容器',
          engineApi: ['service.downloadFileByFileCode'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Collapse_746665'],
        },
        {
          id: 'CollapsePanel_54481',
          label: '折叠子面板',
          compName: 'CollapsePanel',
          type: 'CollapsePanel',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '折叠子面板',
            basicStatus: 1,
            header: '标题',
            key: '3',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'CollapsePanel',
          description: '',
          image: '',
          groupsName: '容器',
          engineApi: ['service.downloadFileByFileCode'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Collapse_746665'],
        },
        {
          id: 'CollapsePanel_544801',
          label: '折叠子面板',
          compName: 'CollapsePanel',
          type: 'CollapsePanel',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '折叠子面板',
            basicStatus: 1,
            header: '标题2',
            key: '2',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'CollapsePanel',
          description: '',
          image: '',
          groupsName: '容器',
          engineApi: ['service.downloadFileByFileCode'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Collapse_746665'],
        },
      ],
      path: ['998509'],
    },
    {
      id: 'Collapse_746665',
      label: '折叠面板',
      compName: 'Collapse',
      type: 'Collapse',
      compType: 0,
      compLib: 'antd',
      props: {
        name: '折叠面板',
        basicStatus: 1,
        defaultActiveKey: ['1'],
        expandIconPosition: 'right',
        size: 'default',
        bordered: true,
        hasIcon: true,
        cardIconType: 'auto',
        collapseType: '',
        prefixIcon: {
          prefixIconTheme: 'outlined',
          prefixIconType: 'info-circle',
        },
      },
      style: {
        width: '100%',
        margin: '0 0 16px 0',
        padding: '20px 20px 20px 20px',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Collapse',
      description: '',
      image: '',
      groupsName: '容器',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'CollapsePanel_052953',
          label: '折叠子面板',
          compName: 'CollapsePanel',
          type: 'CollapsePanel',
          compType: 0,
          compLib: 'comm',
          props: {
            name: '折叠子面板',
            basicStatus: 1,
            header: '标题1',
            key: '1',
          },
          style: {
            minHeight: 40,
          },
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          platform: 'pc',
          icon: 'CollapsePanel',
          description: '',
          image: '',
          groupsName: '容器',
          engineApi: ['service.downloadFileByFileCode'],
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['998509', 'Collapse_746665'],
        },
      ],
      path: ['998509'],
    },
  ],
};
