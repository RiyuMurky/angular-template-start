interface MenuItemsContainer {
  color: string;
  label: string;
}

interface  MenuItems {
  icon?: string;
  title: string;
  items?: Array<MenuItems>;
  container?: Array<MenuItemsContainer>;
  href?: string;
  link?: string;
  header?: boolean;
  isopen?:boolean;
}

// {
//   icon: '',
//   title: '',
//   items: [],
//   container: [],
//   href: '',
//   link: ''
// }
