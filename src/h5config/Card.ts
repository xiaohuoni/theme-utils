export const Card = {
  type: 'Card',
  variable: {
    textColor: {
      type: 'color',
      label: '标题文本颜色',
      groupsName: '标题',
    },
    lineHeight: {
      type: 'px',
      label: '标题文本行高',
      groupsName: '标题',
    },
    fontSize: {
      type: 'px',
      label: '标题文本尺寸',
      groupsName: '标题',
    },
    fontWeight: {
      type: 'select',
      label: '标题文本字重',
      groupsName: '标题',
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
      groupsName: '标题',
    },
    lineColor: {
      type: 'color',
      label: '分割线颜色',
      groupsName: '边框',
    },
    tagSize: { type: 'px', label: '标题装饰图标尺寸', groupsName: '标题' },
    tagMargin: { type: 'px', label: '符号右外边距', groupsName: '标题' },
    arrowColor: {
      type: 'color',
      label: '后缀图标颜色',
      groupsName: '标题',
    },
    arrowSize: { type: 'px', label: '后缀图标尺寸', groupsName: '标题' },
    bodyBgColor: {
      type: 'color',
      label: '内容背景颜色',
      groupsName: '背景颜色',
    },
    bodyLineColor: {
      type: 'color',
      label: '内容分割线颜色',
      groupsName: '边框',
    },
    footBgColor: {
      type: 'color',
      label: '底部背景颜色',
      groupsName: '背景颜色',
    },
    borderColor: { type: 'color', label: '边框颜色', groupsName: '边框' },
    borderRadius: { type: 'px', label: '边框圆角', groupsName: '边框' },
  },
  groupsName: '容器',
  icon: 'icon-ico-comp-app-CardPlus',
  title: '卡片',
  defaultValue: [
    {
      textColor: 'rgb(28, 36, 46)',
      lineHeight: '100%',
      fontSize: '16px',
      fontWeight: '400',
      backgroundColor: '#fff',
      titleColor: '#47e',
      lineColor: '#f0f0f0',
      tagSize: '16px',
      tagMargin: '4px',
      arrowColor: 'rgba(28, 36, 46, 0.55)',
      arrowSize: '12px',
      bodyBgColor: '#fff',
      bodyLineColor: '#f0f0f0',
      footBgColor: '#fff',
      borderColor: 'rgba(0,0,0,0)',
      borderRadius: '4px',
    },
  ],
  tpl: `.lcdp-h5-card-title{
      color: textColor;
      font-weight: fontWeight;
      font-size: fontSize;
      line-height: lineHeight;
    }
    .lcdp-h5-card-hStyle{
      background: titleColor;
      margin-right: tagMargin;
      position: static;
      width: tagSize;
    }
    .lcdp-h5-card-vStyle{
      height: tagSize;
      background: titleColor;
      margin-right: tagMargin;
    }
    .lcdp-h5-card-icon{
      width:  tagSize;
      height: tagSize;
    }
    .lcdp-h5-card-icon svg{
      color:  titleColor;
      width:  tagSize;
      height: tagSize;
    }
    .lcdp-h5-card-icon{
      margin-right: tagMargin;
    }
    .lcdp-h5-card-extra-icon{
      width:  arrowSize;
      height: arrowSize;
    }
    .lcdp-h5-card-extra-icon svg{
      color:  arrowColor;
      width:  arrowSize;
      height: arrowSize;
    }
    .lcdp-h5-card .adm-card-header:not(:last-child){
      border-color: lineColor !important;
    }
    .lcdp-h5-card .adm-card-header{
      border-color: lineColor !important;
      background: backgroundColor !important;
    }
    .lcdp-h5-card .adm-card-body{
      background: bodyBgColor;
    }
    .lcdp-card-footer-draw-box-border{
      border-color: bodyLineColor;
      background: footBgColor;
    }
    .lcdp-h5-card {
      border-radius: borderRadius;
      border: 1PX solid borderColor;
    }
   `,
  components: [
    {
      id: 'Card_4143673',
      label: '卡片',
      compName: 'Card',
      type: 'Card',
      compType: 0,
      compLib: 'antd-mobile',
      props: {
        name: '卡片',
        showHeader: true,
        postfixIcon: {
          type: 'right',
          theme: 'outlined',
          fontAddress: '',
          isIconFont: false,
          iconFileInfo: {},
        },
        iconColor: 'rgba(28, 36, 46, 0.55)',
        postfixIconPosition: 'after',
        postFixColor: 'rgba(28, 36, 46, 0.55)',
        postFixFontSize: 16,
        showContent: true,
        showFooter: true,
        status: '1',
        cardType: '1',
        title: '卡片标题',
        headerType: 'vStyle',
        headerBackground: '#ffffff',
        iconPosition: 'after',
        $$ISNEW: true,
      },
      style: {
        padding: '12px',
        margin: '0px 0px 0px 0px',
        width: '100%',
        height: 'auto',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      description: '',
      image: '',
      groupsName: '容器',
      engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
      icon: 'Card',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'CardBody_543055',
          label: '卡片Body',
          compName: 'CardBody',
          type: 'CardBody',
          compType: 0,
          compLib: '@/components',
          props: {
            name: '卡片Body',
          },
          style: {},
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          description: '',
          image: '',
          groupsName: '容器',
          platform: 'h5',
          icon: 'View',
          deprecated: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'Card_4143673'],
        },
        {
          id: 'CardFooter_8630507',
          label: '卡片Footer',
          compName: 'CardFooter',
          type: 'CardFooter',
          compType: 1,
          compLib: '@/components',
          props: {
            name: '卡片Footer',
          },
          style: {},
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          description: '',
          image: '',
          groupsName: '容器',
          platform: 'h5',
          icon: 'View',
          deprecated: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'Card_4143673'],
        },
      ],
      path: ['769713', 'View_769713_1'],
    },
    {
      id: 'Card_4143673',
      label: '卡片',
      compName: 'Card',
      type: 'Card',
      compType: 0,
      compLib: 'antd-mobile',
      props: {
        name: '卡片',
        showHeader: true,
        postfixIcon: {
          type: 'right',
          theme: 'outlined',
          fontAddress: '',
          isIconFont: false,
          iconFileInfo: {},
        },
        iconColor: 'rgba(28, 36, 46, 0.55)',
        postfixIconPosition: 'after',
        postFixColor: 'rgba(28, 36, 46, 0.55)',
        postFixFontSize: 16,
        showContent: true,
        showFooter: true,
        status: '1',
        cardType: '1',
        title: '卡片标题',
        headerType: 'hStyle',
        headerBackground: '#ffffff',
        iconPosition: 'after',
        $$ISNEW: true,
      },
      style: {
        padding: '12px',
        margin: '0px 0px 0px 0px',
        width: '100%',
        height: 'auto',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      description: '',
      image: '',
      groupsName: '容器',
      engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
      icon: 'Card',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'CardBody_543055',
          label: '卡片Body',
          compName: 'CardBody',
          type: 'CardBody',
          compType: 0,
          compLib: '@/components',
          props: {
            name: '卡片Body',
          },
          style: {},
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          description: '',
          image: '',
          groupsName: '容器',
          platform: 'h5',
          icon: 'View',
          deprecated: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'Card_4143673'],
        },
        {
          id: 'CardFooter_8630507',
          label: '卡片Footer',
          compName: 'CardFooter',
          type: 'CardFooter',
          compType: 1,
          compLib: '@/components',
          props: {
            name: '卡片Footer',
          },
          style: {},
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          description: '',
          image: '',
          groupsName: '容器',
          platform: 'h5',
          icon: 'View',
          deprecated: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'Card_4143673'],
        },
      ],
      path: ['769713', 'View_769713_1'],
    },
    {
      id: 'Card_4143673',
      label: '卡片',
      compName: 'Card',
      type: 'Card',
      compType: 0,
      compLib: 'antd-mobile',
      props: {
        name: '卡片',
        showHeader: true,
        postfixIcon: {
          type: 'right',
          theme: 'outlined',
          fontAddress: '',
          isIconFont: false,
          iconFileInfo: {},
        },
        iconColor: 'rgba(28, 36, 46, 0.55)',
        postfixIconPosition: 'after',
        postFixColor: 'rgba(28, 36, 46, 0.55)',
        postFixFontSize: 16,
        showContent: true,
        showFooter: true,
        status: '1',
        cardType: '1',
        title: '卡片标题',
        headerType: 'icon',
        headerBackground: '#ffffff',
        iconPosition: 'after',
        $$ISNEW: true,
        headerIcon: {
          type: 'info-circle',
          theme: 'outlined',
          fontAddress: '',
          isIconFont: false,
          iconFileInfo: {},
        },
      },
      style: {
        padding: '12px',
        margin: '0px 0px 0px 0px',
        width: '100%',
        height: 'auto',
      },
      isContainer: true,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      description: '',
      image: '',
      groupsName: '容器',
      engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
      icon: 'Card',
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [
        {
          id: 'CardBody_543055',
          label: '卡片Body',
          compName: 'CardBody',
          type: 'CardBody',
          compType: 0,
          compLib: '@/components',
          props: {
            name: '卡片Body',
          },
          style: {},
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          description: '',
          image: '',
          groupsName: '容器',
          platform: 'h5',
          icon: 'View',
          deprecated: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'Card_4143673'],
        },
        {
          id: 'CardFooter_8630507',
          label: '卡片Footer',
          compName: 'CardFooter',
          type: 'CardFooter',
          compType: 1,
          compLib: '@/components',
          props: {
            name: '卡片Footer',
          },
          style: {},
          isContainer: true,
          isBusiObjContainer: false,
          cmdgroup: ['basic'],
          description: '',
          image: '',
          groupsName: '容器',
          platform: 'h5',
          icon: 'View',
          deprecated: true,
          setEvents: [],
          isLabelDropBoxChild: false,
          components: [],
          path: ['769713', 'View_769713_1', 'Card_4143673'],
        },
      ],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
