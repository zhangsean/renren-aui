const t = {}

t.loading = '加載中...'

t.brand = {}
t.brand.lg = '人人微服務平台'
t.brand.mini = '人人'

t.add = '新增'
t.delete = '刪除'
t.deleteBatch = '批量刪除'
t.update = '修改'
t.query = '查詢'
t.export = '導出'
t.handle = '操作'
t.confirm = '確定'
t.cancel = '取消'
t.logout = '退出'

t.prompt = {}
t.prompt.title = '提示'
t.prompt.info = '確定進行[{handle}]操作?'
t.prompt.success = '操作成功'
t.prompt.failed = '操作失敗'
t.prompt.deleteBatch = '請選擇刪除項'

t.validate = {}
t.validate.required = '必填項不能為空'
t.validate.format = '{attr}格式錯誤'

t.fullscreen = {}
t.fullscreen.prompt = '您的瀏覽器不支持此操作'

t.updatePassword = {}
t.updatePassword.title = '修改密碼'
t.updatePassword.username = '賬號'
t.updatePassword.password = '原密碼'
t.updatePassword.newPassword = '新密碼'
t.updatePassword.comfirmPassword = '確認密碼'
t.updatePassword.validate = {}
t.updatePassword.validate.comfirmPassword = '確認密碼與新密碼輸入不一致'

t.contentTabs = {}
t.contentTabs.closeCurrent = '關閉當前標籤頁'
t.contentTabs.closeOther = '關閉其它標籤頁'
t.contentTabs.closeAll = '關閉全部標籤頁'

/* 頁面 */
t.notFound = {}
t.notFound.desc = '抱歉！您訪問的頁面<em>失聯</em>啦...'
t.notFound.back = '上一頁'
t.notFound.home = '首頁'

t.login = {}
t.login.title = '登錄'
t.login.username = '用戶名'
t.login.password = '密碼'
t.login.captcha = '驗證碼'
t.login.demo = '在線演示'
t.login.copyright = '人人開源'

t.home = {}
t.home.desc = {}
t.home.desc.title = '項目介紹'
t.home.desc.list = [
  '人人微服務平台(renren-cloud)，是基於Spring Cloud打造的微服務平台，為企業提供一站式微服務解決方案',
  '基於最新的Spring Cloud Finchley.SR1、Spring Cloud Gateway、Spring Boot 2.0、Mybatis、Element 2.0+開發',
  '代碼風格優雅簡潔、通俗易懂，且符合《阿里巴巴Java開發手冊》規範要求，可作為企業代碼規範',
  '優秀的菜單功能權限，前端可靈活控制頁面及按鈕的展示，後端可對未授權的請求進行攔截',
  '優秀的數據權限管理，只需增加相應註解，無需其他任何代碼，即可實現數據過濾，達到數據權限目的',
  '靈活的角色權限管理，新增角色時，角色權限只能是創建者權限的子集，可有效防止權限越權',
  '靈活的日誌管理，可查看登錄日誌、操作日誌、異常日誌，方便審計及BUG定位',
  '靈活的國際化配置，目前已支持簡體中文、繁體中文、English，如需增加新語言，只需增加新語言[i18n]文件即可',
  '靈活的前端動態路由，新增頁面無需修改路由文件，也可在頁面動態新增tab標籤'
]
t.home.help = {}
t.home.help.title = '獲取幫助'
t.home.help.list = [
  '官方社區：<a href="https://www.renren.io/community" target="_blank">https://www.renren.io/community</a>',
  '前端Git地址：<a href="https://gitee.com/renrenio/renren-cloud-admin" target="_blank">https://gitee.com/renrenio/renren-cloud-admin</a >',
  '後端Git地址：<a href="https://gitee.com/renrenio/renren-cloud" target="_blank">https://gitee.com/renrenio/renren-cloud</a>',
  '如需關注項目最新動態，請Watch、Star項目，同時也是對項目最好的支持'
]

/* 模塊 */
t.dept = {}
t.dept.name = '名稱'
t.dept.parentName = '上級部門'
t.dept.sort = '排序'
t.dept.parentNameDefault = '一級部門'

t.dict = {}
t.dict.dictName = '名稱'
t.dict.dictType = '類型'
t.dict.dictValue = '值'
t.dict.sort = '排序'
t.dict.remark = '備註'
t.dict.createDate = '創建時間'

t.logError = {}
t.logError.module = '模塊名稱'
t.logError.requestUri = '請求URI'
t.logError.requestMethod = '請求方式'
t.logError.requestParams = '請求參數'
t.logError.ip = '操作IP'
t.logError.userAgent = '用戶代理'
t.logError.createDate = '創建時間'
t.logError.errorInfo = '異常信息'

t.logLogin = {}
t.logLogin.createrName = '用戶名'
t.logLogin.status = '狀態'
t.logLogin.status0 = '失敗'
t.logLogin.status1 = '成功'
t.logLogin.status2 = '賬號已鎖定'
t.logLogin.operation = '操作類型'
t.logLogin.operation0 = '登錄'
t.logLogin.operation1 = '退出'
t.logLogin.ip = '操作IP'
t.logLogin.userAgent = 'User-Agent'
t.logLogin.createDate = '創建時間'

t.logOperation = {}
t.logOperation.module = '模塊名稱'
t.logOperation.status = '狀態'
t.logOperation.status0 = '失敗'
t.logOperation.status1 = '成功'
t.logOperation.createrName = '用戶名'
t.logOperation.operation = '用戶操作'
t.logOperation.requestUri = '請求URI'
t.logOperation.requestMethod = '請求方式'
t.logOperation.requestParams = '請求參數'
t.logOperation.requestTime = '請求時長'
t.logOperation.ip = '操作IP'
t.logOperation.userAgent = 'User-Agent'
t.logOperation.createDate = '創建時間'

t.menu = {}
t.menu.name = '名稱'
t.menu.icon = '圖標'
t.menu.type = '類型'
t.menu.type0 = '菜單'
t.menu.type1 = '按鈕'
t.menu.sort = '排序'
t.menu.url = '路由'
t.menu.permissions = '授權標識'
t.menu.permissionsTips = '如: sys:menu:save'
t.menu.parentName = '上級菜單'
t.menu.parentNameDefault = '一級菜單'
t.menu.resource = '授權資源'
t.menu.resourceUrl = '資源URL'
t.menu.resourceMethod = '請求方式'
t.menu.resourceAddItem = '添加一項'

t.params = {}
t.params.paramCode = '編碼'
t.params.paramValue = '值'
t.params.remark = '備註'

t.role = {}
t.role.name = '名稱'
t.role.remark = '備註'
t.role.createDate = '創建時間'
t.role.menuList = '菜單授權'
t.role.deptList = '數據授權'

t.user = {}
t.user.username = '用戶名'
t.user.deptName = '所屬部門'
t.user.email = '郵箱'
t.user.mobile = '手機號'
t.user.status = '狀態'
t.user.status0 = '停用'
t.user.status1 = '正常'
t.user.createDate = '創建時間'
t.user.password = '密碼'
t.user.comfirmPassword = '確認密碼'
t.user.realName = '真實姓名'
t.user.gender = '性別'
t.user.gender0 = '男'
t.user.gender1 = '女'
t.user.gender2 = '保密'
t.user.roleIdList = '角色配置'
t.user.validate = {}
t.user.validate.comfirmPassword = '確認密碼與密碼輸入不一致'

export default t
