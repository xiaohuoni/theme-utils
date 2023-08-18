import { stringifyCss, parseCss } from './css';
import { objToListByGroupsName } from './utils';
import { Button } from './config/Button';
// 文本放在不同的组件下，会有不同的效果，暂不支持配置
// import { Text } from './config/Text';
import { Icon } from './config/Icon';
import { Link } from './config/Link';
import { Divider } from './config/Divider';
import { Container } from './config/Container';
import { Form } from './config/Form';
import { Input } from './config/Input';
import { Card } from './config/Card';
import { Collapse } from './config/Collapse';
import { Tabs } from './config/Tabs';

export const ASSETS_CSS_TPL: any = {
  Button,
  Container,
  Form,
  Card,
  Collapse,
  Tabs,
  Icon,
  Link,
  Divider,
};

export const ASSETS_COMPONENT_LIST = objToListByGroupsName(
  Object.values(ASSETS_CSS_TPL),
);

export function getItemByType(type: string) {
  const com = ASSETS_CSS_TPL[type];
  if (!type || !com) return { tpl: '' };
  return com;
}

export function stringifyCssByType(type: string, values: any) {
  const item = getItemByType(type);
  return stringifyCss(item.tpl, values);
}

export function parseCssByType(type: string, css: string) {
  const item = getItemByType(type);
  return parseCss(item.tpl, css);
}
