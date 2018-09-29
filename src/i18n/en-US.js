const t = {}

t.loading = 'Loading...'

t.brand = {}
t.brand.lg = 'Renren Cloud'
t.brand.mini = 'RC'

t.add = 'Add'
t.delete = 'Delete'
t.deleteBatch = 'Batch Delete'
t.update = 'Modify'
t.query = 'Query'
t.export = 'Export'
t.handle = 'Action'
t.confirm = 'Confirm'
t.cancel = 'Cancel'
t.logout = 'Sign Out'

t.prompt = {}
t.prompt.title = 'Prompt'
t.prompt.info = 'Confirm to carry out [{handle}] operation?'
t.prompt.success = 'Succeeded'
t.prompt.failed = 'Failed'
t.prompt.deleteBatch = 'Please select delete item'

t.validate = {}
t.validate.required = 'Required field cannot be empty'
t.validate.format = '{attr} format error'

t.fullscreen = {}
t.fullscreen.prompt = 'Your browser does not support this operation'

t.updatePassword = {}
t.updatePassword.title = 'Change Password'
t.updatePassword.username = 'Account'
t.updatePassword.password = 'Original'
t.updatePassword.newPassword = 'New Password'
t.updatePassword.comfirmPassword = 'Confirm'
t.updatePassword.validate = {}
t.updatePassword.validate.comfirmPassword = 'Confirm password is not consistent with new password input'

t.contentTabs = {}
t.contentTabs.closeCurrent = 'Close Current Tab'
t.contentTabs.closeOther = 'Close Other Tabs'
t.contentTabs.closeAll = 'Close All Tabs'

/* pages */
t.notFound = {}
t.notFound.desc = 'Sorry! <em>missing</em> on the page you visited...'
t.notFound.back = 'Previous Page'
t.notFound.home = 'Home'

t.login = {}
t.login.title = 'Sign In'
t.login.username = 'Username'
t.login.password = 'Password'
t.login.captcha = 'Verification Code'
t.login.demo = 'Demo'
t.login.copyright = 'Renren'

t.home = {}
t.home.desc = {}
t.home.desc.title = 'Project introduction'
t.home.desc.list = [
  'Renren-cloud is a micro service platform based on Spring cloud, providing enterprises with one-stop micro service solutions',
  'Based on the latest development of Spring Cloud finchley.sr1, Spring Cloud Gateway, Spring Boot 2.0, Mybatis, Element 2.0+',
  'The code style is elegant and simple, easy to understand, and meets the specification requirements of "alibaba Java development manual", which can be used as enterprise code specification',
  'Excellent menu function permissions, the front end can flexibly control the display of pages and buttons, and the back end can intercept unauthorized requests',
  'Good data access management, just add corresponding annotations without any other code, can achieve data filtering, data access purposes',
  'Flexible role permission management. When adding a role, the role permission can only be a subset of the creator permission, which can effectively prevent the permission from exceeding the authority',
  'Flexible log management, can view log, operation log, exception log, easy to audit and BUG location',
  'The flexible internationalization configuration supports simplified Chinese, traditional Chinese and English. If you need to add a new language, you only need to add a new language [i18n] file',
  'Flexible front-end dynamic routing, new pages do not need to modify the routing file, can also dynamically add TAB tags in the page'
]
t.home.help = {}
t.home.help.title = 'Get help'
t.home.help.list = [
  'Renren community：<a href="https://www.renren.io/community" target="_blank">https://www.renren.io/community</a>',
  'Front-end Git address：<a href="https://gitee.com/renrenio/renren-cloud-admin" target="_blank">https://gitee.com/renrenio/renren-cloud-admin</a>',
  'Back-end Git address：<a href="https://gitee.com/renrenio/renren-cloud" target="_blank">https://gitee.com/renrenio/renren-cloud</a>',
  'If you need to pay attention to the latest development of the project, please Watch and Star project, which is also the best support for the project'
]

/* modules */
t.dept = {}
t.dept.name = 'Name'
t.dept.parentName = 'Superior'
t.dept.sort = 'Sort'
t.dept.parentNameDefault = 'Top Department'

t.dict = {}
t.dict.dictName = 'Name'
t.dict.dictType = 'Type'
t.dict.dictValue = 'Value'
t.dict.sort = 'Sort'
t.dict.remark = 'Remarks'
t.dict.createDate = 'Create Date'

t.logError = {}
t.logError.module = 'Module Name'
t.logError.requestUri = 'Request URI'
t.logError.requestMethod = 'Request Method'
t.logError.requestParams = 'Request Parameters'
t.logError.ip = 'IP'
t.logError.userAgent = 'User Agent'
t.logError.createDate = 'Create Date'
t.logError.errorInfo = 'Exception'

t.logLogin = {}
t.logLogin.createrName = 'Username'
t.logLogin.status = 'Status'
t.logLogin.status0 = 'Failed'
t.logLogin.status1 = 'Success'
t.logLogin.status2 = 'Locked'
t.logLogin.operation = 'User Action'
t.logLogin.operation0 = 'Login'
t.logLogin.operation1 = 'Exit'
t.logLogin.ip = 'IP'
t.logLogin.userAgent = 'User-Agent'
t.logLogin.createDate = 'Create Date'

t.logOperation = {}
t.logOperation.module = 'Module Name'
t.logOperation.status = 'Status'
t.logOperation.status0 = 'Failed'
t.logOperation.status1 = 'Success'
t.logOperation.createrName = 'Username'
t.logOperation.operation = 'User Action'
t.logOperation.requestUri = 'Request URI'
t.logOperation.requestMethod = 'Request Mode'
t.logOperation.requestParams = 'Request Parameters'
t.logOperation.requestTime = 'Request Duration'
t.logOperation.ip = 'IP'
t.logOperation.userAgent = 'User-Agent'
t.logOperation.createDate = 'Create Date'

t.menu = {}
t.menu.name = 'Name'
t.menu.icon = 'Icon'
t.menu.type = 'Type'
t.menu.type0 = 'Menu'
t.menu.type1 = 'Button'
t.menu.sort = 'Sort'
t.menu.url = 'Route'
t.menu.permissions = 'Auth ID'
t.menu.permissionsTips = 'eg: sys:menu:save'
t.menu.parentName = 'Superior'
t.menu.parentNameDefault = 'Top Menu'
t.menu.resource = 'Auth Resources'
t.menu.resourceUrl = 'Resource URL'
t.menu.resourceMethod = 'Request Method'
t.menu.resourceAddItem = 'Add an Item'

t.params = {}
t.params.paramCode = 'Code'
t.params.paramValue = 'Value'
t.params.remark = 'Remarks'

t.role = {}
t.role.name = 'Name'
t.role.remark = 'Remarks'
t.role.createDate = 'Create Date'
t.role.menuList = 'Menu Scope'
t.role.deptList = 'Data Scope'

t.user = {}
t.user.username = 'Username'
t.user.deptName = 'Department'
t.user.email = 'Email'
t.user.mobile = 'Mobile'
t.user.status = 'Status'
t.user.status0 = 'Disable'
t.user.status1 = 'Enable'
t.user.createDate = 'Create Date'
t.user.password = 'Password'
t.user.comfirmPassword = 'Confirm'
t.user.realName = 'Real Name'
t.user.gender = 'Gender'
t.user.gender0 = 'Male'
t.user.gender1 = 'Female'
t.user.gender2 = 'Secure'
t.user.roleIdList = 'Role Config'
t.user.validate = {}
t.user.validate.comfirmPassword = 'Confirm password is not consistent with password input'

export default t
