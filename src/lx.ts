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
import { TextArea } from './config/TextArea';
import { InputNumber } from './config/InputNumber';
import { Radio } from './config/Radio';
import { CheckboxGroup } from './config/CheckboxGroup';
import { Checkbox } from './config/Checkbox';
import { Select } from './config/Select';
import { MultipleSelect } from './config/MultipleSelect';
import { DatePicker } from './config/DatePicker';
import { TimePicker } from './config/TimePicker';
import { RangePicker } from './config/RangePicker';
import { TreeSelect } from './config/TreeSelect';
import { Cascader } from './config/Cascader';
import { Switch } from './config/Switch';
import { StdUpload } from './config/StdUpload';

export const ASSETS_CSS_TPL: any = {
  Button,
  Container,
  Form,
  Card,
  Collapse,
  Tabs,
  Icon,
  Link,
  Input,
  TextArea,
  InputNumber,
  Radio,
  CheckboxGroup,
  Checkbox,
  Select,
  MultipleSelect,
  DatePicker,
  TimePicker,
  RangePicker,
  TreeSelect,
  Cascader,
  Switch,
  StdUpload,
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

const extend: any = {
  Input: 'Form',
  TextArea: 'Form',
  InputNumber: 'Form',
  Radio: 'Form',
  CheckboxGroup: 'Form',
  Checkbox: 'Form',
  Select: 'Form',
  MultipleSelect: 'Form',
  DatePicker: 'Form',
  TimePicker: 'Form',
  RangePicker: 'Form',
  TreeSelect: 'Form',
  Cascader: 'Form',
  Switch: 'Form',
  StdUpload: 'Form',
};

// 临时解决方案，将只对它有影响的值，生成继承的样式
export function stringifyCssByTypePreview(type: string, values: any) {
  console.log(values);
  if (extend[type]) {
    const cfg = getItemByType(extend[type]);
    const item = getItemByType(type);
    return (
      stringifyCss(cfg.tpl, { ...cfg.defaultValue[0], ...values }) +
      stringifyCss(item.tpl, values)
    );
  } else {
    const item = getItemByType(type);
    return stringifyCss(item.tpl, values);
  }
}

export function parseCssByType(type: string, css: string) {
  const item = getItemByType(type);
  return parseCss(item.tpl, css);
}
