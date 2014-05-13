// View.js
// -------
define(["jquery", "backbone", "models/Model", "text!templates/shell.html"],

    function($, Backbone, Model, template){
		
        var View = Backbone.View.extend({
		//$menuItems;
            // The DOM Element associated with this view
            el: ".example",

            // View constructor
            initialize: function() {

                // Calls the view's render method
                this.render();

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                // Setting the view's template property using the Underscore template method
                this.template = _.template(template, {});

                // Dynamically updates the UI with the view's template
                this.$el.html(this.template);

                // Maintains chainability
				$menuItems = $('.navbar .nav li', this.el);
                return this;

            },
			
			selectMenuItem: function (menuItem) {
            $menuItems.removeClass('active');
            if (menuItem) {
                $('.' + menuItem).addClass('active');
            }
        }

        });

        // Returns the View class
        return View;

    }

);