const t = {}

t.loading = '加载中...'

t.brand = {}
t.brand.lg = '人人微服务平台'
t.brand.mini = '人人'

t.add = '新增'
t.delete = '删除'
t.deleteBatch = '批量删除'
t.update = '修改'
t.query = '查询'
t.export = '导出'
t.handle = '操作'
t.confirm = '确定'
t.cancel = '取消'
t.logout = '退出'

t.prompt = {}
t.prompt.title = '提示'
t.prompt.info = '确定进行[{handle}]操作?'
t.prompt.success = '操作成功'
t.prompt.failed = '操作失败'
t.prompt.deleteBatch = '请选择删除项'

t.validate = {}
t.validate.required = '必填项不能为空'
t.validate.format = '{attr}格式错误'

t.fullscreen = {}
t.fullscreen.prompt = '您的浏览器不支持此操作'

t.updatePassword = {}
t.updatePassword.title = '修改密码'
t.updatePassword.username = '账号'
t.updatePassword.password = '原密码'
t.updatePassword.newPassword = '新密码'
t.updatePassword.comfirmPassword = '确认密码'
t.updatePassword.validate = {}
t.updatePassword.validate.comfirmPassword = '确认密码与新密码输入不一致'

t.contentTabs = {}
t.contentTabs.closeCurrent = '关闭当前标签页'
t.contentTabs.closeOther = '关闭其它标签页'
t.contentTabs.closeAll = '关闭全部标签页'

/* 页面 */
t.notFound = {}
t.notFound.desc = '抱歉！您访问的页面<em>失联</em>啦...'
t.notFound.back = '上一页'
t.notFound.home = '首页'

t.login = {}
t.login.title = '登录'
t.login.username = '用户名'
t.login.password = '密码'
t.login.captcha = '验证码'
t.login.demo = '在线演示'
t.login.copyright = '人人开源'

t.home = {}
t.home.desc = {}
t.home.desc.title = '项目介绍'
t.home.desc.list = [
  'Renren-cloud人人微服务平台，是基于Spring Cloud打造的微服务平台，为企业提供一站式微服务解决方案',
  '基于最新的Spring Cloud Finchley.SR1、Spring Cloud Gateway、Spring Boot 2.0、Mybatis、Element 2.0+开发',
  '代码风格优雅简洁、通俗易懂，且符合《阿里巴巴Java开发手册》规范要求，可作为企业代码规范',
  '优秀的菜单功能权限，前端可灵活控制页面及按钮的展示，后端可对未授权的请求进行拦截',
  '优秀的数据权限管理，只需增加相应注解，无需其他任何代码，即可实现数据过滤，达到数据权限目的',
  '灵活的角色权限管理，新增角色时，角色权限只能是创建者权限的子集，可有效防止权限越权',
  '灵活的日志管理，可查看登录日志、操作日志、异常日志，方便审计及BUG定位',
  '灵活的国际化配置，目前已支持简体中文、繁体中文、English，如需增加新语言，只需增加新语言[i18n]文件即可',
  '灵活的前端动态路由，新增页面无需修改路由文件，也可在页面动态新增tab标签'
]
t.home.help = {}
t.home.help.title = '获取帮助'
t.home.help.list = [
  '官方社区：<a href="https://www.renren.io/community" target="_blank">https://www.renren.io/community</a>',
  '前端Git地址：<a href="https://gitee.com/renrenio/renren-cloud-admin" target="_blank">https://gitee.com/renrenio/renren-cloud-admin</a>',
  '后端Git地址：<a href="https://gitee.com/renrenio/renren-cloud" target="_blank">https://gitee.com/renrenio/renren-cloud</a>',
  '如需关注项目最新动态，请Watch、Star项目，同时也是对项目最好的支持'
]

/* 模块 */
t.dept = {}
t.dept.name = '名称'
t.dept.parentName = '上级部门'
t.dept.sort = '排序'
t.dept.parentNameDefault = '一级部门'

t.dict = {}
t.dict.dictName = '名称'
t.dict.dictType = '类型'
t.dict.dictValue = '值'
t.dict.sort = '排序'
t.dict.remark = '备注'
t.dict.createDate = '创建时间'

t.logError = {}
t.logError.module = '模块名称'
t.logError.requestUri = '请求URI'
t.logError.requestMethod = '请求方式'
t.logError.requestParams = '请求参数'
t.logError.ip = '操作IP'
t.logError.userAgent = '用户代理'
t.logError.createDate = '创建时间'
t.logError.errorInfo = '异常信息'

t.logLogin = {}
t.logLogin.createrName = '用户名'
t.logLogin.status = '状态'
t.logLogin.status0 = '失败'
t.logLogin.status1 = '成功'
t.logLogin.status2 = '账号已锁定'
t.logLogin.operation = '操作类型'
t.logLogin.operation0 = '登录'
t.logLogin.operation1 = '退出'
t.logLogin.ip = '操作IP'
t.logLogin.userAgent = 'User-Agent'
t.logLogin.createDate = '创建时间'

t.logOperation = {}
t.logOperation.module = '模块名称'
t.logOperation.status = '状态'
t.logOperation.status0 = '失败'
t.logOperation.status1 = '成功'
t.logOperation.createrName = '用户名'
t.logOperation.operation = '用户操作'
t.logOperation.requestUri = '请求URI'
t.logOperation.requestMethod = '请求方式'
t.logOperation.requestParams = '请求参数'
t.logOperation.requestTime = '请求时长'
t.logOperation.ip = '操作IP'
t.logOperation.userAgent = 'User-Agent'
t.logOperation.createDate = '创建时间'

t.menu = {}
t.menu.name = '名称'
t.menu.icon = '图标'
t.menu.type = '类型'
t.menu.type0 = '菜单'
t.menu.type1 = '按钮'
t.menu.sort = '排序'
t.menu.url = '路由'
t.menu.permissions = '授权标识'
t.menu.permissionsTips = '如: sys:menu:save'
t.menu.parentName = '上级菜单'
t.menu.parentNameDefault = '一级菜单'
t.menu.resource = '授权资源'
t.menu.resourceUrl = '资源URL'
t.menu.resourceMethod = '请求方式'
t.menu.resourceAddItem = '添加一项'

t.params = {}
t.params.paramCode = '编码'
t.params.paramValue = '值'
t.params.remark = '备注'

t.role = {}
t.role.name = '名称'
t.role.remark = '备注'
t.role.createDate = '创建时间'
t.role.menuList = '菜单授权'
t.role.deptList = '数据授权'

t.user = {}
t.user.username = '用户名'
t.user.deptName = '所属部门'
t.user.email = '邮箱'
t.user.mobile = '手机号'
t.user.status = '状态'
t.user.status0 = '停用'
t.user.status1 = '正常'
t.user.createDate = '创建时间'
t.user.password = '密码'
t.user.comfirmPassword = '确认密码'
t.user.realName = '真实姓名'
t.user.gender = '性别'
t.user.gender0 = '男'
t.user.gender1 = '女'
t.user.gender2 = '保密'
t.user.roleIdList = '角色配置'
t.user.validate = {}
t.user.validate.comfirmPassword = '确认密码与密码输入不一致'

export default t
