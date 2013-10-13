'use strict';

window.APP.factory('notification', ['$timeout', '$rootScope', function notification($timeout, $rootScope){

    var notifications = [],
        queue = [];

    var settings = {
      info: { duration: 3000, enabled: true },
      warning: { duration: 3000, enabled: true },
      error: { duration: 3000, enabled: true },
      success: { duration: 3000, enabled: true },
      progress: { duration: 0, enabled: true },
      custom: { duration: 33000, enabled: true },
      details: true
    };

    return {

      /* ========== SETTINGS RELATED METHODS =============*/

      disableType: function(notificationType){
        settings[notificationType].enabled = false;
      },

      enableType: function(notificationType){
        settings[notificationType].enabled = true;
      },

      getSettings: function(){
        return settings;
      },

      toggleType: function(notificationType){
        settings[notificationType].enabled = !settings[notificationType].enabled;
      },

      /* ============ QUERYING RELATED METHODS ============*/

      getAll: function(){
        // Returns all notifications that are currently stored
        return notifications;
      },

      getQueue: function(){
        return queue;
      },

      /* ============== NOTIFICATION METHODS ==============*/

      info: function(title, content, userData){
        console.log(title, content);
        return this.awesomeNotify('info','info', title, content, userData);
      },

      error: function(title, content, userData){
        return this.awesomeNotify('error', 'remove', title, content, userData);
      },

      success: function(title, content, userData){
        return this.awesomeNotify('success', 'ok', title, content, userData);
      },

      warning: function(title, content, userData){
        return this.awesomeNotify('warning', 'exclamation', title, content, userData);
      },

      awesomeNotify: function(type, icon, title, content, userData){

        /**
         * Supposed to wrap the makeNotification method for drawing icons using font-awesome
         * rather than an image.
         *
         * Need to find out how I'm going to make the API take either an image
         * resource, or a font-awesome icon and then display either of them.
         * Also should probably provide some bits of color, could do the coloring
         * through classes.
         */
        // image = '<i class="icon-' + image + '"></i>';
        return this.makeNotification(type, false, icon, title, content, userData);
      },

      notify: function(image, title, content, userData){
        // Wraps the makeNotification method for displaying notifications with images
        // rather than icons
        return this.makeNotification('custom', image, true, title, content, userData);
      },

      makeNotification: function(type, image, icon, title, content, userData){

        var notification = {
          'type': type,
          'image': image,
          'icon': icon,
          'title': title,
          'content': content,
          'timestamp': +new Date(),
          'userData': userData
        };
        notifications.push(notification);

        
        $rootScope.$broadcast('notificatation:added');
        queue.push(notification);

        $timeout(function removeFromQueueTimeout(){

          //Fire an event to let our Controller know the notification has now been removed
          $rootScope.$broadcast('notificatation:removed');

          queue.splice(queue.indexOf(notification), 1);
        }, settings[type].duration);

        return notification;
      }

    };
  }]);
  

