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
        key: 'products',
        path: `${APP_PREFIX_PATH}/products`,
        title: 'Products',
        icon: TagOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'products-list',
            path: `${APP_PREFIX_PATH}/products/`,
            title: 'product list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-product',
            path: `${APP_PREFIX_PATH}/products/add`,
            title: 'add product',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'categories',
        path: `${APP_PREFIX_PATH}/categories`,
        title: 'categories',
        icon: TagOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'categories-list',
            path: `${APP_PREFIX_PATH}/categories/`,
            title: 'category list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-category',
            path: `${APP_PREFIX_PATH}/categories/add`,
            title: 'add category',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'withdrawals',
        path: `${APP_PREFIX_PATH}/withdrawals`,
        title: 'Withdrawals',
        icon: MoneyCollectOutlined,
        breadcrumb: false,
        submenu: []
      },
      {
        key: 'claims',
        path: `${APP_PREFIX_PATH}/claims`,
        title: 'Claims',
        icon: FileExclamationOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'claims-list',
            path: `${APP_PREFIX_PATH}/claims`,
            title: 'claim list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-claim',
            path: `${APP_PREFIX_PATH}/claims/add`,
            title: 'add claim',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'renters',
        path: `${APP_PREFIX_PATH}/renters`,
        title: 'Renters',
        icon: UserSwitchOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'renters-list',
            path: `${APP_PREFIX_PATH}/renters`,
            title: 'renter list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-renter',
            path: `${APP_PREFIX_PATH}/renters/add`,
            title: 'add renter',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'lenders',
        path: `${APP_PREFIX_PATH}/lenders`,
        title: 'Lenders',
        icon: UserSwitchOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'lenders-list',
            path: `${APP_PREFIX_PATH}/lenders`,
            title: 'lender list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-lender',
            path: `${APP_PREFIX_PATH}/lenders/add`,
            title: 'add lender',
            icon: '',
            breadcrumb: false,
            submenu: []
          }
        ]
      },
      {
        key: 'admins',
        path: `${APP_PREFIX_PATH}/admins`,
        title: 'Admins',
        icon: UserSwitchOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: 'admins-list',
            path: `${APP_PREFIX_PATH}/admins`,
            title: 'admin list',
            icon: '',
            breadcrumb: false,
            submenu: []
          },
          {
            key: 'add-admin',
            path: `${APP_PREFIX_PATH}/admins/add`,
            title: 'add admin',
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
      {
        key: 'signout',
        path: `/signout`,
        title: 'sign out',
        icon: PoweroffOutlined,
        breadcrumb: false,
        submenu: []
      },
    ]
  }, 
]

const navigationConfig = {
  dashBoardNavTree
}

export default navigationConfig;
