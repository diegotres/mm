NS.Views.Application=Backbone.View.extend({el:$("html"),initialize:function(){console.log("Application: initialize"),this.instantiates_current_page()},instantiates_current_page:function(){var a=this.return_page_reference(),b=this.return_page_view(a);b&&(NS.current_page=new b)},return_page_reference:function(){return this.$("body").attr("class").split(" ")[1]},return_page_view:function(a){return NS.Views[_.titleize(_.camelize(a))]}})