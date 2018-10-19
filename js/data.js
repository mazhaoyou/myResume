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
    expected_salary:'期望薪资：22k(可谈)',
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
    		id : '1',
    		projuct_name : '新航道托福',
    		name : '新航道托福',
	    	job_position : '个人职责：Web前端开发',
	    	times : '2018.1－2018.2',
	    	values : [{
	    		info : '运用mui框架、vue',
	    	},{
	    		info : '采用前后端分离以及模板展示',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '项目描述: 此项目我负责切部分图、数据对接，主要实现视频播放、音频播放、真题发布、发布评论、删除评论、给评论点赞、取消点赞、点击收藏、取消收藏等功能',
    	},
	     {
    		id : '2',
    		projuct_name : '新航道雅思',
    		name : '新航道雅思',
	    	job_position : '个人职责：Web前端开发',
	    	times : '2018.2~2018.3',
	    	values : [{
	    		info : '运用mui框架、vue',
	    	},{
	    		info : '采用前后端分离以及模板展示',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '使用对象：面向所有准雅思考生。',
    	},
	     {
    		id : '3',
    		projuct_name : '新航道应用中心',
    		name : '新航道应用下载',
	    	job_position : '个人职责：Web前端开发',
	    	times : '2018.3.~2018.4',
	    	values : [{
	    		info : '运用H5、css、BootStrap、vue',
	    	},{
	    		info : '采用前后端分离以及模板展示',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '',
    	},
	    {
    		id : '4',
    		projuct_name : '519雅思节',
    		name : '519雅思节',
	    	job_position : '个人职责：Web前端开发',
	    	times : '2018.4－2018.5',
	    	values : [{
	    		info : '运用H5、CSS3、jquery、vue',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	}],
	    	describe : '该项目主要由首页、战队选择、我的战队、我的战绩、邀请好友、邀好友助力等几个模块组成，操作流程为 首次进入活动界面（H5界面通过该微信、QQ、APP进去）完成登录，在首页选择战区，选择完战区进入战队选择界面选择已选择战区自己中意的战队，加入战队不能以后修改，以后每次进入我的战队为首页。',
    	},
	  {
    		id : '5',
    		projuct_name : '混合学习',
    		name : '混合学习',
	    	job_position : '个人职责：Web前端开发',
	    	times : '2018.5—2018.8',
	    	values : [{
	    		info : 'H5、运用BootStrap、JQuery、bootstrap、css3、canvas',
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
    		id : '6',
    		projuct_name : '宁夏智慧体育',
    		name : '宁夏智慧体育',
	    	job_position : '个人职责:Web前端开发、参与设计、切图、数据对接、发布',
	    	times : '2017.7－2017.10',
	    	values : [{
	    		info : '运用H5、css3、mui、vue、',
	    	},{
	    		info : '采用前后端分离',
	    	},{
	    		info : '采用JSON/AJAX数据交互',
	    	},{
	    		info : '运用echartjs实现数据可视化',
	    	}],
	    	describe : '项目描述: 此项目移动 app 模块由我负责，主要实现通知类数据展示、项目申报、创建团队发起约战、通过微信、qq等分享约战、接受别发发起的约战、展示约战最终结果、体育地图（周边体育场馆展示）、在线体育场馆预定等功能',
    	}
    ],
    person_product : '个人项目',
    person_info : [
    	{
    		id : '1',
    		name : '购物商场',
	    	times : '2018.9~2018.10',
	    	info : '使用vue、vue-router、vue-loader、webpack',
	    	job_position : '个人职责：web前端开发',
    	},
    	
    ],
   
    other : '其他',
    other_list : [
    	{
    		id : '1',
    		name : 'github',
	    	language : 'https://github.com/mazhaoyou',
    	},
    	{
    		id : '2',
    		name : 'CSDN博客',
	    	language : 'https://blog.csdn.net/qq_24343389 ',
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
    ],
   thanks:  "致谢 感谢您花时间阅读我的简历，期待能有机会和您共事。"
  }
})
