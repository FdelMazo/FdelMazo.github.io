/*!
	GitHub-Repo-Widget.js - Not depend on jQuery or Other Framework.
	License:  MIT
*/
(function() {
	var rendered = 'github-widget-rendered',
		cssStr = `
		.github-box * {
			-webkit-box-sizing: content-box;
			-moz-box-sizing: content-box;
			box-sizing: content-box;
		}
		
		.github-box {
			font-family: helvetica, arial, sans-serif;
			font-size: 13px;
			line-height: 18px;
			background: #fafafa;
			border: 1px solid #ddd;
			color: #666;
			border-radius: 3px
		}
		
		.github-box a {
			color: #4183c4;
			border: 0;
			text-decoration: none
		}
		
		.github-box .github-box-title {
			position: relative;
			border-bottom: 1px solid #ddd;
			border-radius: 3px 3px 0 0;
			background: #fcfcfc;
			background: -moz-linear-gradient(#fcfcfc, #ebebeb);
			background: -webkit-linear-gradient(#fcfcfc, #ebebeb);
		}
		
		.github-box .github-box-title h3 {
			word-wrap: break-word;
			font-family: helvetica, arial, sans-serif;
			font-weight: normal;
			font-size: 16px;
			color: gray;
			margin: 0;
			padding: 10px 10px 10px 30px;
			background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAXBAMAAAD0LQLXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURQAAAL29vc3NzcLCwsjIyNbW1pvTNOEAAAABdFJOUwBA5thmAAAATElEQVQI12MIFoQAEQZFYwcGEGBkUDRUQLCcsYjRXhbqKkEGZQYGqJgSnKXCwGgsAGYpqyobG4WGhioyhBhDgClI3EQAqpaZwQBEAQARmA4G2o55nQAAAABJRU5ErkJggg==) 7px center no-repeat;
			width: auto;
		}
		
		.github-box .github-box-title h3 .repo {
			font-weight: bold
		}
		
		.github-box .github-box-title .github-stats {
			float: right;
			position: absolute;
			top: 8px;
			right: 10px;
			font-size: 11px;
			font-weight: bold;
			line-height: 21px;
			height: auto;
			min-height: 21px
		}
		
		.github-box .github-box-title .github-stats a {
			display: inline-block;
			height: 18px;
			color: #666;
			border: 1px solid #ddd;
			border-radius: 3px;
			padding: 0 5px 0 18px;
			background: white  url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA/BAMAAAASzPXLAAAAGFBMVEX///+ZmZnW1tbv7+/6+vqxsbHFxcWkpKRy3HCDAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+MGGwEtJEm3MrsAAALASURBVCgVAbUCSv0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGVWAAAAAAAAAABhcicWAAAAAAAABxUDNFFwAAAAAAIREjETIREgAAAAAhESMRMhESAAAAAAJxVDRHFyAAAAAAAAYXInFgAAAAAAAAAAZVYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABIAAAAAAAAAAAAAEQAAAAAAAAAAAAERAAAAAAAAAAEREREREXAAAAAAARERERERAAAAAAAAERERERAAAAAAAAABERERcAAAAAAAAAEREREgAAAAAAAAARERERAAAAAAAABhFwIREAAAAAAAAFEAAAYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAAAAAAAAAAAAABYAAAAAAAAAAAAFEgAAAAAAAAAAAFEgAAAAAAAAAAAFEgAAAAAAAAAAAFEgAAAAAAAAAAAFEgVQAAAAAAAAACEgBhIAAAAAAAAAISAAEgAAAAAAAAIREAcRIAAAAAAAABEQAREAAAAAAAAAAQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABywg4myIWPfAAAAABJRU5ErkJggg==')no-repeat
		}
		
		.github-box .github-box-title .github-stats .watchers {
			border-right: 1px solid #ddd
		}
		
		.github-box .github-box-title .github-stats .stargazers {
			background-position: -2px -21px;
			padding-left: 15px
		}

		.github-box .github-box-title .github-stats .forks {
			background-position: -2px -42px;
			padding-left: 15px
		}
		
		.github-box .github-box-content {
			padding: 10px;
			font-weight: 300
		}
		
		.github-box .github-box-content p {
			margin: 0
		}
		
		.github-box .github-box-content .link {
			font-weight: bold
		}
		
		.github-box .github-box-footer {
			text-align: left;
			position: relative;
			border-top: 1px solid #ddd;
			background: white;
			border-radius: 0 0 3px 3px;
			padding: 10px;
			height: auto;
			min-height: 24px;
		}
		
		.github-box .github-box-footer .updated {
			word-wrap: break-word;
			margin: 0;
			font-size: 11px;
			color: #666;
			line-height: 24px;
			font-weight: 300;
			width: auto
		}
		
		.github-box .github-box-footer .updated strong {
			font-weight: bold;
			color: #000
		}
		
		.github-box .github-box-footer .language {
			float: right;
			position: absolute;
			top: 10px;
			right: 10px;
			height: 24px;
			line-height: 24px;
			font-size: 12px;
			color: #666;
			font-weight: bold;
		}
		
		@media (max-width: 767px) {
			.github-box .github-box-title {
				height: auto;
				min-height: 60px
			}
			.github-box .github-box-title h3 {
				padding: 10px 10px 10px 10px;
				background: none;
				text-align:left;
			}
			.github-box .github-box-title h3 .repo {
				display: block
			}
			.github-box .github-box-footer {
				height: auto;
				min-height: 46px;
			}
			.github-box .github-box-footer .language {
				top: 32px;
			}
		}
		`;
	function _getAttribute(node, name, defaultValue) {
		return node.getAttribute(name) || defaultValue;
	}
	function _querySelector(dom, sel) {
		return dom.querySelector(sel);
	}
	function _setHtml(dom, h) {
		if (dom){dom.innerHTML = h;}
	}
	function _appendCss() {
		var x = document.createElement('div');
		x.innerHTML = 'x<style>'+cssStr+'</style>';
		document.getElementsByTagName('head')[0].appendChild(x.lastChild);
	}
	function _renderGitHubWidget(repoEle, repo) {
		repo = JSON.parse(repo);
		_setHtml(_querySelector(repoEle, '.watchers'), repo.subscribers_count);
		_setHtml(_querySelector(repoEle, '.stargazers'), repo.stargazers_count);
		_setHtml(_querySelector(repoEle, '.forks'), repo.forks);
		_setHtml(_querySelector(repoEle, '.language'), '<i class="fa fa-dot-circle-o"></i> ' + repo.language);
		_setHtml(_querySelector(repoEle, '.description span'), repo.description);
		_setHtml(_querySelector(repoEle, '.updated'), 'Latest commit to the <strong>' + repo.default_branch+ '</strong> branch on ' + repo.pushed_at.substring(0, 10));

		if(repo.homepage !== null) {
			_setHtml(_querySelector(repoEle, '.link'), '<a href="'+ repo.homepage +'">'+ repo.homepage +'</a>');
		}
		repoEle.setAttribute(rendered, '1');
	}
	function _ajaxReq(repoEle, repo) {
		var xmlhttp;
		if (window.XMLHttpRequest) {
			//code for IE7,firefox chrome and above
			xmlhttp = new XMLHttpRequest();
		} else {
			//code for Internet Explorer
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		}
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				_renderGitHubWidget(repoEle, xmlhttp.responseText);
			} else {
			}
		};
		xmlhttp.open('GET', 'https://api.github.com/repos/' + repo, true);
		xmlhttp.send();
	}
	function _init() {
		var github_eles = document.querySelectorAll('.github-widget-title'), repoEle, repo, vendorName, repoName, vendorUrl, repoUrl, widget;
		for (var i = 0; i < github_eles.length; i++) {
			repoEle = github_eles[i];
			if (! _getAttribute(repoEle, rendered, '')) {
				repo = _getAttribute(repoEle, 'data-repo', ''),
				vendorName = repo.split('/')[0],
				repoName = repo.split('/')[1],
				vendorUrl = 'http://github.com/' + vendorName,
				repoUrl = 'http://github.com/' + vendorName + '/' + repoName;

				widget = '<div class="github-box repo">'+
					'<div class="github-box-title">'+
					'<h3>'+
					'<a class="owner" href="' + vendorUrl + '" title="' + vendorUrl + '">' + vendorName + '</a>'+
					'/'+
					'<a class="repo" href="' + repoUrl + '" title="' + repoUrl + '">' + repoName + '</a>'+
					'</h3>'+
					'<div class="github-stats">'+
					'<a class="watchers" href="' + repoUrl + '/watchers" title="See watchers">?</a>'+
					'<a class="stargazers" href="' + repoUrl + '/stargazers" title="See stargazers">?</a>'+
					'<a class="forks" href="' + repoUrl + '/network/members" title="See forkers">?</a>'+
					'</div>'+
					'</div>'+
					'</div>';
				_setHtml(repoEle, widget);
				_ajaxReq(repoEle, repo);
			}
		}

		var github_eles = document.querySelectorAll('.github-widget-description'), repoEle, repo, vendorName, repoName, vendorUrl, repoUrl, widget;
		for (var i = 0; i < github_eles.length; i++) {
			repoEle = github_eles[i];
			if (! _getAttribute(repoEle, rendered, '')) {
				repo = _getAttribute(repoEle, 'data-repo', ''),
				vendorName = repo.split('/')[0],
				repoName = repo.split('/')[1],
				vendorUrl = 'http://github.com/' + vendorName,
				repoUrl = 'http://github.com/' + vendorName + '/' + repoName;

				widget = '<div class="github-box repo">'+
					'<div class="github-box-content">'+
					'<p class="description"><span></span> &mdash; <a href="' + repoUrl + '#readme">Read More</a></p>'+
					'<p class="link"></p>'+
					'</div>'+
					'</div>';
				_setHtml(repoEle, widget);
				_ajaxReq(repoEle, repo);
			}
		}

		var github_eles = document.querySelectorAll('.github-widget-footer'), repoEle, repo, vendorName, repoName, vendorUrl, repoUrl, widget;
		for (var i = 0; i < github_eles.length; i++) {
			repoEle = github_eles[i];
			if (! _getAttribute(repoEle, rendered, '')) {
				repo = _getAttribute(repoEle, 'data-repo', ''),
				vendorName = repo.split('/')[0],
				repoName = repo.split('/')[1],
				vendorUrl = 'http://github.com/' + vendorName,
				repoUrl = 'http://github.com/' + vendorName + '/' + repoName;

				widget = '<div class="github-box repo">'+
					'<div class="github-box-footer">'+
					'<div class="updated"></div>'+
					'<a class="language"></a>'+
					'</div>'+
					'</div>';
				_setHtml(repoEle, widget);
				_ajaxReq(repoEle, repo);
			}
		}
	}
	_appendCss();
	_init();
	window.GithubRepoWidget = {
		init: _init
	};
})();