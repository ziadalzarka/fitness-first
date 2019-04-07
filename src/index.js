// Angular Dependencies

require('angular');
require('angular-i18n/ar');
require('angular-ui-bootstrap');

// Configuration

require('./polyfill');
require('./locale/config');

// Services

require('./services/db.service');
require('./services/clients.service');

// Components

require('./components/clients/clients.component.js');
require('./components/client-modal/client-modal.component.js');
require('./components/delete-client-modal/delete-client-modal.component.js');
require('./components/controls/controls.component.js');
require('./components/header/header.component.js');
require('./components/layout/layout.component.js');
require('./components/notifications/notifications.component.js');