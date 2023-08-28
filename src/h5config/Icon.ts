export const Icon = {
  type: 'Icon',
  variable: {
    iconSize: { type: 'px', label: '尺寸', groupsName: '图标' },
  },
  groupsName: '基础',
  icon: 'icon-ico-comp-app-Icon',
  title: '图标',
  defaultValue: [
    {
      iconSize: '20px',
    },
  ],
  tpl: `.cust-icon-sm{
      width: iconSize;
    height: iconSize;
    font-size: iconSize;
    }`,
  components: [
    {
      id: 'Icon_7464028',
      label: '图标',
      compName: 'Icon',
      type: 'Icon',
      compType: 1,
      compLib: '@/components',
      props: {
        name: '图标',
        state: '1',
        mode: 'normal',
        icon: {
          type: 'check-circle',
          theme: 'outlined',
          fontAddress: '',
          isIconFont: false,
        },
        size: 'sm',
      },
      style: {
        border: '0px',
      },
      isContainer: false,
      isBusiObjContainer: false,
      cmdgroup: ['basic'],
      platform: 'h5',
      engineApi: ['downloadFileByFileCode', 'getMaterialFile'],
      isInlineBlock: true,
      setEvents: [],
      description: '',
      image: '',
      groupsName: '基础',
      icon: 'Icon',
      isLabelDropBoxChild: false,
      components: [],
      path: ['769713', 'View_769713_1'],
    },
  ],
};
