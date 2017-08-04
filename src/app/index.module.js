(function() {
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [
            // Common 3rd Party Dependencies
            'uiGmapgoogle-maps',
            'textAngular',
            'xeditable',
           
            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            //'app.quick-panel',

            // Sample
            'app.sample',

            'app.register',

            'app.new-user',

            'app.pages.profile',

            'app.login',

            'app.e-commerce'

        ]);
})();
