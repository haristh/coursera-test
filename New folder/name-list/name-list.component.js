angular.
  module('nameList').
  component('nameList', {
    templateUrl: 'name-list/name-list.template.html',
    controller: function NameListController() {
      this.names = [
        {
          name: 'Victoras Efthymiadis',
          email: 'victoras.efthymiadis@cytanet.com.cy',
          DaysOff: 24
        }, {
          name: 'George Efthymiadis',
          email: 'geprge.efthymiadis@cytanet.com.cy',
          DaysOff: 24
        }, {
          name: 'Aris Vlotomas',
          email: 'aris.vlotomas@cytanet.com.cy',
          DaysOff: 24
        }, {
          name: 'Stelios Ioannou',
          email: 'stelios.ioannou@cytanet.com.cy',
          DaysOff: 24
        }, {
          name: 'Charis Theodorou',
          email: 'charis.theodorou@cytanet.com.cy',
          DaysOff: 24
        }
      ];

      this.orderProp = 'name';
    }
  });
