'use babel'

import { CompositeDisposable } from 'event-kit';
import ZoomHotkeysHandler from './zoom-hotkeys-handler';

class ZoomHotkeysPlugin {
  subscriptions = new CompositeDisposable();

  activate() {
    this.subscriptions.add(
      inkdrop.commands.add(document.body, {
        'zoom-hotkeys:zoomIn': ZoomHotkeysHandler.zoomIn,
        'zoom-hotkeys:zoomOut': ZoomHotkeysHandler.zoomOut,
        'zoom-hotkeys:resetZoom': ZoomHotkeysHandler.resetZoom
      })
    );
  }

  deactivate() {
    this.subscriptions.dispose();
  }
};

module.exports = new ZoomHotkeysPlugin();
