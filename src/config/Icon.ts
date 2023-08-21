export const Icon = {
  type: 'Icon',
  variable: {
    iconSize: { type: 'px', label: '尺寸', groupsName: '文字' },
  },
  groupsName: '通用',
  icon: 'icon-ico-comp-icon',
  title: '图标',
  defaultValue: [
    {
      iconSize: '14px',
    },
  ],
  tpl: `.ued-icon svg {
      width: iconSize;
      height: iconSize;
    }`,
  components: [
    {
      id: 'Icon_913145',
      label: '图标',
      compName: 'Icon',
      type: 'Icon',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '图标',
        basicStatus: 1,
        mode: 'normal',
        rotate: 0,
        icon: {
          theme: 'outlined',
          type: 'smile',
          isIconFont: false,
        },
      },
      style: {},
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'pc',
      icon: 'Icon',
      description: '',
      image: '',
      groupsName: '通用',
      isInlineBlock: true,
      engineApi: ['service.downloadFileByFileCode', 'service.getMaterialFile'],
      setEvents: [],
      isLabelDropBoxChild: false,
      components: [],
      path: ['998509'],
    },
  ],
};
