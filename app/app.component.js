"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.selectedGroup = 'A';
        this.selectGroup = function (group) {
            this.selectedGroup = group;
        };
        this.CreateTeam = function (group, name, imageUrl, points, qualified) {
            return { group: group, name: name, imageUrl: imageUrl, points: points, qualified: qualified };
        };
        this.groups = ['A', 'B', 'C', 'D', 'E', 'F'];
        this.teams = [
            this.CreateTeam('A', 'France', '', 7, 1),
            this.CreateTeam('A', 'Switzerland', '', 5, 1),
            this.CreateTeam('A', 'Albania', '', 3, 0),
            this.CreateTeam('A', 'Romania', '', 1, 0),
            this.CreateTeam('B', 'Wales', '', 6, 1),
            this.CreateTeam('B', 'England', '', 5, 1),
            this.CreateTeam('B', 'Slovakia', '', 4, 1),
            this.CreateTeam('B', 'Russia', '', 1, 0),
            this.CreateTeam('C', 'Germany', '', 7, 1),
            this.CreateTeam('C', 'Poland', '', 7, 1),
            this.CreateTeam('C', 'Northern Ireland', '', 3, 0),
            this.CreateTeam('C', 'Ukraine', '', 0, 0),
            this.CreateTeam('D', 'Croatia', '', 7, 1),
            this.CreateTeam('D', 'Spain', '', 6, 1),
            this.CreateTeam('D', 'Turkey', '', 3, 0),
            this.CreateTeam('D', 'Czech Republic', '', 1, 0),
            this.CreateTeam('E', 'Italy', '', 6, 1),
            this.CreateTeam('E', 'Belgium', '', 6, 1),
            this.CreateTeam('E', 'Republic of Ireland', '', 4, 1),
            this.CreateTeam('E', 'Sweden', '', 1, 0),
            this.CreateTeam('F', 'Hungary', '', 5, 1),
            this.CreateTeam('F', 'Iceland', '', 5, 1),
            this.CreateTeam('F', 'Portugal', '', 3, 1),
            this.CreateTeam('F', 'Austria', '', 1, 0)
        ];
        this.teamsForGroup = function (group) {
            return this.teams.filter(function (team) {
                return team.group === group;
            }).sort(function (teamA, teamB) {
                return teamA.points < teamB.points;
            });
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './views/app.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map