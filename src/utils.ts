/**
 *  根据 groupsName 将对象分成数组
 * @param obj
 * @returns
 */
export function objToListByGroupsName(obj: any) {
  const groups: any = {};

  // 遍历对象，根据groupsName属性进行分组
  for (const key in obj) {
    const item = obj[key];
    const groupName = item.groupsName;

    if (!groups[groupName]) {
      groups[groupName] = {
        groupName,
        id: Object.keys(groups).length + 1,
        items: [],
      };
    }

    groups[groupName].items.push({ key, ...item });
  }

  // 将分组转换为数组
  const result = Object.values(groups);

  return result;
}

/**
 *  (内部方法) 根据 groupsName 将对象分成数组
 * @param obj
 * @returns
 */
export function __objToListByGroupsName(obj: any) {
  const groups: any = {};

  // 遍历对象，根据groupsName属性进行分组
  for (const key in obj) {
    const item = obj[key];
    const groupName = item.groupsName;

    if (!groups[groupName]) {
      groups[groupName] = {
        groupName,
        id: Object.keys(groups).length + 1,
        items: [],
      };
    }

    groups[groupName].items.push({ key, type: item.type, icon: item.icon });
  }

  // 将分组转换为数组
  const result = Object.values(groups);

  return result;
}
