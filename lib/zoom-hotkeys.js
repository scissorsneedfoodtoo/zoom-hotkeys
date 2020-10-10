'use babel';

import ZoomHotkeysMessageDialog from './zoom-hotkeys-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(ZoomHotkeysMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'ZoomHotkeysMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'ZoomHotkeysMessageDialog'
    )
    inkdrop.components.deleteClass(ZoomHotkeysMessageDialog);
  }

};
