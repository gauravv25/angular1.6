
https://onedrive.live.com/?authkey=%21AIBzis3B48cnMsg&id=B799ADB9BA789C8F%21689&cid=B799ADB9BA789C8F

			Angular js


Step1 : install node js

step 2: for verify node installation goto cmd 
	node -v
	npm -v
step 3: install bower
	npm install -g bower

step 4: verify 
	bower -v

step 5: install git (git-scm.com)

step 6: bower install angular --save

step 7: bower init

step 8: bower install jquery --save

Step 9 bower intall jasmine --save-dev

Communication between two controller : 

Publish
		$emit()

		$broadcast()
Subscibe
		$on()


Methods available in modules:
controller()
provider()
factory()
service()
constant()
value()
decorator()
animation()
filter()
directive()
component()

//first time call to configure at module level
config()
//After config method
run()

//propeties
name 
required


Never use new keyword in angular


service in angular :


1 value service :  key and value2
2 constant service : can not modify the object obj = {name:'gaurav' id: 10}
					in obj u can not add new propeties but you can change the state 
3 service :  can contain data and logic. above two can contain data only 

4 factory : creation of component
5 provider :  configurable factory
6 decorator : 


filters:

uppercase
lowercase
date 
number 
currency



chrome -allow-file-access-from-files