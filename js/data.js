new Vue({
  el: '#resume',
  data: {
  	img : 'free.jpg',
    name: '马钊有',
    email: 'mazhaoyou_gis@163.com',
    phone: '18610512608',
    github : 'https://github.com/mazhaoyou',
    github_name : 'mazhaoyou',
    job : '求职意向：H5、前端工程师  ',
    education_ba : '教育背景',
    education : [{
    	school : '哈尔滨师范大学',
    	region : '哈尔滨',
    	time : '2012-2016',
    	degree : '学士',
    	professional : '地理信息系统(计算机相关专业)',
    	course : '本科',
    }],
    work_experience : '工作经历',
    work_info : [
    	{
    		id : '1',
    		company : '北京新航道教育集团',
	    	region : '北京',
	    	job_position : 'H5、前端工程师',
	    	times : '2018.1~2018.8'
    	},{
    		id : '2',
    		company : '北京穆图科技有限公司',
	    	region : '北京',
	    	job_position : 'H5、前端工程师',
	    	times : '2015.08~2018.01'
    	},

    ],
     skills : '技能',
    skills_info : [
    	{
    		id : '1',
    		name : '语言',
	    	language : 'HTML5/CSS/Javascript/',
    	},
    	{
    		id : '2',
    		name : '框架',
	    	language : 'Jquery/Bootstrap/vue/MUI',
    	},
    	{
    		id : '3',
    		name : '数据库',
	    	language : 'MySql/Oracle ',
    	},
    	{
    		id : '4',
    		name : '前端工具 ',
	    	language : 'webpack',
	    },
	    {
    		id : '5',
    		name : '版本管理 ',
	    	language : 'svn/git',
	    },
	    	{
    		id : '6',
    		name : '其他',
	    	language : '有高德 API、百度 API 开发经验',
    	},
    ],
    project_experience : '项目经历',
    project_info : [
	     {
    		id : '9',
    		projuct_name : '新航道托福',
    		name : '新航道托福',
	    	job_position : 'Web前端开发',
	    	times : '2018.2－2018.3',
	    	values : [{
	    		info : '运用mui框架/vue',
	    	},{
	    		info : '采用前后端分离以及模板展示',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '项目描述: 此项目我负责切部分图、数据对接，主要实现视频播放、音频播放、真题发布、发布评论、删除评论、给评论点赞、取消点赞、点击收藏、取消收藏等功能',
    	},
	     {
    		id : '8',
    		projuct_name : '新航道雅思',
    		name : '新航道雅思',
	    	job_position : 'Web前端开发',
	    	times : '2018.1~2018.2',
	    	values : [{
	    		info : '运用mui框架/vue',
	    	},{
	    		info : '采用前后端分离以及模板展示',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '使用对象：面向所有准雅思考生。',
    	},
	     {
    		id : '7',
    		projuct_name : '新航道应用中心',
    		name : '新航道应用下载',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~2018.7.01',
	    	values : [{
	    		info : '运用BootStrap/vue',
	    	},{
	    		info : '采用前后端分离以及模板展示',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '',
    	},
	    {
    		id : '6',
    		projuct_name : '电商项目',
    		name : '合伙人项目',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~2018.7.01',
	    	values : [{
	    		info : '运用BootStrap/JQuery/bootstrap table/css3',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '',
    	},
	  {
    		id : '5',
    		projuct_name : '电商项目',
    		name : '猫超OS平台',
	    	job_position : 'Web前端开发',
	    	times : '2018.4.20~2018.7.01',
	    	values : [{
	    		info : '运用BootStrap/JQuery/bootstrap table/css3',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	},{
	    		info : '运用echartjs实现数据可视化',
	    	}],
	    	describe : '',
    	},
    	{
    		id : '4',
    		projuct_name : '企业项目',
    		name : '创元生产平台',
	    	job_position : 'Web前端开发',
	    	times : '2017.12~2018.3',
	    	values : [{
	    		info : '运用BootStrap/JQuery/jsp',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	},{
	    		info : '采用RequreJS前端模块化',
	    	},{
	    		info : '运用echartjs实现数据可视化',
	    	}],
	    	describe : '对客户新增的产品进行专业的维护以及报价、支付凭证审核、对于合同的不同类型的产品进行生产流程分配。',
    	},
    	{
    		id : '3',
    		projuct_name : '企业项目',
    		name : '客户下单平台',
	    	job_position : 'Web前端开发',
	    	times : '2017.10~2017.12',
	    	values : [{
	    		info : '运用BootStrap/JQuery',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	},{
	    		info : '运用echartjs实现数据可视化',
	    	}],
	    	describe : '推广公司生产的单片机产品，解决公司传统的接单方式，通过客户注册，添加客户需要的产品详细信息以及生产相关的文件，客户对自己添加的产品进行下单生成合同，创元成业公司接单生产，对客户的合同需生产的产品进行报价、用户上传支付凭证等以及售后服务。',
    	},
    	{
    		id : '2',
    		projuct_name : '商业项目',
    		name : '工控安全卫士',
	    	job_position : 'Web前端开发',
	    	times : '2017.1~2017.4',
	    	values : [{
	    		info : '运用BootStrap/JQuery/css3',
	    	},{
	    		info : '自定义组件',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	},{
	    		info : '采用RequreJS前端模块化',
	    	},{
	    		info : '运用echartjs/gojs实现数据可视化',
	    	}],
	    	describe : '类似杀毒软件网络安全管理',
    	},
    	{
    		id : '1',
    		projuct_name : '商业项目',
    		name : '工控卫士集中管理平台',
	    	job_position : 'Web前端开发',
	    	times : '2016.10~2017.1',
	    	values : [{
	    		info : '运用angular框架',
	    	},{
	    		info : '自定义组件',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	},{
	    		info : '采用RequreJS/NodeJS前端模块化',
	    	},{
	    		info : '开发过程中解决了很多问题，如跨域问题等',
	    	}],
	    	describe : '针对传统的工业进行网络安全管理',
    	}
    ],
    person_product : '个人项目',
    person_info : [
    	{
    		id : '1',
    		name : '购物商场',
	    	job_position : 'vue全家桶',
	    	times : '2018.9~2018.10',
	    	info : '使用vue/vue-router/vue-loader/webpack',
    	},
    	
    ],
   
    other : '其他',
    other_list : [
    	{
    		id : '1',
    		name : 'github',
	    	language : 'CSDN: https://blog.csdn.net/qq_24343389 ',
    	},
    	{
    		id : '2',
    		name : 'CSDN博客',
	    	language : 'https://github.com/mazhaoyou',
    	}
    ],
    selfEvaluation : '个人评价',
    selfEvaluation_list : [
    	{
    		id : '1',
    		name : '1',
	    	describe : '为人乐观进取，认真细心。对工作严谨负责，能承受工作压力。',
    	},
    	{
    		id : '2',
    		name : '2',
	    	describe: '性格沉稳，逻辑思维能力较强，能快速学习并掌握新技术，有较强的分析问题与解决问题的能力。',
    	},
    	{
    		id : '3',
    		name : '3',
	    	describe : '热爱计算机软件事业，对IT领域的软件开发和设计工作有浓厚的兴趣，希望可以在这个行业长久发展。',
    	}
    ]
  }
})
