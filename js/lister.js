(function () {
    var lister = function ($http) {
        var getSeen = function() {
            return $http.get("https://raw.githubusercontent.com/MatBenfield/TheChels.uk/master/_data/teams.csv")
                        .then(function (response) {
                            return response.data;
                        });
        }

        var getFilms = function() {
            return $http.get("https://raw.githubusercontent.com/MatBenfield/TheChels.uk/master/_data/films.csv")
                .then(function (response) {
                    return response.data;
                });
        }

        var getIos = function() {
            return $http.get("https://raw.githubusercontent.com/MatBenfield/TheChels.uk/master/_data/apps.json")
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            getSeen     : getSeen,
            getFilms    : getFilms,
            getIos      : getIos
        };
    };

    var module = angular.module("listViewer");
    module.factory("lister", lister);
}());
