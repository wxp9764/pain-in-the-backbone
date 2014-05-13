
define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        ShellView   = require('views/ShellView'),
		LoginView    = require('views/LoginView'),
		HomeView    = require('views/HomeView'),
        ContactView    = require('views/ContactView'),
		Model    = require("models/Model"),
		Collection    = require("collections/Collection"),
		
				
        $body = $('body'),
        shellView = new ShellView({el: $body}).render(),
       	$content = $("#content", shellView.el),
        loginView = new LoginView({el: $content});
		
        var DesktopRouter = Backbone.Router.extend({

            initialize: function() {

                // Tells Backbone to start watching for hashchange events
                Backbone.history.start();

            },

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                "": "index",
				"login": "login",
				"home": "home",
				"contact": "contact",
				"about": "about"
            },

            
			index: function () {
				loginView.delegateEvents(); // delegate events when the view is recycled
				loginView.render();
				shellView.selectMenuItem('login-menu');
			},
			
			login: function () {
				require(["views/LoginView"], function (LoginView) {
                var view = new LoginView({el: $content});
                view.render();
                shellView.selectMenuItem('login-menu');
				});
			},
			
			home: function () {
				require(["views/HomeView"], function (HomeView) {
                var view = new HomeView({el: $content});
                view.render();
                shellView.selectMenuItem('home-menu');
				});
			},
			
			contact: function () {
				require(["views/ContactView"], function (ContactView) {
                var view = new ContactView({el: $content});
                view.render();
                shellView.selectMenuItem('contact-menu');
				});
			},
		
			about: function () {
				require(["views/AboutView"], function (AboutView) {
					var view = new AboutView({el: $content});
					view.render();
					shellView.selectMenuItem('about-menu');
				});
			},

        });

        // Returns the DesktopRouter class
        return DesktopRouter;

    }

);