var app = angular.module('listApp', []);
let select = document.querySelector('#kat');

app.run(function($rootScope){

    $rootScope.katItems = [];


    axios.get('http://localhost:3000/mock_data').then(res => {
        $rootScope.katItems = res.data;
        $rootScope.katItems.sort();

        $rootScope.katItems.forEach(user => {
            let option = document.createElement('option');
            option.value = user.category;
            option.innerText = user.category;
            select.appendChild(option);
    


        });

        $rootScope.$apply();
    }); 

    

    

});