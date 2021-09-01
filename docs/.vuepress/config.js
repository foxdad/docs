// 注意: base的值为github仓库的名称
module.exports = {
  base: '/docs/', /* 基础虚拟路径: */
  dest: 'dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '小狐的档案资料', // 标题
  description: '学习笔记', // 标题下的描述
  themeConfig: { // 主题配置
    sidebar: [ // 左侧导航
      {
        title: 'GO语言学习', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'doc/go/Go环境安装配置',
          'doc/go/Go基础-变量和常量',
          'doc/go/GO基础-基本数据类型',
          'doc/go/GO语言基础之运算符',
          'doc/go/Go语言基础之流程控制',
          'doc/go/Go语言基础之数组',
          // 'doc/go/ Go语言基础之map',
          'doc/go/Go语言基础之切片',
          'doc/go/Go语言基础之指针',
          'doc/go/Go语言基础之结构体',
          'doc/go/Go语言基础之函数',
          'doc/go/Go语言基础之接口',
          'doc/go/Go语言基础之包'
        ]
      },
      // {
      //   title: 'TypeScript 常用语法',
      //   collapsable: false,
      //   children: [
      //     'doc/1_type',
      //   ]
      // },
    ]
  }
}