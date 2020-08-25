(function () {
    var lister = function ($http) {
        var getSeen = function() {
            return $http.get("https://raw.githubusercontent.com/MatBenfield/TheChels.uk/master/_data/teams.json")
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
            return $http.get("https://api.thechels.uk/ios/0/0")
                .then(function (response) {
                    return response.data;
                });
        }

        var getMac = function() {
            return $http.get("https://api.thechels.uk/mac/0/0")
                .then(function (response) {
                    return response.data;
                });
        }

        return {
            getSeen     : getSeen,
            getFilms    : getFilms,
            getMac      : getMac,
            getIos      : getIos
        };
    };

    var module = angular.module("listViewer");
    module.factory("lister", lister);
}());
