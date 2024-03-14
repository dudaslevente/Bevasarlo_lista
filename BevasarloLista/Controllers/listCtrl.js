app.controller('listCtrl', function($scope){

    $scope.katItems = [];
    $scope.category = [];


    axios.get('http://localhost:3000/mock_data').then(res => {

        $scope.katItems = res.data;
        $scope.katItems.sort();
        $scope.$apply();

        $scope.katItems.value.forEach(element => {
            if($scope.category.value.includes($scope.katItems.category)){
                $scope.category.value.push($scope.katItems.category)
            }
        });
    }); 

});


  



$scope.category = items.reduce((res, req) => {     
    if (!res.categories.includes(req.category)) {         
        res.categories.push(req.category);         
        res[req.category] = [];     
    }res[req.category].push(req);     
    return res; }, { categories: [] 
});

