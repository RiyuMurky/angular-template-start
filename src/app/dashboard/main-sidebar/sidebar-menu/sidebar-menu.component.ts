import { Component, OnInit, Input } from '@angular/core';
import { SidebarMenuExchangeService } from 'app/shared/services/sidebar-menu-exchange.service';

@Component({
  selector: '[app-sidebar-menu]',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css', './sidebar-menu.component.less']
})
export class SidebarMenuComponent implements OnInit {

  @Input()
  public currentItem: MenuItem;

  @Input()
  public menuItems: Array<MenuItem> = [
    {
      title: 'NAVIGATION',
      header: true
    },
    {
      icon: 'fa fa-dashboard',
      title: 'Dashboard',
      items: [
        {
          icon: 'fa fa-circle-o',
          title: 'Dashboard v1',
          items: [],
          container: [],
          href: 'index.html',
          link: 'dashboardv1'
        },
        {
          icon: 'fa fa-circle-o',
          title: 'Dashboard v2',
          items: [],
          container: [],
          href: 'index2.html',
          link: 'dashboardv2'
        }
      ],
      container: [],
      href: '',
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-files-o',
      title: 'Layout Options',
      container: [{
        color: 'label-primary',
        label: '4'
      }],
      items: [
        {
          href: 'pages/layout/top-nav.html',
          icon: 'fa fa-circle-o',
          title: 'Top Navigation',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/layout/boxed.html',
          icon: 'fa fa-circle-o',
          title: 'Boxed',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/layout/fixed.html',
          icon: 'fa fa-circle-o',
          title: 'Fixed',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/layout/collapsed-sidebar.html',
          icon: 'fa fa-circle-o',
          title: 'Collapsed Sidebar',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    {
      // TODO: not use class treeview
      href: 'pages/widgets.html',
      icon: 'fa fa-th',
      title: 'Widgets',
      container: [{
        color: 'bg-green',
        label: 'new'
      }],
      items: [],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-pie-chart',
      title: 'Charts',
      container: [],
      items: [
        {
          href: 'pages/charts/chartjs.html',
          icon: 'fa fa-circle-o',
          title: 'ChartJS',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/charts/morris.html',
          icon: 'fa fa-circle-o',
          title: 'Morris',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/charts/flot.html',
          icon: 'fa fa-circle-o',
          title: 'Flot',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/charts/inline.html',
          icon: 'fa fa-circle-o',
          title: 'Inline charts',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-laptop',
      title: 'UI Elements',
      container: [],
      items: [
        {
          href: 'pages/UI/general.html',
          icon: 'fa fa-circle-o',
          title: 'General',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/UI/icons.html',
          icon: 'fa fa-circle-o',
          title: 'Icons',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/UI/buttons.html',
          icon: 'fa fa-circle-o',
          title: 'Buttons',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/UI/sliders.html',
          icon: 'fa fa-circle-o',
          title: 'Sliders',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/UI/timeline.html',
          icon: 'fa fa-circle-o',
          title: 'Timeline',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/UI/modals.html',
          icon: 'fa fa-circle-o',
          title: 'Modals',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-edit',
      title: 'Forms',
      container: [],
      items: [
        {
          href: 'pages/forms/general.html',
          icon: 'fa fa-circle-o',
          title: 'General Elements',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/forms/advanced.html',
          icon: 'fa fa-circle-o',
          title: 'Advanced Elements',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/forms/editors.html',
          icon: 'fa fa-circle-o',
          title: 'Editors',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-table',
      title: 'Tables',
      container: [],
      items: [
        {
          href: 'pages/tables/simple.html',
          icon: 'fa fa-circle-o',
          title: 'Simple tables',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/tables/data.html',
          icon: 'fa fa-circle-o',
          title: 'Data tables',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    // TODO: not use treeview
    {
      href: 'pages/calendar.html',
      icon: 'fa fa-calendar',
      title: 'Calendar',
      container: [
        {
          color: 'bg-red',
          label: '3'
        },
        {
          color: 'bg-blue',
          label: '17'
        }
      ],
      items: [],
      link: ''
    },
    // TODO: not use treeview
    {
      href: 'pages/mailbox/mailbox.html',
      icon: 'fa fa-envelope',
      title: 'Mailbox',
      container: [
        {
          color: 'bg-yellow',
          label: '12'
        },
        {
          color: 'bg-green',
          label: '16'
        },
        {
          color: 'bg-red',
          label: '5'
        }
      ],
      items: [],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-folder',
      title: 'Examples',
      container: [],
      items: [
        {
          href: 'pages/examples/invoice.html',
          icon: 'fa fa-circle-o',
          title: 'Invoice',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/profile.html',
          icon: 'fa fa-circle-o',
          title: 'Profile',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/login.html',
          icon: 'fa fa-circle-o',
          title: 'Login',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/register.html',
          icon: 'fa fa-circle-o',
          title: 'Register',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/lockscreen.html',
          icon: 'fa fa-circle-o',
          title: 'Lockscreen',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/404.html',
          icon: 'fa fa-circle-o',
          title: '404 Error',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/500.html',
          icon: 'fa fa-circle-o',
          title: '500 Error',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/blank.html',
          icon: 'fa fa-circle-o',
          title: 'Blank Page',
          container: [],
          items: [],
          link: ''
        },
        {
          href: 'pages/examples/pace.html',
          icon: 'fa fa-circle-o',
          title: 'Pace Page<',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-share',
      title: 'Multilevel',
      container: [],
      items: [
        {
          href: '#',
          icon: 'fa fa-circle-o',
          title: 'Level One',
          container: [],
          items: [],
          link: ''
        },
        {
          href: '#',
          icon: 'fa fa-circle-o',
          title: 'Level One',
          container: [],
          items: [
            {
              href: '#',
              icon: 'fa fa-circle-o',
              title: 'Level Two',
              container: [],
              items: [],
              link: ''
            },
            {
              href: '#',
              icon: 'fa fa-circle-o',
              title: 'Level Two',
              container: [],
              items: [
                {
                  href: '#',
                  icon: 'fa fa-circle-o',
                  title: 'Level Three',
                  container: [],
                  items: [],
                  link: ''
                },
                {
                  href: '#',
                  icon: 'fa fa-circle-o',
                  title: 'Level Three',
                  container: [],
                  items: [],
                  link: ''
                }
              ],
              link: ''
            }
          ],
          link: ''
        },
        {
          href: '#',
          icon: 'fa fa-circle-o',
          title: 'Level One',
          container: [],
          items: [],
          link: ''
        }
      ],
      link: ''
    },
    // TODO: not use treeview
    {
      href: 'documentation/index.html',
      icon: 'fa fa-book',
      title: 'Documentation',
      container: [],
      items: [],
      link: ''
    },
    // TODO: not use treeview
    {
      title: 'LABELS',
      header: true
    },
    {
      href: '#',
      icon: 'fa fa-circle-o text-red',
      title: 'Important',
      container: [],
      items: [],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-circle-o text-yellow',
      title: 'Warning',
      container: [],
      items: [],
      link: ''
    },
    {
      href: '#',
      icon: 'fa fa-circle-o text-aqua',
      title: 'Information',
      container: [],
      items: [],
      link: ''
    },
  ];

  public onClickMenu(event:Event, index: number):void {
    event.preventDefault();
    event.stopPropagation();

    if('active' in this.menuItems[index] && this.menuItems[index].items.length > 0){
      this.menuItems[index].active = !this.menuItems[index].active;
    } else {
      this.menuItems[index].active = true;
    }

    console.log(event.target);
    console.log(index);
  }

  public onClickMenuPrevent(event:Event, index: number):void {
    event.preventDefault();

    console.log(event.target);
    console.log(index);
  }

  public onClickMenuSelect(event:Event, item: MenuItem):void {
    event.preventDefault();
    event.stopPropagation();

    this._smExchangeService.openMenu(this.currentItem);
    item.active = true;

  }

  public constructor(private _smExchangeService:SidebarMenuExchangeService) {

  }

  private recursiveSelect(item: MenuItem, menuItems: Array<MenuItem>):boolean {
    let result: boolean = false;
    for(let i=0; i < menuItems.length; i++){
      result = this.recursiveSelect(item, menuItems[i].items);
      if(menuItems[i] === item){
        result = true;
      };
      menuItems[i].active = result;
    };
    return result;
  }

  ngOnInit() {
    if(!this.currentItem){
      this._smExchangeService.openMenuSubject.subscribe((item:MenuItem) => {
        this.recursiveSelect(item, this.menuItems);
      });
    }
  }

}
