(function($) {
    /**
    * TAB切换效果
    * @param  {string} trigger 切换方式click或mouseenter
    * @param  {selector} navItemSelector 事件触发对象选择器
    * @param  {selector} contentItemSelector 内容主体对象选择器
    * @param  {int} beginIndex 默认显示第几个
    * @return {}
    */
    $.fn.tab = function(option) {
        return this.each(function() {
            var opts = $.extend({}, {
                trigger             : "click",
                navItemSelector     : ".tab-nav-items li",
                contentItemSelector : ".tab-content-item",
                navItemActiveClass  : "active",
                beginIndex          : 0
            }, option || {});

            var $container    = $(this);
            var $navItems     = $container.find(opts.navItemSelector);
            var $contentItems = $container.find(opts.contentItemSelector);

            if (!$container.length) return;
            if ($container.data("tabid")) return;

            $container.data( "tabid", (new Date()).getTime() );

            var _handler = function() {
                var _this = arguments[0].type ? $(this) : $navItems.eq(arguments[0]);
                if ( _this.hasClass( opts.navItemActiveClass ) ) return;

                var index = $navItems.index(_this);
                var target = _this.data("target") ? $(_this.data("target")) : $contentItems.eq(index);

                $navItems.removeClass(opts.navItemActiveClass);
                $contentItems.addClass("hide").hide();

                _this.addClass(opts.navItemActiveClass);
                target.removeClass("hide").show();

                return false;
            }

            $container.on(opts.trigger, opts.navItemSelector, _handler);

            _handler(opts.beginIndex);
        });
    };

    $(function() {
        var $tab = $(".J_Tab[data-toggle='tab']");
        if ( $tab.length ) {
            $tab.each(function() {
                var $this = $(this);
                $this.tab({
                    trigger             : $this.data("trigger"),
                    navItemSelector     : $this.data("nav"),
                    contentItemSelector : $this.data("content"),
                    navItemActiveClass  : $this.data("active"),
                    beginIndex          : $this.data("begin")
                });
            });
        }
    });
})(jQuery);
