import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  app: {
    name: 'PROJECT PHANTOM',
    version: '1.0.0',
  },
});
