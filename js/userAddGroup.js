var AddGroup_app = angular.module('AddGroup', []);
AddGroup_app.controller('AddGroupCtrol', function($scope, $http) {
	$scope.administrator={
		"name": 'admin',
		"admin": 'true',
		"surperAdmin":'true'
	};//管理员
	$scope.filterName = ""; //人员过滤
	$scope.groupNameCur=[];//存储名字对象显示值
	$scope.showMenu = []; //存储重命名删除按钮
	$scope.showdPeronSleOpr = []; //存储组选择人员
	$scope.groupAddName = ""; //新建组的名字
	$scope.groupList = [{//分组数据
		"groupName": 'UED',
		"groupNum": 2,
		"list": ['billy', 'grace']
	}, {
		"groupName": 'WE',
		"groupNum": 2,
		"list": ['maya', 'baby']
	}];
	$scope.groupPeron = [{
		"name": 'billy',
		"admin": 'false'
	}, {
		"name": 'grace',
		"admin": 'false'
	}, {
		"name": 'billy',
		"admin": 'false'
	}, {
		"name": 'grace',
		"admin": 'false'
	}, {
		"name": 'billy',
		"admin": 'false'
	}, {
		"name": 'grace',
		"admin": 'false'
	}, {
		"name": 'billy',
		"admin": 'false'
	}];
	$scope.groupPeronSle = [{
		"name": 'billy',
		"admin": 'false'
	}, {
		"name": 'grace',
		"admin": 'true'
	}]; //已选择的人
	//获取数据
	$scope.getGroup = function() {
		//ajax加載數據groupList
		$http({
		url:'',
		method:'GET'
		}).success(function(data,header,config,status){
			//响应成功

			}).error(function(data,header,config,status){
				//处理响应失败
				});
		}
	//发送数据
	$scope.sendGroup = function() {
		//ajax發送數據groupList
		$http({
		method:'POST',
		url:'/',
		data:$scope.groupList
	});
		}
	//显示窗口
	$scope.showWin = false;
	$scope.showAddGroup = function() {
		$scope.showWin = true;
		$scope.groupPeronSle.push($scope.administrator);
	}
	$scope.hideAddGroup = function() {
			$scope.showWin = false;
			$scope.groupPeronSle=[];//初始化
			$scope.groupAddName="";//初始化
		}
	//增加组
	$scope.addGroup = function(valid) {
		alert(valid);
		if(valid){
			
			var name = $scope.groupAddName; //当前组名
			var num = $scope.groupPeronSle.length; //当前组的数量
			var person = [];
			var groupSub = {};
			for (var i = 0; i < num; i++) {
				person.push($scope.groupPeronSle[i].name);
			}
			groupSub.groupName = name;
			groupSub.groupNum = num;
			groupSub.list = person;
			$scope.groupList.push(groupSub);
			$scope.hideAddGroup();
			$scope.sendGroup()//發送數據到後台
			$scope.groupPeronSle=[];//初始化
			$scope.groupAddName="";//初始化
		}
			
		}
	//显示修改組名窗口
	$scope.showGroupName=function(index){
		var status = $scope.groupNameCur[index] !== true;
			$scope.groupNameCur = new Array($scope.groupList.length);
			$scope.groupNameCur[index] = status;
			$scope.groupNamePer=$scope.groupList[index].groupName;
	}
	//显示修改组名值
	$scope.GroupNameValue=function($event){
		//alert($scope.groupNamePer);
	}
	//修改組名
	$scope.reGroupName=function($event,index){
		$scope.showGroupName(index);
		$scope.showSetMenu($event,index);
		
	}
	
	//保存修改組名
	$scope.GroupNameSave=function($event,index){
		$scope.groupNameCur[index]=false;//如果不合法需设置为false
		$scope.groupList[index].groupName=this.groupNamePer;
		$scope.showGroupName(index);
	}
	$scope.GroupNameCan=function($event,index){
		$scope.showGroupName(index);
		
	}
	//选择组员
	$scope.addGroupUser = function(s) {
		//var name=s;
		var person = {}
		person.name = s;
		person.admin = false;
		$scope.groupPeronSle.push(person);
	}
	
	//删除加组
	$scope.deletGroup = function($event, index) {
			$event.stopPropagation();
			$scope.groupList.splice(index, 1);
			//$scope.showGroupName(index);
			$scope.sendGroup()//發送數據到後台
			
		}
	//显示设置当前组
	$scope.showSetMenu = function($event, index) {
			$event.stopPropagation();
			var status = $scope.showMenu[index] !== true;
			$scope.showMenu = new Array($scope.groupList.length);
			$scope.showMenu[index] = status;
		}
	//顯示选择人员操作
	$scope.showSlePersonMenu = function(index) {
		if($scope.groupPeronSle[index].surperAdmin==null){
		var status = $scope.showdPeronSleOpr[index] !== true;
			$scope.showdPeronSleOpr = new Array($scope.groupPeronSle.length);
			$scope.showdPeronSleOpr[index] = status;	
		}
		}
	//设置管理员
	$scope.setAdmin = function(index) {
			var state = $scope.groupPeronSle[index].admin !== true;
			$scope.groupPeronSle[index].admin = state;

		}
	//删除创建组时选择的人员
	$scope.detPersonSle = function(index) {
		if($scope.groupPeronSle[index].surperAdmin==null){
			$scope.groupPeronSle.splice(index, 1);
		}
		
	}
	
	
	/*
	 * start编辑组名
	 */
	$scope.showEditWin = false;
	$scope.grouEditindex = "";//当前编辑组的序号
	$scope.grouEditName = "";//编辑组的名字
	$scope.grouEditLists = []; //当前编辑组的组员
	$scope.grouEditNum = "";//当前编辑组的组员人数
	//打开编辑组名弹出层
	$scope.ediGroupName=function($event, index){
		$scope.showEditWin = true;
		$scope.showSetMenu($event,index);
		$scope.grouEditLists = [];//清空
		var grouEditName = $scope.groupList[index].groupName;
		var grouEditLists = $scope.groupList[index].list;
		var grouEditNum = $scope.groupList[index].groupNum;
		$scope.grouEditName = grouEditName;
		for(var i=0;i<grouEditLists.length;i++){
			var person={};
			person.name=grouEditLists[i];
			person.admin = "false";
			$scope.grouEditLists.push(person);
		}
		$scope.grouEditNum = grouEditNum;
		$scope.grouEditindex = index;
	}
	//关闭编辑组名弹出层
	$scope.ediGroupNameClose=function(){
		$scope.showEditWin = false;
	}
	//选择组员
	$scope.EditGroupUsers = function(s) {
		var person={};
		person.name = s;
		person.admin = "false";
		$scope.grouEditLists.push(person);
	}
	//删除选中人员
	$scope.EditDelGroupUsers = function(index) {
		$scope.grouEditLists.splice(index, 1);
	}
	//设置管理员
	$scope.setEditAdmin = function(index) {
		var state = $scope.grouEditLists[index].admin !== true;
		$scope.grouEditLists[index].admin = state;
	}
	//确定编辑完成
	$scope.setEditSuccess = function(valid) {
		if(valid){
			var index = $scope.grouEditindex;
			var main = $scope.grouEditLists;
			var p = new Array;
			for(var i=0;i<main.length;i++){
				p.push(main[i].name);
			}
			$scope.groupList[index].list = p;
			$scope.groupList[index].groupNum = main.length;
			$scope.groupList[index].groupName = $scope.grouEditName;
			$scope.ediGroupNameClose();
		}
	}
	

});