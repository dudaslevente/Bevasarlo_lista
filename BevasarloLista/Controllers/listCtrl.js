app.controller('listCtrl', function($scope){


    $scope.kategoriak = [];

    $scope.termekek = [];


    axios.get("http://localhost:3000/mock_data").then(res => {
        $scope.termekek = res.data;

        for (let index = 0; index < $scope.termekek.length; index++) {
            if (!$scope.kategoriak.includes($scope.termekek[index].category))
            {
                $scope.kategoriak.push($scope.termekek[index].category);
            }
        }

        for (let index = 0; index < $scope.kategoriak.length; index++) {
            let option = document.createElement("option");
            option.text = $scope.kategoriak[index];
            kat.appendChild(option);
        }



        
        $scope.$apply();
    });
});