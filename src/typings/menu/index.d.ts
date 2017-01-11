interface MenuItemContainer {
  color: string;
  label: string;
}

interface  MenuItem {
  icon?: string;
  title: string;
  items?: Array<MenuItem>;
  container?: Array<MenuItemContainer>;
  href?: string;
  link?: string;
  header?: boolean;
  active?:boolean;
}

// {
//   icon: '',
//   title: '',
//   items: [],
//   container: [],
//   href: '',
//   link: ''
// }
