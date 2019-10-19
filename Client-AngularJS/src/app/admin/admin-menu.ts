import { NbMenuItem } from '@nebular/theme';
import { Permission } from '../models/permission.model';
export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/admin/dashboard'
  },
  
  {
    title: 'Partners',
    icon: 'people-outline',
    link: ''
  },

  {
    title: 'Subscribers',
    icon: 'person-done-outline',
    link: '',
    children: [
      {
        title: 'Company Management',
        icon: '',
        link: ''
      },
      {
        title: 'Branch Management',
        icon: '',
        link: ''
      },
      {
        title: 'Business Management',
        icon: '',
        link: ''
      },
      {
        title: 'User Management',
        icon: '',
        link: ''
      },
      {
        title: 'Product Management',
        icon: '',
        link: '',
        children: [
          {
            title: 'Product Category',
            icon: '',
            link: '',
          },
          {
            title: 'Product',
            icon: '',
            link: '',
          }
        ]
      },
      {
        title: 'Menu Management',
        icon: '',
        link: ''
      },
      {
        title: 'Stock Management',
        icon: '',
        link: '',
        children: [
          {
            title: 'Stock',
            icon: '',
            link: '',
          },
          {
            title: 'Stock Return',
            icon: '',
            link: '',
          },
          {
            title: 'Stock Take',
            icon: '',
            link: '',
          },
          {
            title: 'Stock Transfer',
            icon: '',
            link: '',
          },
          {
            title: 'Purchase Order',
            icon: '',
            link: '',
          },
        ]
      },
      {
        title: 'Table Management',
        icon: '',
        link: ''
      },
      {
        title: 'ReportManagement',
        icon: '',
        link: ''
      },
      {
        title: 'Customer Management',
        icon: '',
        link: ''
      },
      {
        title: 'Supplier Management',
        icon: '',
        link: ''
      },
      {
        title: 'Staff Management',
        icon: '',
        link: ''
      },
      {
        title: 'Pos System Management',
        icon: '',
        link: '',
        children: [
          {
            title: 'Tax Configurations',
            icon: '',
            link: '',
          },
          {
            title: 'Payment Methods',
            icon: '',
            link: '',
          },
          {
            title: 'Receipt Configurations',
            icon: '',
            link: '',
          },
          {
            title: 'Notification Templates',
            icon: '',
            link: '',
          },
          {
            title: 'Printers',
            icon: '',
            link: '',
          },
        ]
      },
    ],
  },

  {
    title: 'Setting Enablement',
    icon: 'settings-2-outline',
    link: '',
    children : [
      {
        title: 'Business Plans Enablement',
        icon: '',
        link: ''
      },
      {
        title: 'POS System Settings',
        icon: '',
        link: ''
      },
      {
        title: 'Enablement',
        icon: '',
        link: ''
      },
    ],
  },

  {
    title: 'Billing',
    icon: 'layers-outline',
    link: ''
  },
  
  {
    title: 'Users',
    icon: 'person-outline',
    link: '/admin/user',
    data: Permission.UserView,
    children: [
      {
        title: 'All Registered Users',
        icon: '',
        link: '/admin/user/registered',
        data: Permission.UserView,
      },
      {
        title: 'User Sessions List',
        icon: '',
        link: '/admin/user/sessions-list',
        data: Permission.UserView,
      },
      {
        title: 'User Session Report',
        icon: '',
        link: '/admin/user/session-report',
        data: Permission.UserView,
      },
    ],
  },
  {
    title: 'Roles',
    icon: 'lock-outline',
    link: '/admin/role',
    data: Permission.RoleView,
  },
];
