let app = angular.module('app', ['ngRoute']);

app.controller('MainCtrl', function ($scope, $http) {


});

app.controller('Yearly_Ctrl',function ($scope,$http) {

    $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
       $scope.Year2017 = response.data[0].count_reported_date;
       $scope.Year20171 = response.data[0].year;
       $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&$select=date_extract_y(reported_date)%20%20as%20year,count(reported_date)&$group=year").then(function () {
           $scope.Year2016 = response.data[0].count_reported_date;
           $scope.Year20161 = response.data[0].year;
           $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
            $scope.Year2018 = response.data[0].count_reported_date;
               $scope.Year20181 = response.data[0].year;
               $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&$select=date_extract_y(reported_date)%20%20as%20year,count(reported_date)&$group=year").then(function (response) {
                   $scope.Year2015 = response.data[0].count_reported_date;
                   $scope.Year20151 = response.data[0].year;
                   $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
                       $scope.Year2014 = response.data[0].count_reported_date;
                       $scope.Year20141 = response.data[0].year;
                       $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
                           $scope.Year2013 = response.data[0].count_reported_date;
                           $scope.Year20131 = response.data[0].year;
                           $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
                               $scope.Year2012 = response.data[0].count_reported_date;
                               $scope.Year20121 = response.data[0].year;
                               $http.get("https://data.kcmo.org/resource/5u8g-kq4k.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
                                   $scope.Year2011 = response.data[0].count_reported_date;
                                   $scope.Year20111 = response.data[0].year;
                                   $http.get("https://data.kcmo.org/resource/c3qq-bxi5.json?&$select=date_extract_y(reported_date)%20as%20year,count(reported_date)&$group=year").then(function (response) {
                                       $scope.Year2010 = response.data[0].count_reported_date;
                                       $scope.Year20101 = response.data[0].year;
                                       $scope.Yearly = [$scope.Year2010 ,$scope.Year2011,$scope.Year2012,$scope.Year2013,$scope.Year2014,$scope.Year2015,$scope.Year2016,$scope.Year2017,$scope.Year2018];
                                       $scope.yearCat = [2010,2011,2012,2013,2014,2015,2016,2017,2018];
                                       drawChart1();
                                   })})})})})})})})});

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart1);
    function drawChart1() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'No. of Crime Requests'],
            ['2010',     parseInt($scope.Year2010)],
            ['2011',     parseInt($scope.Year2011)],
            ['2012',     parseInt($scope.Year2012)],
            ['2013',     parseInt($scope.Year2013)],
            ['2014',     parseInt($scope.Year2014)],
            ['2015',     parseInt($scope.Year2015)],
            ['2016',     parseInt($scope.Year2016)],
            ['2017',     parseInt($scope.Year2017)],
            ['2018',     parseInt($scope.Year2018)]
        ]);

        var options = {
            title: 'Yearly Crime Data Analysis',
            pieHole: 0.2,
            pieSliceText: 'label',
            slices: {
                2: {offset: 0.2},
                4: {offset: 0.3},
                6: {offset: 0.4},
                8: {offset: 0.5},
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
});

app.controller('Gender_Ctrl',function ($scope,$http) {

    $scope.Gender = function (sw) {

        if (parseInt(sw.year) === 2010){
            $http.get("https://data.kcmo.org/resource/c3qq-bxi5.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2011){
            $http.get("https://data.kcmo.org/resource/5u8g-kq4k.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2012){
            $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2013){
            $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2014){
            $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&$select=count(report_no)&$where=sex_1='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2015){
            $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&$select=count(report_no)&$where=sex_1='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2016){
            $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2017){
            $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        if (parseInt(sw.year) === 2018){
            $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender = response.data[0].count_report_no;
            });
        }
        else {
            $scope.gender = "Please Check Year and Enter B/w 2010 to 2018"
        }

        $http.get("https://data.kcmo.org/resource/c3qq-bxi5.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
            $scope.gender2010 = response.data[0].count_report_no;
            $http.get("https://data.kcmo.org/resource/5u8g-kq4k.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                $scope.gender2011 = response.data[0].count_report_no;
                $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                    $scope.gender2012 = response.data[0].count_report_no;
                    $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                        $scope.gender2013 = response.data[0].count_report_no;
                        $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&$select=count(report_no)&$where=sex_1='"+sw.gender+"'").then(function (response) {
                            $scope.gender2014 = response.data[0].count_report_no;
                            $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&$select=count(report_no)&$where=sex_1='"+sw.gender+"'").then(function (response) {
                                $scope.gender2015 = response.data[0].count_report_no;
                                $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                                    $scope.gender2016 = response.data[0].count_report_no;
                                    $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                                        $scope.gender2017 = response.data[0].count_report_no;
                                        $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&$select=count(report_no)&$where=sex='"+sw.gender+"'").then(function (response) {
                                            $scope.gender2018 = response.data[0].count_report_no;
                                            drawChart2();
                                        });});});});});});});});});
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart2);
        function drawChart2() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'No. of Crime Requests'],
                ['2010',     parseInt($scope.gender2010)],
                ['2011',     parseInt($scope.gender2011)],
                ['2012',     parseInt($scope.gender2012)],
                ['2013',     parseInt($scope.gender2013)],
                ['2014',     parseInt($scope.gender2014)],
                ['2015',     parseInt($scope.gender2015)],
                ['2016',     parseInt($scope.gender2016)],
                ['2017',     parseInt($scope.gender2017)],
                ['2018',     parseInt($scope.gender2018)]
            ]);

            var options = {
                title: 'Crime Data Analysis By Gender',
            };

            var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }

    };

});

app.controller("zipcodeCtrl",function ($scope,$http) {

$scope.zipCode = function (sw) {

    if(sw.year === 2018){
        $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&%24select=zip_code%2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if(sw.year===2017){
        $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&%24select=zip_code%2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2016){
        $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&%24select=zip_code as zip_code %2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2015){
        $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&%24select=zip_code_1 as zip_code%2Ccount(report_no)&%24group=zip_code_1&%24order=count_report_no%20desc&%24where=zip_code_1%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2014){
        $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&%24select=zip_code_1 as zip_code%2Ccount(report_no)&%24group=zip_code_1&%24order=count_report_no%20desc&%24where=zip_code_1%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2013){
        $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&%24select=zip_code%2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2012){
        $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&%24select=zip_code%2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2011){
        $http.get("https://data.kcmo.org/resource/5u8g-kq4k.json?&%24select=zip_code%2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }
    if (sw.year === 2010){
        $http.get("https://data.kcmo.org/resource/c3qq-bxi5.json?&%24select=zip_code%2Ccount(report_no)&%24group=zip_code&%24order=count_report_no%20desc&%24where=zip_code%20not%20in%20(%2799999%27)&$limit=10").then(function (response) {
            $scope.zipCodeData = response.data;
            $scope.zipCodeData1 = response.data[0].count_report_no;
            $scope.zipCode1 = response.data[0].zip_code;
            $scope.zipCodeData2 = response.data[1].count_report_no;
            $scope.zipCodeData3 = response.data[2].count_report_no;
            $scope.zipCodeData4 = response.data[3].count_report_no;
            $scope.zipCodeData5 = response.data[4].count_report_no;
            $scope.zipCodeData6 = response.data[5].count_report_no;
            $scope.zipCodeData7 = response.data[6].count_report_no;
            $scope.zipCodeData8 = response.data[7].count_report_no;
            $scope.zipCodeData9 = response.data[8].count_report_no;
            $scope.zipCodeData10 = response.data[9].count_report_no;
            $scope.zipCode2 = response.data[1].zip_code;
            $scope.zipCode3 = response.data[2].zip_code;
            $scope.zipCode4 = response.data[3].zip_code;
            $scope.zipCode5 = response.data[4].zip_code;
            $scope.zipCode6 = response.data[5].zip_code;
            $scope.zipCode7 = response.data[6].zip_code;
            $scope.zipCode8 = response.data[7].zip_code;
            $scope.zipCode9 = response.data[8].zip_code;
            $scope.zipCode10 = response.data[9].zip_code;
            drawChart3();
        })
    }

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart3);
    function drawChart3() {
        var data = google.visualization.arrayToDataTable([
            ['ZipCode', 'No. of Crime Requests'],
            [$scope.zipCode1,     parseInt($scope.zipCodeData1)],
            [$scope.zipCode2,     parseInt($scope.zipCodeData2)],
            [$scope.zipCode3,     parseInt($scope.zipCodeData3)],
            [$scope.zipCode4,     parseInt($scope.zipCodeData4)],
            [$scope.zipCode5,     parseInt($scope.zipCodeData5)],
            [$scope.zipCode6,     parseInt($scope.zipCodeData6)],
            [$scope.zipCode7,     parseInt($scope.zipCodeData7)],
            [$scope.zipCode8,     parseInt($scope.zipCodeData8)],
            [$scope.zipCode9,     parseInt($scope.zipCodeData9)],
            [$scope.zipCode10,     parseInt($scope.zipCodeData10)]

        ]);
        var options = {
            title: 'Zip_Code Crime Data Analysis',
            pieHole: 0.2,
            pieSliceText: 'label',
            slices: {
                2: {offset: 0.2},
                4: {offset: 0.3},
                6: {offset: 0.4},
                8: {offset: 0.5},
                10: {offset: 0.6}
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart1_div'));
        chart.draw(data, options);
    }
}
});


app.controller("age_Ctrl",function ($scope,$http) {

    $scope.Age = function (sw) {

        if(sw.year === 2010){
            $http.get("https://data.kcmo.org/resource/c3qq-bxi5.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });
        }else if(sw.year === 2011){
            $http.get("https://data.kcmo.org/resource/5u8g-kq4k.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if(sw.year === 2012){
            $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if (sw.year === 2013){
            $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if(sw.year === 2014){
            $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&$select=count(report_no)&$where=age_1"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if(sw.year === 2015){
            $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&$select=count(report_no)&$where=age_1"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if(sw.year === 2016){
            $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if (sw.year === 2017){
            $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&$select=count(report_no)&$WHERE=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else if(sw.year === 2018){
            $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

                $scope.ageData = response.data[0].count_report_no;
            });

        }else {

            $scope.ageData = "Please Enter Between 2010 t0 2018"
        }

        $http.get("https://data.kcmo.org/resource/c3qq-bxi5.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {

            $scope.ageData2010 = response.data[0].count_report_no;
            $http.get("https://data.kcmo.org/resource/5u8g-kq4k.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {
                $scope.ageData2011 = response.data[0].count_report_no;
                $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {
                    $scope.ageData2012 = response.data[0].count_report_no;
                    $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {
                        $scope.ageData2013 = response.data[0].count_report_no;
                        $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&$select=count(report_no)&$where=age_1"+sw.age).then(function (response) {
                            $scope.ageData2014 = response.data[0].count_report_no;
                            $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&$select=count(report_no)&$where=age_1"+sw.age).then(function (response) {
                                $scope.ageData2015 = response.data[0].count_report_no;
                                $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {
                                    $scope.ageData2016 = response.data[0].count_report_no;
                                    $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&$select=count(report_no)&$WHERE=age"+sw.age).then(function (response) {
                                        $scope.ageData2017 = response.data[0].count_report_no;
                                        $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&$select=count(report_no)&$where=age"+sw.age).then(function (response) {
                                            $scope.ageData2018 = response.data[0].count_report_no;
                                            drawChart4();
                                        });});});});});});});});});

        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart4);
        function drawChart4() {
            var data = google.visualization.arrayToDataTable([
                ['Year', 'No. of Crime Requests for the age'],
                ["2010",     parseInt($scope.ageData2010)],
                ["2011",     parseInt($scope.ageData2011)],
                ["2012",     parseInt($scope.ageData2012)],
                ["2013",     parseInt($scope.ageData2013)],
                ["2014",     parseInt($scope.ageData2014)],
                ["2015",     parseInt($scope.ageData2015)],
                ["2016",     parseInt($scope.ageData2016)],
                ["2017",     parseInt($scope.ageData2017)],
                ["2018",     parseInt($scope.ageData2018)]

            ]);
            var options = {
                title: 'Age Crime Data Analysis',
                pieHole: 0.2,
                pieSliceText: 'label',
                slices: {
                    1: {offset: 0.2},
                    2: {offset: 0.2},
                    4: {offset: 0.3},
                    6: {offset: 0.4},
                    8: {offset: 0.5},
                    10: {offset: 0.6}
                }
            };

            var chart = new google.visualization.PieChart(document.getElementById('chart2_div'));
            chart.draw(data, options);
        }
    }
});

app.controller('crimeType_Ctrl',function ($scope,$http) {

    $scope.crime_TypeCtrl = function (sw) {

        if(sw.year === 2018){

            $http.get("https://data.kcmo.org/resource/nyg5-tzkz.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });
        }else if(sw.year === 2017){
            $http.get("https://data.kcmo.org/resource/wy8a-bydn.json?&%24select=Description%2Ccount(report_no)&%24group=Description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2016){
            $http.get("https://data.kcmo.org/resource/c6e8-258d.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2015){
            $http.get("https://data.kcmo.org/resource/geta-wrqs.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2014){
            $http.get("https://data.kcmo.org/resource/nsn9-g8a4.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2013){
            $http.get("https://data.kcmo.org/resource/ff6a-bhbu.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2012){
            $http.get("https://data.kcmo.org/resource/xwdv-8y2g.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2011){
            $http.get("http://data.kcmo.org/resource/5u8g-kq4k.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else if(sw.year === 2010){
            $http.get("http://data.kcmo.org/resource/c3qq-bxi5.json?&%24select=description as Description%2Ccount(report_no)&%24group=description&%24order=count_report_no%20desc&$limit=10").then(function (response) {
                $scope.crime_TypeCtrlData =response.data;
                $scope.crime_TypeCtrlDataType1 = response.data[0].Description;
                $scope.crime_TypeCtrlDataCount1 = response.data[0].count_report_no;
                $scope.crime_TypeCtrlDataType2 = response.data[1].Description;
                $scope.crime_TypeCtrlDataCount2 = response.data[1].count_report_no;
                $scope.crime_TypeCtrlDataType3 = response.data[2].Description;
                $scope.crime_TypeCtrlDataCount3 = response.data[2].count_report_no;
                $scope.crime_TypeCtrlDataType4 = response.data[3].Description;
                $scope.crime_TypeCtrlDataCount4 = response.data[3].count_report_no;
                $scope.crime_TypeCtrlDataType5 = response.data[4].Description;
                $scope.crime_TypeCtrlDataCount5 = response.data[4].count_report_no;
                $scope.crime_TypeCtrlDataType6 = response.data[5].Description;
                $scope.crime_TypeCtrlDataCount6 = response.data[5].count_report_no;
                $scope.crime_TypeCtrlDataType7 = response.data[6].Description;
                $scope.crime_TypeCtrlDataCount7 = response.data[6].count_report_no;
                $scope.crime_TypeCtrlDataType8 = response.data[7].Description;
                $scope.crime_TypeCtrlDataCount8 = response.data[7].count_report_no;
                $scope.crime_TypeCtrlDataType9 = response.data[8].Description;
                $scope.crime_TypeCtrlDataCount9 = response.data[8].count_report_no;
                $scope.crime_TypeCtrlDataType10 = response.data[9].Description;
                $scope.crime_TypeCtrlDataCount10 = response.data[9].count_report_no;
                drawChart4();
            });

        }else{
            $scope.crime_TypeCtrlDataError = "Please Enter between 2010 to 2018"
        }

        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart4);
        function drawChart4() {
            var data = google.visualization.arrayToDataTable([
                ['ZipCode', 'No. of Crime Requests'],
                [$scope.crime_TypeCtrlDataType1,     parseInt($scope.crime_TypeCtrlDataCount1)],
                [$scope.crime_TypeCtrlDataType2,     parseInt($scope.crime_TypeCtrlDataCount2)],
                [$scope.crime_TypeCtrlDataType3,     parseInt($scope.crime_TypeCtrlDataCount3)],
                [$scope.crime_TypeCtrlDataType4,     parseInt($scope.crime_TypeCtrlDataCount4)],
                [$scope.crime_TypeCtrlDataType5,     parseInt($scope.crime_TypeCtrlDataCount5)],
                [$scope.crime_TypeCtrlDataType6,     parseInt($scope.crime_TypeCtrlDataCount6)],
                [$scope.crime_TypeCtrlDataType7,     parseInt($scope.crime_TypeCtrlDataCount7)],
                [$scope.crime_TypeCtrlDataType8,     parseInt($scope.crime_TypeCtrlDataCount8)],
                [$scope.crime_TypeCtrlDataType9,     parseInt($scope.crime_TypeCtrlDataCount9)],
                [$scope.crime_TypeCtrlDataType10,     parseInt($scope.crime_TypeCtrlDataCount10)]
            ]);
            var options = {
                title: 'Crime Type Data Analysis',
                bar: {groupWidth: "95%"},
                bars: 'horizontal'
            };
            var chart = new google.visualization.ColumnChart(document.getElementById('chart2_div'));
            chart.draw(data, options);
        }
    }
});

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.
    when('/', {
        controller:'MainCtrl'
    }).
    when('/home', {
        templateUrl:'home.html',
        controller:'MainCtrl'
    }).
    when('/geographical', {
        templateUrl:'geographical.html',
        controller:'MainCtrl'
    }).
    when('/crime_yearly', {
        templateUrl:'crime_yearly.html',
        controller:'Yearly_Ctrl'
    }).
    when('/crime_type',{
        templateUrl:'crime_type.html',
        controller:'crimeType_Ctrl'
    }).
    when('/crime_age', {
        templateUrl: 'crime_age.html',
        controller: 'age_Ctrl'
    }).
    when('/crime_zipcode', {
        templateUrl: 'crime_zipcode.html',
        controller: 'zipcodeCtrl'
    }).
    when('/crime_gender', {
        templateUrl: 'crime_gender.html',
        controller: 'Gender_Ctrl'
    }).
    otherwise( {
        redirectTo : '/errorPage'
    });
}]);

