import { 
  DashboardOutlined,
  UserSwitchOutlined,
  ShoppingOutlined,
  TagOutlined,
  MoneyCollectOutlined,
  UserOutlined, 
  LockOutlined,
  PoweroffOutlined,
  FileExclamationOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from './AppConfig'

const dashBoardNavTree = [
  {
    key: 'adminDashboard',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'Admin Dashboard',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'events',
        path: `${APP_PREFIX_PATH}/events`,
        title: 'Events',
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'teams',
        path: `${APP_PREFIX_PATH}/teams`,
        title: 'Products',
        icon: TagOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'teams-list',
            path: `${APP_PREFIX_PATH}/teams/`,
            title: 'product list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-product',
            path: `${APP_PREFIX_PATH}/teams/add`,
            title: 'add product',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'profile',
        path: `${APP_PREFIX_PATH}/profile`,
        title: 'Profile',
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'edit-profile',
            path: `${APP_PREFIX_PATH}/profile/edit-profile`,
            title: 'Edit Profile',
            icon: UserOutlined,
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'change-password',
            path: `${APP_PREFIX_PATH}/profile/change-password`,
            title: 'Change Password',
            icon: LockOutlined,
            breadcrumb: false,
            submenu: []
          },
        ]
      },
    ]
  }, 
]

const navigationConfig = {
  dashBoardNavTree
}

export default navigationConfig;
