webpackJsonp([6],{132:function(e,t,r){t=e.exports=r(4)(),t.push([e.id,'.billboard-wrapper{display:flex;flex-wrap:wrap;margin-left:-1rem;margin-right:-1rem;min-height:20vh;-webkit-user-select:none;-moz-user-select:none}.billboard-wrapper .item{width:20%;overflow:hidden}.billboard-wrapper .item:first-child .card:before{border-color:#f05050 transparent transparent #f05050}.billboard-wrapper .item:nth-child(2) .card:before{border-color:#7266ba transparent transparent #7266ba}.billboard-wrapper .item:nth-child(3) .card:before{border-color:#23b7e5 transparent transparent #23b7e5}@media screen and (min-width:1480px){.billboard-wrapper .item{width:14.28571%}}@media (min-width:768px) and (max-width:991px){.billboard-wrapper .item{width:33.33333%}}@media screen and (max-width:767px){.billboard-wrapper .item{width:33.33333%}}@media screen and (max-width:580px){.billboard-wrapper .item{width:50%}}@media screen and (max-width:320px){.billboard-wrapper .item{width:100%}}.billboard-wrapper .card{margin:1rem;transition:all .35s linear;box-shadow:0 1px 1px rgba(0,0,0,.1);position:relative;border-radius:2px;overflow:hidden}.billboard-wrapper .card:before{content:"";position:absolute;top:0;right:0;border-style:solid;border-width:32px;border-color:#eec141 transparent transparent #eec141;transition:all .5s ease;transform:rotate(90deg);z-index:9}.billboard-wrapper .card:hover{border-color:transparent;box-shadow:0 4px 10px 2px rgba(0,0,0,.2)}.billboard-wrapper .thumbnail{width:100%;height:288px;position:relative;display:block;background-size:32px 32px;background-position:50%;background-repeat:no-repeat}@media screen and (max-width:767px){.billboard-wrapper .thumbnail{height:250px}}@media screen and (max-width:320px){.billboard-wrapper .thumbnail{height:360px}}.billboard-wrapper .thumbnail.loaded{background-size:cover}.billboard-wrapper .thumbnail img{opacity:0!important}.billboard-wrapper .number{font-size:2.2rem;line-height:1}.billboard-wrapper .meta{position:absolute;bottom:59px;left:0;width:100%;z-index:2;background-color:rgba(0,0,0,.55);padding-top:5px;padding-bottom:5px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.billboard-wrapper .meta .name{font-size:1.4rem}.billboard-wrapper .votes{display:table;width:100%;height:100%;border-spacing:0;table-layout:fixed;background:#fff}.billboard-wrapper .votes .col{text-align:center;display:table-cell;float:none;height:100%;vertical-align:top;padding:6px 15px 10px;font-size:1rem;border-right:1px solid #e7e7e7}.billboard-wrapper .votes .col:last-child{border-right-width:0}.billboard-wrapper .votes span{padding:.25rem 0}.billboard-wrapper .rank-number{position:absolute;top:1px;right:1px;color:#fff;font-size:2.4rem;transform:rotate(45deg);line-height:36px;width:36px;height:36px;text-align:center;z-index:10}.billboard-wrapper .item:nth-child(n+100) .rank-number{font-size:2rem}.billboard-wrapper .item:nth-child(n+1000) .rank-number{font-size:1.6rem;top:4px;right:4px}',""])},142:function(e,t,r){var i=r(132);"string"==typeof i&&(i=[[e.id,i,""]]);r(5)(i,{});i.locals&&(e.exports=i.locals)},159:function(e,t){e.exports='<div class=card> <a class="thumbnail lazyimg" ui-sref="root.layout.movies.movieProfile({id: vm.movie.id, name: vm.movie.original_title})"> <img imgload={{$root.image_uri}}/w500{{vm.movie.poster_path}} /> </a> <div class=votes> <div class="col vote-average"> <span>评分</span> <div class="number text-info">{{vm.movie.vote_average | voteFilter}}</div> </div> <div class="col vote-count"> <span>投票人数</span> <div class="number text-warning">{{vm.movie.vote_count}}</div> </div> </div> <span class="rank-number number">{{vm.rank + 1}}</span> <div class="meta root-wrapper"> <h5 class=name>{{vm.movie.title}}</h5> </div> </div>'},165:function(e,t){e.exports='<div class=page-title> <h4>电影排行榜</h4> <b class="badge badge-warning" ng-if=vm.totalResults>{{vm.totalResults}}</b> <p><small class=text-muted>{{vm.description}}</small></p> </div> <div class=root-wrapper> <div class=billboard-wrapper id=billboard-wrapper> <billboard-card ng-repeat="movie in vm.movies track by $index" movie=movie index={{$index}} class=item ng-if=movie.poster_path> </billboard-card> </div> <loading-bar infinite=true></loading-bar> </div>'},182:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),a=_interopRequireDefault(i),o=function BillboardCardController(){"ngInject";(0,a["default"])(this,BillboardCardController),this.rank=Number(this.index)};t["default"]=o},183:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),r(142);var i=r(159),a=_interopRequireDefault(i),o=r(182),l=_interopRequireDefault(o),n={bindings:{movie:"<",index:"@"},template:a["default"],controller:l["default"],controllerAs:"vm"};t["default"]=angular.module("app.components.billboardCard",[]).component("billboardCard",n)},208:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(8),a=_interopRequireDefault(i),o=r(3),l=_interopRequireDefault(o),n=r(1),d=_interopRequireDefault(n),s=r(2),p=_interopRequireDefault(s),u=(0,a["default"])(),b=(0,a["default"])(),c=(0,a["default"])(),m=(0,a["default"])(),v=function(){function BillboardController(e,t,r,i,a){"ngInject";(0,d["default"])(this,BillboardController),(0,l["default"])(this,{$document:e,$timeout:t,$rootScope:r,MoviesApi:i,ScrollEvent:a}),this[m]=this.ScrollEvent.$offsetTop.bind(this.ScrollEvent),this.movies=[],this[c]=!1,this[b]=!1,this[u]=!1,this.description="Get the list of top rated movies. By default, \n            this list will only include movies that have 50 or more votes. This list refreshes every day.",this.activate()}return BillboardController.$inject=["$document","$timeout","$rootScope","MoviesApi","ScrollEvent"],(0,p["default"])(BillboardController,[{key:"activate",value:function activate(){var e=this;this.$rootScope.$on("$stateChangeSuccess",function(){angular.element(e.$document[0]).unbind("scroll"),e[b]=!1}),this.$getMovies(),this.scrollEvent()}},{key:"scrollEvent",value:function scrollEvent(){var e=this;angular.element(this.$document[0]).bind("scroll",function(){e[u]&&e.$timeout.cancel(e[u]),e[u]=e.$timeout(function(){var t=e[m]();t<100&&!e[b]&&e.$getMovies()},1e3)})}},{key:"$getMovies",value:function $getMovies(){var e=this;if(!this[b]){this[b]=!0;var t=this.MoviesApi.$list({movie_type:"top_rated",page:this[c]||1});t.then(function(t){e.totalResults=t.total_results,e.movies=e.movies.concat(t.results),e.totalItems=t.total_results,e[c]=t.page,e[c]++,e[b]=!1},function(){e[b]=!1})}}}]),BillboardController}();t["default"]=v},210:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(183),a=_interopRequireDefault(i),o=r(208),l=_interopRequireDefault(o),n=angular.module("app.pages.billboard",[a["default"].name]).controller(l["default"].name,l["default"]);t["default"]=n.name}});